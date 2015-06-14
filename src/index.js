export default function (properties) {
  return function (cls) {
    function Constructor(...params) {
      Object.keys(properties).forEach(key => {
        this[key] = properties[key];
      });
      cls.apply(this, params);
    };
    Constructor.prototype = cls.prototype;
    return Constructor;
  }
}