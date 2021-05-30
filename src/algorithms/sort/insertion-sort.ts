/**
 * Perform insertion sort on given array of numbers
 * @param arr - Array of numbers to be sorted
 * @return arr - Array sorted in ascending order
 * */
function insertionSort(arr: Array<number>): Array<number>{
    for (let i = 1; i < arr.length; ++i) {
        let k = i;
        while (k > 0 && arr[k - 1] > arr[k]) {
            [arr[k-1], arr[k]] = [arr[k], arr[k-1]]
            k -= 1
        }
    }
    return arr
}
console.log(insertionSort([5,4,3,2,1]))
