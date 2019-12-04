function binarySearch(arr, value) {

  let start = 0;
  let end = arr.length - 1;

  while(start <= end) {

    let mid = Math.floor((start + end) / 2);

    if(arr[mid] === value) return mid;

    else if(arr[mid] < value) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return - 1;
} 
module.exports = binarySearch;
