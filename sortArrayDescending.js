function sortArrayDescending(arr) {
    let n = arr.length;
    let swapped;
    
    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] < arr[i + 1]) {

                let temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return arr;
}

let inputArray = [4, 1, 8, 2, 6];
let sortedArray = sortArrayDescending(inputArray);
console.log(sortedArray);
