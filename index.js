function theBeatlesPlay(arr, arr2) {
  var finArr = [];

  for(let i = 0; i < arr.length; i++) {
    finArr.push(`${arr[i]} plays ${arr2[i]}`);
    return finArr;
  }
}