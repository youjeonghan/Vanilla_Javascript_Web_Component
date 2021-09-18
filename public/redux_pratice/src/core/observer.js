let a;
let b;
let c;
let cnt = 0;
//
let currentObserver = null;

export const observe = fn => {
  currentObserver = fn;
  fn();
  currentObserver = null;
};

export const observable = obj => {
  Object.keys(obj).forEach(key => {
    let _value = obj[key];
    const observers = new Set();

    Object.defineProperty(obj, key, {
      get() {
        // console.log(key, [...observers].length);
        if (currentObserver) {
          // if (cnt == 0) {
          //   a = currentObserver;
          //   cnt++;
          // } else if (cnt == 1) {
          //   b = currentObserver;
          //   cnt++;
          // } else if (cnt == 2) {
          //   c = currentObserver;
          //   cnt++;
          // } else if (cnt == 3) {
          //   console.log(b, c, b === c);
          //   cnt++;
          // }
          observers.add(currentObserver);
        }
        return _value;
      },

      set(value) {
        console.log(_value, value, _value == value, _value === value);
        if (_value === value) return;
        if (JSON.stringify(_value) === JSON.stringify(value)) return;
        _value = value;
        observers.forEach(fn => fn());
      }
    });
  });
  return obj;
};
