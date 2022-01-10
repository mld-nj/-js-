function bind(Fn, obj, ...args) {
  return function (...args2) {
    //相当于执行call函数
    if (obj === undefined || obj === null) {
      // 全局对象
      obj = globalThis;
    }
    //为obj添加临时的方法
    obj.temp = Fn;
    let result = obj.temp(...args, ...args2);
    //删除tmp方法
    delete obj.temp;
    return result;
  };
}
