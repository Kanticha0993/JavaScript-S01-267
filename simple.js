const numbers = [1,3,8,4,6,9,10,23,];

function line (num){
    console.log('-'.repeat(num));
}

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

//ตรวจเลขคู่เลขคี่
const nums = 42 ;
function checkEven (num){
    if(num % 2 === 0){
        return "Even"
    }else{
        return "Odd"
    }
}
    
//หาผลรวมเลขในอาร์เรย์
let arrays = [1,2,3,4];
function sumArray(arr){
    let sum = 0;
    for(let i = 0 ; i < arr.length ; i++ ){
        sum += arr[i];
    }
    return sum;
}

//หาจำนวนเฉพาะ
let isnums = 1;
function isPrime(isnum){
    if (isnum <= 0){
        return "Not prime number";
    }
    for(let i = 2 ;i < isnum ; i++){
        if(isnum % 1 === 0){
            return "Not prime number";
        }
    }

    return "Is prime number";
}


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

//การสร้างอาร์เรย์จากค่าที่รับเข้ามา
let n = 10;
function creatArray(n){
    let arr = [];
    for(let i = 1 ; i <= n ;i++){
        arr.push(i)
    }
    return arr;
}

console.log('-'.repeat(15)+ "Simple JS" + '-'.repeat(15));
line(40);
console.log("Data is: " + numbers);
line(40);
console.log("1.FindMax of "+ numbers+ " is: " + findMax(numbers));
line(40);
console.log("2.FindMin of " + numbers + " is: " +findMin(numbers));
line(40);
console.log("3.CheckEven of " + nums + " is: " +checkEven(nums));
line(40);
console.log("4.sumArray of " + arrays + " is: " + sumArray(arrays));
line(40);
console.log("5.IsPrime of " +  isnums + " is: " + isPrime(isnums));
line(40);
console.log("6.Median of " + numberss + "is: " +median(numberss));
line(47);
console.log("7.CreatArray of " + n +" is: " + "[ " + creatArray(n) + " ]");
line(47);
