const nonByteStringValue = /[^\x00-\xff]/;

function patchHeadersMethod(methodName) {
  const original = Headers.prototype[methodName];
  if (typeof original !== "function") {
    return;
  }

  Headers.prototype[methodName] = function ignoreLocalFileHeaders(name, value) {
    try {
      return original.call(this, name, value);
    } catch (error) {
      if (
        error instanceof TypeError &&
        typeof value === "string" &&
        nonByteStringValue.test(value)
      ) {
        return undefined;
      }

      throw error;
    }
  };
}

patchHeadersMethod("set");
patchHeadersMethod("append");
