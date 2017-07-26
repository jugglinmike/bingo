Array.prototype.reduce = function reduce(callbackfn) {
  let initialValue = arguments[1];

  if (this == null) {
    throw new TypeError();
  }
  let O = Object(this);
  let len = +O.length;
  len = (len < 0 ? -1 : 1) * Math.floor(Math.abs(len));
  len = len <= 0 ? 0 : Math.min(len, Math.pow(2, 53) - 1);

  if (typeof callbackfn !== 'function') {
    throw new TypeError();
  }

  if (len === 0 && arguments.length < 2) {
    throw new TypeError();
  }

  let k = 0;
  let accumulator, kPresent;

  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    kPresent = false;
    while (kPresent === false && k < len) {
      let Pk = String(k);
      kPresent = Pk in O;
      if (kPresent === true) {
        accumulator = O[Pk];
      }

      k += 1;
    }

    if (kPresent === false) {
      throw new TypeError();
    }
  }

  while (k < len) {
    let Pk = String(k);
    let kPresent = Pk in O;
    if (kPresent === true) {
      let kValue = O[Pk];
      accumulator = callbackfn.call(undefined, accumulator, kValue, k, O);
    }
    k += 1;
  }

  return accumulator;
};
