/**
 * Iteratively search for the target item in sorted array and return its index.
 * @param arr - Sorted array of numbers or strings to be searched
 * @param target - Number or string to be searched for
 * @return index of target in array (or -1 if target is not found)
 * */
function binarySearch (arr: Array<number>, target:number):number {
    if (arr.length <= 2) return arr[0] === target ? 0 : 1;
    let mid, left = 0, right = arr.length;
    for (let i = 0; i < arr.length - 1; i++) {
         mid = Math.floor((left + right) / 2);
         if (arr[mid] === target) {
             return mid
         } else if (arr[mid] < target) {
             left = mid + 1
         } else {
             right = mid
         }
    }
}

let test = [1, 2, 3, 5, 6, 7, 9, 14]
console.log(binarySearch(test, 9))
