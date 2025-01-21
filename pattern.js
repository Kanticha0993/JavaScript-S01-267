function line (num){
    console.log('-'.repeat(num));
}

//สร้างpattern2
function creatCh_Tree(n){
    for (let i = 1 ; i <= n ; i++){
        let spaces = ' '.repeat(n -i); // คำนวณช่องว่างที่ต้องการในแต่ละบรรทั
        let stars = "*".repeat(2 * i - 1); // จำนวนดาวเพิ่มขึ้นในแต่ละบรรทัด
        console.log(spaces + stars); //พิมพ์ช่องว่างและดาวในบรรทัดเดียวกัน
    }
 }
function creatCh_Tree2(n){
    for (let i = n ; i >= 1 ; i--){
        let spaces = ' '.repeat(n - i); // 
        let stars = "*".repeat(2 * i -1 ); // (i)
        console.log(spaces + stars); //
    }
 }


function creatCh_Tree3(n){
    for (let i = 1 ; i <= n ; i++){
        let spaces = ' '.repeat(n - i); 
        let stars = "*".repeat(2 * i - 1 ); //(i)
        console.log(stars + spaces);
    }
}

function creatCh_Tree4(n){
    for (let i = n ; i >= 1 ; i--){
        let spaces = ' '.repeat(n - i ); 
        let stars = "*".repeat(2 * i - 1 ); //(i)
        console.log(stars + spaces);
    }
}

function creatCh_Tree5(n) {
    for (let i = 1; i <= n; i++) {
        let spaces = ' '.repeat(n - i );  // 
        let stars = '*'.repeat(i);  // 
        console.log(spaces + stars);  // 
    }
}
line(25);
console.log(' '.repeat(6) + "Print Pattern" + ' '.repeat(5) );
line(25);
console.log(' '.repeat(6) + "Print Pattern1" + ' '.repeat(5) );
line(25);
creatCh_Tree(12);
line(25);
console.log(' '.repeat(6) + "Print Pattern2" + ' '.repeat(5) );
line(25);
creatCh_Tree2(12)
line(25);
console.log(' '.repeat(6) + "Print Pattern3" + ' '.repeat(5) );
creatCh_Tree(12);
creatCh_Tree2(12);
line(25);
console.log(' '.repeat(6) + "Print Pattern4" + ' '.repeat(5) );
line(25);
creatCh_Tree3(12);
line(25);
console.log(' '.repeat(6) + "Print Pattern5" + ' '.repeat(5) );
line(25);
creatCh_Tree4(12);
line(25);
console.log(' '.repeat(6) + "Print Pattern6" + ' '.repeat(5) );
line(25);
creatCh_Tree3(12);
creatCh_Tree4(12);
line(25);

