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

line(30);
console.log("1.NumberSplit of " +num +" is: " + numberSplit(num)); // Output: [5, 6]
line(30);
console.log("2.CapToFront of" +word+" is: " + capToFront(word)); // Output: [5, 6]
line(30);