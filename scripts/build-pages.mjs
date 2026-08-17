import { cp, mkdir, rm, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { pathToFileURL } from "node:url";
import "./patch-local-headers.mjs";

const root = resolve(import.meta.dirname, "..");
const distClient = resolve(root, "dist/client");
const distPages = resolve(root, "dist-pages");
const workerPath = resolve(root, "dist/server/index.js");

async function renderHome() {
  const workerUrl = pathToFileURL(workerPath);
  workerUrl.searchParams.set("static", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  const response = await worker.fetch(
    new Request("https://constructorawg.pages.dev/", {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );

  if (!response.ok) {
    throw new Error(`Static render failed with status ${response.status}`);
  }

  return response.text();
}

await rm(distPages, { force: true, recursive: true });
await mkdir(distPages, { recursive: true });
await cp(distClient, distPages, { recursive: true });
await writeFile(resolve(distPages, "index.html"), await renderHome());
await rm(resolve(root, "dist/server/wrangler.json"), { force: true });
await rm(resolve(root, ".wrangler/deploy/config.json"), { force: true });

console.log("Cloudflare Pages static output written to dist-pages");
