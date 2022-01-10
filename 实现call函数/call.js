function call(Fn, obj, ...args) {
  if (obj === undefined || obj === null) {
    // 全局对象
    obj = globalThis;
  }
  //为obj添加临时的方法
  obj.temp = Fn;
  let result = obj.temp(...args);
  //删除tmp方法
  delete obj.temp;
  return result;
}
