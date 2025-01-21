console.log("How use Split!!!")
line(40);
//ทำเส้นขั้น
function line (num){
    console.log('-'.repeat(num));
}
/*แยกตัวเลขเป็นตัวเลขย่อยๆ*/
function numberSplit(num){
    return num.toString().split('').map(Number); //เเยกเลขเป็นอาร์เรย์
}
let num1 = 123456; //กำหนดค่า
console.log("1. NumSplit of " + num1 +" is: "+ numberSplit(num1) );

/*

*/
line(45);


/*แยกเลขเป็นกลุ่มตามจำนวนหลัก*/
function numberSplitByGroup(num,group){
    let str = num.toString();
    let result = [];

    for (let i = 0 ; i < str.length ; i += group){
        result.push(parseInt(str.slice(i,i + group)));
    }
    
    return result;
}
let num2 = 123456; 
let group = 2;
console.log("2.NumberSplitByGroup of "+ num2 +','+ group + " is: " + numberSplitByGroup(num2,group) );
/*
1) num.toString():แปลงตัวเลขเป็นสตริง เพื่อให้ง่ายต่อการจัดการกับแต่ละหลัก.
2) for (let i = 0; i < str.length; i += group):
ใช้ลูป for เพื่อวนซ้ำผ่านตัวเลขในสตริง โดยเริ่มต้นที่ตำแหน่ง i ที่ 0 
และเพิ่มค่าของ i ทีละ group เพื่อดึงกลุ่มตัวเลขที่มีขนาด group.
3) str.slice(i, i + group):
ใช้ slice() เพื่อดึงช่วงของตัวเลขที่เริ่มต้นจากตำแหน่ง i และมีความยาว group 
เช่น ถ้า group = 2 จะดึงเลข 2 หลัก (เช่น จาก 123456, กลุ่มแรกจะได้ 12).
4) parseInt():แปลงสตริงที่ได้จาก slice() เป็นตัวเลข
 เช่น "12" จะกลายเป็น 12.
*/
line(45);


/*แยกตัวเลขออก แล้วเก็บเฉพาะตัวเลขที่มีค่าที่ต้องการ*/
function numberSplitFilter (num){
    return num.toString().split('').map(Number).filter(n => n >= 5);
}
let num3 = 12345678;
console.log("3.NumberSplitFilter of " + num3 + " is: "+numberSplitFilter(num3) );
/*
1) num.toString():
แปลงตัวเลขเป็นสตริงเพื่อให้เราสามารถใช้ฟังก์ชัน split() ได้.
2) .split(''):
แยกสตริงออกเป็นอาร์เรย์ของอักขระแต่ละตัว 
(เช่น "123456" เป็น ['1', '2', '3', '4', '5', '6']).
3) .map(Number):
ใช้ map(Number) เพื่อแปลงอักขระเหล่านั้นให้เป็นตัวเลข 
(เช่น '1' เป็น 1).
4) .filter(n => n >= 5):
ใช้ filter() เพื่อเลือกเฉพาะตัวเลขที่มีค่ามากกว่าหรือเท่ากับ 5.
*/
line(45);

/*การหาผลรวมของตัวเลขที่แยกออกมา*/
function numberSplitSum (num){
    let nums = num.toString().split('').map(Number);
    return nums.reduce((sum,n) => sum + n , 0);
}
let num4 = 123456;
console.log("4.NumberSplitSum of " + num4 + " is " + numberSplitSum(num4));
/*
1.) num.toString(): แปลงตัวเลข num เป็นสตริง.
2.) .split(''):แยกสตริงออกเป็นอาร์เรย์ของอักขระ 
(เช่น "12345" เป็น ['1', '2', '3', '4', '5']).
3.) .map(Number):แปลงอักขระที่เป็นสตริงเป็นตัวเลข 
(เช่น '1' เป็น 1).
4.) .reduce((sum, n) => sum + n, 0):
ใช้ reduce() เพื่อคำนวณผลรวมของตัวเลขในอาร์เรย์ 
โดยเริ่มต้นจากค่า 0 และทำการบวกค่าตัวเลขแต่ละตัวไปเรื่อย ๆ.
*/
line(45);

/* */
function numberSplitSum2 (num){
    let nums = numberSplit(num);
    return nums.reduce((sum,n) => sum + n ,0);
    
}
let num5 = 6666;
console.log("5.NumberSplitSum2 of "+ num5 +" is: "+numberSplitSum2(num5)); 
line(45);