//1. Frequency Sort ("tree") -> "eert"
//การทำ Frequency Sort คือการจัดเรียงตัวอักษรในสตริงตามจำนวนการเกิดซ้ำ (Frequency) 
// โดยตัวอักษรที่มีความถี่สูงสุดจะมาหลังสุดหรือขึ้นอยู่กับลำดับการจัดเรียงในกรณีที่ความถี่เท่ากัน
function frequencySort(str) {
    const freq = {};
    for (const char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return str.split('')
              .sort((a, b) => freq[b] - freq[a] || a.localeCompare(b))
              .join('');
}

console.log("1" + frequencySort("tree"));  // Output: "eert"

//2.Bomb Coordinates ([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]) -> [0, 25]
//เราจะหา "ตำแหน่งศูนย์กลาง" ของพิกัดที่มีระยะห่างต่ำที่สุดจากจุดอื่น ๆ ที่ให้มา
function bomb(coordinates) {
    let sumX = 0, sumY = 0;
    coordinates.forEach(coord => {
        sumX += coord[0];
        sumY += coord[1];
    });

    return [sumX / coordinates.length, sumY / coordinates.length];
}

console.log("2" + bomb([[0, 0, 72.886], [0, 50, 72.886], [25, 25, 72.886]]));  // Output: [0, 25]

//3. Secret Word ("aheiayd", 3) -> "hey"
//เราจะดึงคำที่เกิดจากตัวอักษรทุกตัวที่ตำแหน่งที่มีค่ารอบที่ 3 เป็นต้นไป
function secretWord(str, n) {
    return str.split('')
              .filter((_, i) => (i + 1) % n === 0)
              .join('');
}

console.log("3" + secretWord("aheiayd", 3));  // Output: "hey"

//4. Jumping Frog (5, [1, 3, 1, 1, 1]) -> 4
//โจทย์นี้จะบอกให้กระโดดจากจุดเริ่มต้นไปถึงจุดสุดท้ายโดยเลือกกระโดด
// ไปยังตำแหน่งที่สามารถกระโดดได้มากที่สุดในแต่ละก้าว
function jumpingFrog(n, arr) {
    let jumps = 0, position = 0;

    while (position < n - 1) {
        position += arr[position];
        jumps++;
    }

    return jumps;
}

console.log("4" + jumpingFrog(5, [1, 3, 1, 1, 1]));  // Output: 4

//5. Longest Valid Parentheses (") ( ) ( ) )") -> 4
//เราจะหาความยาวของวงเล็บที่เป็นคู่ที่ถูกต้องยาวที่สุดในสตริง
function longestValidParentheses(s) {
    let stack = [-1], maxLength = 0;

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            stack.push(i);
        } else {
            stack.pop();
            if (stack.length > 0) {
                maxLength = Math.max(maxLength, i - stack[stack.length - 1]);
            } else {
                stack.push(i);
            }
        }
    }

    return maxLength;
}

console.log("5" + longestValidParentheses(") ( ) ( ) )"));  // Output: 4

//6. Is Additive ("112358") -> true
//เป็นการตรวจสอบว่า string นี้เป็นลำดับของตัวเลขที่เพิ่มขึ้นเรื่อยๆ
function isAdditive(num) {
    for (let i = 1; i < num.length; i++) {
        for (let j = i + 1; j < num.length; j++) {
            let first = num.slice(0, i), second = num.slice(i, j);
            if (first[0] === '0' && first.length > 1 || second[0] === '0' && second.length > 1) continue;

            let sum = (BigInt(first) + BigInt(second)).toString();
            let remaining = num.slice(j);
            if (remaining.startsWith(sum)) return true;
        }
    }
    return false;
}

console.log("6" + isAdditive("112358"));  // Output: true

//7. Count Animals ("goatcode") -> 2
//นับจำนวนของสัตว์ (เช่น "goat", "cat", "dog") ที่มีอยู่ในสตริง
function count_animals(str) {
    const animals = ["goat", "cat", "dog"];
    let count = 0;

    animals.forEach(animal => {
        const regex = new RegExp(animal, 'g');
        count += (str.match(regex) || []).length;
    });

    return count;
}

console.log("7" + count_animals("goatcode"));  // Output: 2

//8. Sort Characters by Frequency, Case, and Alphabet
//การจัดเรียงตัวอักษรตามความถี่ (Frequency) ก่อนแล้วตามด้วยตัวพิมพ์ใหญ่ 
// (Case) และตัวอักษร (Alphabet)
function sortCharacters(str) {
    const freq = {};

    for (let char of str) {
        freq[char] = (freq[char] || 0) + 1;
    }

    return str.split('')
              .sort((a, b) => {
                  if (freq[a] !== freq[b]) return freq[b] - freq[a];
                  if (a.toLowerCase() !== b.toLowerCase()) return a.toLowerCase() > b.toLowerCase() ? 1 : -1;
                  return a > b ? 1 : -1;
              })
              .join('');
}

console.log("8" + sortCharacters("tree"));  // Output: "eert"
