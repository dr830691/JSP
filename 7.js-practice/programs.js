//Find the missing number in a given integer array of 1 to 100. [1,2,4,5] should return 3
//using the XOR operator Time Complexity=O(n^2) space=O(1)
function missing_num_1(array){
    let len = array.length;
    let min=array[0];
    let max=array[0];
    for (var i=1;i<len;i++){
        if (array[i]>max){
            max=array[i];
        }
        if (array[i]<min){
            min=array[i];
        }
    }
    let missing_values=[];
    for (var i=min;i<=max;i++){
        if (!array.includes(i)){
            missing_values.push(i);
        }
    }
    return missing_values;
}

//using the binary search and sorting overall time complexity O(NlogN)
function binary_search(array,element,start,end){
    if (start>end){
        return -1;
    }
    let mid=start+Math.floor((end-start)/2);
    if (array[mid]==element){
        return mid;
    }
    else if (array[mid]>element){
        return binary_search(array,element,start,mid-1);
    }
    else{
        return binary_search(array,element,mid+1,end);
    }
}
let missing_num_2 = (array) => {
    let len = array.length;
    let min=array[0];
    let max=array[0];
    for (var i=1;i<len;i++){
        if (array[i]>max){
            max=array[i];
        }
        if (array[i]<min){
            min=array[i];
        }
    }
    array.sort();
    let missing_values=[];
    for (var i=min;i<=max;i++){
        if (binary_search(array,i,0,len-1)==-1){
            missing_values.push(i);
        }
    }
    return missing_values;
}
let given_array=[1,2,4,5,6,7,99];
console.log("The missing number from first function: ", missing_num_1(given_array));
console.log("The missing number from second function: ", missing_num_2(given_array));

//Find a duplicate number in an array of integers [1,2,3,3,4,5,6,7,7,8,9,10,11]
//Using the hashmap
let find_duplicates_1 = (array) => {
    let val_freq_map = {};
    let n = array.length;
    let duplicates = [];
    // Count the frequency of each number
    for (let i = 0; i < n; i++) {
        if (val_freq_map[array[i]] === undefined) {
            val_freq_map[array[i]] = 1;
        } else { 
            val_freq_map[array[i]]++;
            if (val_freq_map[array[i]]<3) 
            duplicates.push(array[i])
        }
    }
    return duplicates;
}

// using the sorting and iterating full array and using set data structure Time complexity O(NlogN)
let find_duplicates_2 = (array) => {
    let duplicate_numbers = new Set([]);
    let array_len = array.length;
    array.sort();
    for (let i = 1; i < array_len; i++) {
        if (array[i] == array[i - 1]) {
            duplicate_numbers.add(array[i]);
        }
    }
    return Array.from(duplicate_numbers);
}
let dup_array=[1,2,3,3,4,5,4,5,6,7,7,7,9,10,11]
console.log("Duplicate numbers from first function: ", find_duplicates_1(dup_array));
console.log("Duplicate numbers from second function: ", find_duplicates_2(dup_array));
