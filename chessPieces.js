function line (num){
    console.log('-'.repeat(num));
}
/*
รูปแบบของการเคลื่อนที่
King (ราชา): 1 ช่องในทุกทิศทาง
Queen (ราชินี): เคลื่อนที่ได้ทุกทิศทาง (ไม่จำกัดช่อง)
Rook (เรือ): เคลื่อนที่ในทิศทางแนวตั้งและแนวนอน
Bishop (บิชอป): เคลื่อนที่ในทิศทางทะแยงมุม
Knight (ม้า): เคลื่อนที่ในรูปแบบ "L" และกระโดดข้ามตัวหมากอื่น ๆ
Pawn (เบี้ย): เคลื่อนที่ข้างหน้า 1 ช่อง (หรือ 2 ช่องในครั้งแรก) และกินในทิศทางทะแยงมุม
---------------------------------------------------------
King (ราชา):การเคลื่อนที่:
(4, 4) → (5, 4) หรือ (3, 4) หรือ (4, 5) หรือ (4, 3) (1 ช่องในทุกทิศทาง)
Queen (ราชินี):การเคลื่อนที่:
(4, 4) → (6, 4) (ในแนวตั้ง) หรือ (4, 6) (ในแนวนอน) หรือ (6, 6) (ในทิศทางทะแยงมุม)
Rook (เรือ):การเคลื่อนที่:
(4, 4) → (6, 4) หรือ (4, 6) (แนวตั้งและแนวนอน)
Bishop (บิชอป):การเคลื่อนที่:
(4, 4) → (6, 6) หรือ (2, 2) (ทะแยงมุม)
Knight (ม้า):การเคลื่อนที่:
(4, 4) → (6, 5) หรือ (6, 3) หรือ (5, 6) หรือ (3, 6) เป็นต้น (รูปแบบ L)
Pawn (เบี้ย):การเคลื่อนที่:
(2, 2) → (3, 2) หรือ (3, 2) → (4, 2) (เดินครั้งแรก)
*/

function isValidKnightMove(start, end) {
    const dx = Math.abs(end.x - start.x);
    const dy = Math.abs(end.y - start.y);
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
}
const start = {x: 4, y: 4};
const end = {x: 6, y: 5};
//-------------------------------------------------------------
function isValidQueenMove(start, end) {
    const dx = Math.abs(end.x - start.x);
    const dy = Math.abs(end.y - start.y);

    // ราชินีสามารถเคลื่อนที่ในแนวตั้ง, แนวนอน หรือทะแยงมุม
    return (dx === 0 || dy === 0 || dx === dy);  // เช็คการเคลื่อนที่ในแนวตั้ง, แนวนอน หรือทะแยงมุม
}
const startQueen = {x: 4, y: 4};
const endQueen1 = {x: 4, y: 6};  // เคลื่อนที่ในแนวนอน
const endQueen2 = {x: 6, y: 4};  // เคลื่อนที่ในแนวตั้ง
const endQueen3 = {x: 6, y: 6};  // เคลื่อนที่ในทิศทางทะแยงมุม
//------------------------------------------------------------------
function isValidRookMove(start, end) {
    const dx = Math.abs(end.x - start.x);
    const dy = Math.abs(end.y - start.y);
    
    // เรือสามารถเคลื่อนที่ในแนวตั้งหรือแนวนอน
    return (dx === 0 || dy === 0);
}
const startRook = {x: 4, y: 4};
const endRook1 = {x: 6, y: 4};  // เคลื่อนที่ในแนวตั้ง
const endRook2 = {x: 4, y: 6};  // เคลื่อนที่ในแนวนอน
//------------------------------------------------------------------
function isValidBishopMove(start, end) {
    const dx = Math.abs(end.x - start.x);
    const dy = Math.abs(end.y - start.y);
    // บิชอปสามารถเคลื่อนที่ในทิศทางทะแยงมุม
    return dx === dy;
}
const startBishop = {x: 4, y: 4};
const endBishop1 = {x: 6, y: 6};  // เคลื่อนที่ในทิศทางทะแยงมุม
const endBishop2 = {x: 5, y: 3};  // เคลื่อนที่ในทิศทางทะแยงมุม
//---------------------------------------------------------------------------
function isValidKnightMove(start, end) {
    const dx = Math.abs(end.x - start.x);
    const dy = Math.abs(end.y - start.y);
    // ม้าเคลื่อนที่ในรูปแบบ L: (2 ช่องในทิศทางหนึ่ง, 1 ช่องในทิศทางตั้งฉาก) 
    // หรือ (1 ช่องในทิศทางหนึ่ง, 2 ช่องในทิศทางตั้งฉาก)
    return (dx === 2 && dy === 1) || (dx === 1 && dy === 2);
}
const startKnight = {x: 4, y: 4};
const endKnight1 = {x: 6, y: 5};  // เคลื่อนที่ในรูปแบบ L
const endKnight2 = {x: 5, y: 6};  // เคลื่อนที่ในรูปแบบ L
//--------------------------------------------------------------------------
function isValidPawnMove(start, end, color) {
    const direction = (color === 'white') ? 1 : -1;  // ทิศทางการเคลื่อนที่ของเบี้ย 
    // การเคลื่อนที่ไปข้างหน้า 1 ช่อง                       // (ขึ้นสำหรับขาว, ลงสำหรับดำ)
    if (start.x === end.x && end.y === start.y + direction) {
        return true;
    }
    // การเดินครั้งแรกไปข้างหน้า 2 ช่อง
    if (start.x === end.x && end.y === start.y + 2 * direction && (start.y === 2 || start.y === 7)) {
        return true;
    }
    // กินข้างหน้า (ทะแยงมุม)
    if (Math.abs(start.x - end.x) === 1 && end.y === start.y + direction) {
        return true;
    }
    return false;
}

const startPawn = {x: 2, y: 2};
const endPawn1 = {x: 3, y: 2};  // เคลื่อนที่ 1 ช่องไปข้างหน้า
const endPawn2 = {x: 3, y: 3};  // กินข้างหน้า (ทะแยงมุม)
//-------------------------------------------------------------------------------------------------------------

line(30);
console.log(" ".repeat(7) + "chess pieces" + " ".repeat(7));
line(30);
console.log(" ".repeat(2) + "1.IsValidKnightMove" + " " + isValidKnightMove(start,end));
console.log(" ".repeat(2) + "2.IsValidQueenMove" + " " + isValidQueenMove(startQueen,endQueen1));
console.log(" ".repeat(2) + "3.IsValidRookMove" + " " + isValidRookMove(startRook, endRook2));
console.log(" ".repeat(2) + "4.IsValidBishopMove" + " " + isValidBishopMove(startBishop, endBishop2));
console.log(" ".repeat(2) + "5.IsValidKnightMove" + " " +isValidKnightMove(startKnight, endKnight2)); 
console.log(" ".repeat(2) + "6.IsValidPawnMove" + " " + isValidPawnMove(startPawn, endPawn2, 'white')); 
line(30);