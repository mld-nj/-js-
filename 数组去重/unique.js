function unique(arr) {
  let result = [];
  arr.forEach((element) => {
    if (arr.indexOf(element) === -1) {
      result.push(element);
    }
  });
  return result;
}
function unique2(arr) {
  let result = [];
  let obj = {};
  arr.forEach((element) => {
    if (!obj[element]) {
      obj[element] = true;
      result.push(element);
    }
  });
  return result;
}
function unique3(arr) {
  //先将数组转化为set
  let set = new Set(arr);
  return [...set];
}
