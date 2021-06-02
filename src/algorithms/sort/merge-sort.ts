function _merge(arr1: Array<number>, arr2: Array<number>): Array<number> {
    let i = 0, j = 0;
    let arrSort = []
    while (i < arr1.length && j < arr2.length) {
            arrSort.push(
                (arr1[i] < arr2[j]) ? arr1[i++] : arr2[j++]
            )
    }
    return [
        ...arrSort,
        ...arr1.slice(i),
        ...arr2.slice(j)
    ]
}

function mergeSort(arr: Array<number>): Array<number> {
    if (!arr || !arr.length) return null
    if (arr.length < 2) return arr
    const middle = Math.floor(arr.length / 2)
    const arrLeft = arr.slice(0, middle)
    const arrRight = arr.slice(middle)
    return _merge(mergeSort(arrLeft), mergeSort(arrRight))
}

console.log(mergeSort([5, 1, 2, 9, 4, 7, 8]))
