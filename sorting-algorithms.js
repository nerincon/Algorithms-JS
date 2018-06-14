var arr = [1, 4, 3, 7, 9, 5, 8, 4]

console.log(arr.sort())

// Bubble Sort Algorithm

function bubbleSort (array) {
  var swapped
  do {
    swapped = false
    for (var i = 0; i < array.length; i++) {
      if (array[i] && array[i + 1] && array[i] > array[i + 1]) {
        swap(array, i, i + 1)
        swapped = true
      }
    }
  } while (swapped)
  return array
}

console.log(bubbleSort(arr))

// Selection Sort Algorithm

function selectionSort (arr) {
  var len = arr.length
  var i, j, min

  for (i = 0; i < len; i++) {
    // set minimum to this position
    min = i

    // check the rest of the array to see if anything is smaller
    for (j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }

    // if the minimum isn't in the position, swap it
    if (i !== min) {
      swap(arr, i, min)
    }
  }

  return arr
}

function swap (array, i, j) {
  var temp = array[i]
  array[i] = array[j]
  array[j] = temp
}

console.log(selectionSort(arr))
