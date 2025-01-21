const numbers = [1,3,8,4,6,9,10,23,];

//หาค่ามากสุด
function findMax (arr){
    if(arr.length === 0){
        return "Array is empty"
    }
    let max = arr[0];
    for(let i = 1 ;i < arr.length ;i++){
        if(arr[i] > max){
            max = arr[i];
        }
    }
    return max;
}
console.log(findMax(numbers));

//หาค่าน้อยที่สุด
function findMin (arr){
    if(arr.length === 0){
        return "Array is empty"
    }
    let min = Infinity;
    for(let i = 1 ;i < arr.length ;i++){
        if(arr[i] < min ){
            min = arr[i];
        }

    }
    return min;
}
console.log(findMin(numbers));

//ตรวจเลขคู่เลขคี่
const nums = 42 ;
function checkEven (num){
    if(num % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}
    
console.log(checkEven(nums));

//หาผลรวมเลขในอาร์เรย์
let arrays = [1,2,3,4];
function sumArray(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++ ){
        sum += arr[i];
    }
    return sum;
}
console.log(sumArray(arrays));

//หาจำนวนเฉพาะ
function isPrime(isnum){
    //let isnum = 24
    if (isnum <= 0){
        return false;
    }
    for(let i = 2 ;i < isnum ; i++){
        if(isnum % 1 === 0){
            return false;
        }
    }

    return true;
}

console.log(isPrime(24));

//การสร้างตัวอักษรตามรูปแบบที่กำหนด (Pattern)
function printPattern(n) {
    for (let i = 1; i <= n; i++) {
        let row = '';
        for (let j = 0; j < i; j++) {
            row += '*';
        }
        console.log(row);
    }
}

printPattern(5); 

//การหาค่ามัธยฐาน (Median) ของอาร์เรย์
let numberss = [7, 2, 9, 4, 5];
function median(arr) {
    let numberss = [7, 2, 9, 4, 5];
    arr.sort((a, b) => a - b);  // เรียงลำดับอาร์เรย์
    let middle = Math.floor(arr.length / 2);
    if (arr.length % 2 === 0) {
        return (arr[middle - 1] + arr[middle]) / 2;
    } else {
        return arr[middle];
    }
}
console.log(median(numberss));

//การสร้างอาร์เรย์จากค่าที่รับเข้ามา
function creatArray(n){
    let arr = [];
    for(let i = 1 ; i <= n ;i++){
        arr.push(i)
    }
    return arr
}
console.log(creatArray(10));