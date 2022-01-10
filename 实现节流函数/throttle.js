function throttle(callback, wait) {
  //定义开始时间
  let start = 0;
  //但会结果是一个函数
  return function (e) {
    //获取当前时间戳
    let now = Date.now();
    if (now - start >= wait) {
      //满足条件，则执行回调函数
      callback.call(this, e);
      //修改开始shijian
      start = now;
    }
  };
}
