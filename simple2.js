function line (num){
    console.log('-'.repeat(num));
}

let num = 11;
function numberSplit(num) {
    // หาค่าครึ่งหนึ่งของจำนวน num
    const half = Math.floor(num / 2); // ใช้ Math.floor() เพื่อปัดเศษลง
    // ถ้าเลขเป็นเลขคู่ จะได้ค่าทั้งสองเท่า ถ้าเลขเป็นเลขคี่ ก็จะแบ่งได้ค่าที่ต่างกัน
    if (num % 2 === 0) {
        return [half, half]; // ถ้าเป็นเลขคู่
    } else {
        return [half, half + 1]; // ถ้าเป็นเลขคี่
    }
}
const word = "hApPy";
function capToFront (word){
    const uppercaseLetters = word.split('').filter(char => char === char.toUpperCase()).join('');
    const lowercaseLetters = word.split('').filter(char => char === char.toLowerCase()).join('');
    return uppercaseLetters + lowercaseLetters ;
}
/**
1.)str.split(''): แยกข้อความออกเป็นอาเรย์ของตัวอักษรแต่ละตัว
2.)filter(char => char === char.toUpperCase()): ใช้ filter() เพื่อเลือกเฉพาะตัวอักษรที่เป็นตัวใหญ่
3.)filter(char => char === char.toLowerCase()): ใช้ filter() เพื่อเลือกเฉพาะตัวอักษรที่เป็นตัวเล็ก
4.)join(''): รวมตัวอักษรที่แยกไว้เป็นสตริงกลับคืน
5.)uppercaseLetters + lowercaseLetters: รวมตัวอักษรตัวใหญ่ไว้ที่หน้าก่อน แล้วตามด้วยตัวอักษรตัวเล็ก
 */

function totalVolumeOfAllBoxes(boxes) {
    let totalVolume = 0;
    // คำนวณปริมาตรของแต่ละกล่องและบวกเข้ากับ totalVolume
    for (let box of boxes) {
        const volume = box.length * box.width * box.height;
        totalVolume += volume;
    }
    return totalVolume;
}

// ตัวอย่างการทดสอบ
const boxes = [
    { length: 2, width: 3, height: 4 },  // ปริมาตร = 2 * 3 * 4 = 24
    { length: 5, width: 5, height: 5 },  // ปริมาตร = 5 * 5 * 5 = 125
    { length: 1, width: 1, height: 1 }   // ปริมาตร = 1 * 1 * 1 = 1
];

const totalVolume = totalVolumeOfAllBoxes(boxes);
//-------------------------------------------------------------

function getSumOfPeopleBudget(people) {
    // ใช้ reduce เพื่อคำนวณผลรวมของ budget
    return people.reduce((sum, person) => sum + person.budget, 0);
}
// ตัวอย่างข้อมูลคนแต่ละคนกับงบประมาณ
const people = [
    { name: "John", budget: 100 },
    { name: "Jane", budget: 200 },
    { name: "Tom", budget: 150 },
    { name: "Lucy", budget: 50 }
];
const totalBudget = getSumOfPeopleBudget(people);

//---------------------------------------------------------------------------------------
const numbers = [1, 2, 2, 3, 4, 4, 5];        //1.ใช้ Set - Set จะเก็บค่าที่ไม่ซ้ำกันโดยอัตโนมัติ
const animals = ["cat","dog","cat","momo"];  //2.ใช้ filter - ใช้ filter เพื่อเก็บค่าที่ไม่ซ้ำกัน
const peoples = ["Gobgab","Oreo","Oreo","Gob"] //3.ใช้ reduce - สะสมค่าโดยไม่ให้ค่าซ้ำ

function removeDuplicates1(arr) {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
}

function removeDuplicates2(arr) {
    return arr.reduce((unique, value) => {
        if (!unique.includes(value)) {
            unique.push(value);
        }
        return unique;
    }, []);
}

function removeDuplicates3(arr) {
    return [...new Set(arr)];  // แปลง Set เป็นอาเรย์
}
/*
วิธีที่ 1 (Set): ใช้ได้เร็วและสะดวกที่สุดในการลบค่าซ้ำ
วิธีที่ 2 (filter): ใช้ได้ในกรณีที่ต้องการคอนโทรลการกรองค่าซ้ำได้มากขึ้น
วิธีที่ 3 (reduce): ใช้ได้ดีเมื่อคุณต้องการสะสมค่าโดยไม่ให้ซ้ำ
*/
const numbers2 = [19, 5, 42, 2, 77];
function sumOfTwoSmallestNumbers(arr) {
    arr.sort((a, b) => a - b); // เรียงลำดับอาเรย์จากน้อยไปมาก
    return arr[0] + arr[1]; // ผลรวมของสองค่าที่น้อยที่สุด
}
const numbers3 = [2, 5, 3, 7, 4, 1, 6];
const target = 10;
function findPairs1(arr, targetSum) {
    let pairs = [];
    let seen = new Set(); // ใช้ Set เพื่อเก็บค่าที่เราพบแล้ว

    for (let num of arr) {
        let complement = targetSum - num; // ตัวเลขที่ต้องการเพื่อให้ผลบวกได้ targetSum
        if (seen.has(complement)) {
            pairs.push([complement, num]);
        }
        seen.add(num);
    }

    return pairs;
}

const names = ['Alice', 'Bob', 'Alice', 'Eve', 'Bob', 'Charlie'];
function findMatchingPairs(arr) {
    let pairs = [];
    let seen = new Set();

    for (let item of arr) {
        if (seen.has(item)) {
            pairs.push(item);  // ถ้าเจอค่าที่ซ้ำกันจะเก็บไว้ในอาเรย์
        }
        seen.add(item);
    }

    return pairs;
}
//การแปลงเวลา 24 ชั่วโมงเป็นเวลา 12 ชั่วโมง (AM/PM)
function convertTo12HourFormat(time24) {
    // แบ่งเวลาที่รับมาเป็นชั่วโมงและนาที
    let [hours, minutes] = time24.split(':').map(num => parseInt(num));
    let period = hours >= 12 ? 'PM' : 'AM'; // คำนวณ AM/PM
    hours = hours % 12;                     // แปลงเวลาเป็น 12 ชั่วโมง
    hours = hours === 0 ? 12 : hours; // ชั่วโมง 0 แปลงเป็น 12

    // เพิ่มเลข 0 หน้าหากนาที < 10
    minutes = minutes < 10 ? '0' + minutes : minutes;

    // ส่งคืนเวลาในรูปแบบ 12 ชั่วโมง
    return `${hours}:${minutes} ${period}`;
}
// การแปลงจากวินาทีเป็นเวลา (ชั่วโมง:นาที:วินาที)
function convertSecondsToTime(seconds) {
    let hours = Math.floor(seconds / 3600); // หาชั่วโมง
    let minutes = Math.floor((seconds % 3600) / 60); // หานาที
    let remainingSeconds = seconds % 60; // หาวินาทีที่เหลือ

    // เพิ่ม 0 หากชั่วโมงหรือนาที/วินาที < 10
    hours = hours < 10 ? '0' + hours : hours;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    remainingSeconds = remainingSeconds < 10 ? '0' + remainingSeconds : remainingSeconds;
    return `${hours}:${minutes}:${remainingSeconds}`;
}
//การแปลงเวลา 12 ชั่วโมงเป็นเวลา 24 ชั่วโมง
function convertTo24HourFormat(time12) {
    let [time, period] = time12.split(' ');  // แยกเวลาออกจาก AM/PM
    let [hours, minutes] = time.split(':').map(num => parseInt(num));

    if (period === 'PM' && hours !== 12) {
        hours += 12;  // แปลง PM เวลา
    } else if (period === 'AM' && hours === 12) {
        hours = 0;  // แปลง 12 AM เป็น 00
    }
    // เพิ่มเลข 0 หน้าหากนาที < 10
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes}`;
}
//การแปลงเวลาจากวันที่ (Timestamp) เป็นรูปแบบวันที่/เวลา
function convertTimestampToDate(timestamp) {
    let date = new Date(timestamp);
    return date.toLocaleString();  // ใช้ toLocaleString เพื่อแสดงวันที่และเวลาในรูปแบบที่เหมาะสม
}
//วิธีการตรวจสอบ IPv4 Address
const ipv4 =[
    "192.168.1.1","256.256.256.256",
    "123.045.067.089","0.0.0.0",
    "192.168.1.999"
    ]
function isValidIPv4(ip) {
    // Regular expression สำหรับตรวจสอบ IPv4
    const regex = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
    
    // ทดสอบ IP กับ Regular Expression
    return regex.test(ip);
}


line(30);
console.log("1.NumberSplit of " +num +" is: " + numberSplit(num)); // Output: [5, 6]
line(30);
console.log("2.CapToFront of" +word+" is: " + capToFront(word)); // Output: [5, 6]
line(30);
console.log("3.TotalValueOfAllBOxes is: " , totalVolume); 
line(30);
console.log("4.GetSumOfPeopleBudget  is: " , totalVolume); 
line(65);
console.log("5.RemoveDuplicates1 Of " + numbers + " is: " ,removeDuplicates1(numbers)); 
line(75);
console.log("6.RemoveDuplicates2 Of " + animals + " is: " ,removeDuplicates2(animals)); 
line(80);
console.log("7.RemoveDuplicates3 Of " + peoples + " is: " ,removeDuplicates3(peoples)); 
line(80);
console.log("8.SumOfTwoSmallestNumbers Of " + numbers2 + " is: " ,sumOfTwoSmallestNumbers(numbers2)); 
line(60);
console.log("9.FindPairs1 Of " + numbers3 + " is: " ,findPairs1(numbers3)); 
line(86);
console.log("10.SumOfTwoSmallestNumbers Of " + names + " is: " ,findMatchingPairs(names)); 
line(86);
console.log("11.ConvertTo12HourFormat Of 14:30 is: "+convertTo12HourFormat("14:30"));
line(60);
console.log("12.ConvertSecondsToTime Of 3661 seconds is: "+convertSecondsToTime(3661));
line(60);
console.log("13.ConvertSecondsToTime");
console.log("ConvertSecondsToTime Of 2.30 PM is: "+convertTo12HourFormat("2:30 PM"));
console.log("ConvertSecondsToTime Of 12.15 AM is: "+convertTo12HourFormat("12:15M"));
line(85);
console.log("14.ConvertTimestampToDate Of timestamp 1674244200000 is: "+ convertTimestampToDate(1674244200000)); 
line(85);
console.log("15.IsValidIPv4"); 
console.log("IsValidIPv4 Of " + ipv4[0] + " is: "+isValidIPv4(ipv4));
console.log("IsValidIPv4 Of " + ipv4[1] + " is: "+isValidIPv4(ipv4)); 
console.log("IsValidIPv4 Of " + ipv4[2] + " is: " +isValidIPv4(ipv4)); 
console.log("IsValidIPv4 Of " + ipv4[3] + " is: " +isValidIPv4(ipv4)); 
line(85);