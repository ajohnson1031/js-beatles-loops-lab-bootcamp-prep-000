function theBeatlesPlay(arr, arr2) {
  var comp = [];

  for(let i = 0; i < arr.length; i++) {
    comp.push(`${arr[i]} plays ${arr2[i]}`);
  }

  return comp;
}

function johnLennonFacts(arr) {
  var i = arr.length;

  while(i > 0) {
    arr[i].replace(arr[i], arr[i] + '!!!');
  }

  return arr;
}
