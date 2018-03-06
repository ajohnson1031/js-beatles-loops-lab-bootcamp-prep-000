function theBeatlesPlay(arr, arr2) {
  var comp = [];

  for(let i = 0; i < arr.length; i++) {
    comp.push(`${arr[i]} plays ${arr2[i]}`);
  }

  return comp;
}
