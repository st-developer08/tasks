
/* Тимур решает 15 задач. Каждая 5я  сложная и  он ленится и  их пропускает.
Сколько задач он решил? */

let task  = 0


for (let i = 1; i <= 15; i++) {
    if (i % 5 === 0) {
        console.log(`Пропущенная Задача ${i} `);
        
    }
    console.log(`Задача рещена ${i}`);
    task++
}

console.log(`Всего решено задач: ${task}`);

/* Если антимага ест Battle Fury до 12 минуты то он "он хороший игрок", если позже 12 минуты до 14 то он "средний игрок", а если позже то он "рак" */


let antiMage = prompt('Когда анти маг собрал бф?')


if (antiMage <= 12) {
    alert("Он хороший игрок!");
} else if (antiMage <= 14) {
    alert("Он средний игрок.");
} else {
    alert("Он рак");
}

/* В пруду сидят 10 лягушек. Каждая 2я лягушка квакает "ква", каждая 3я  "квак"
что квакает каждая лягушка с 1 по 10 */


for (let i = 1; i <= 10; i++) {
    if(i % 2 === 0){
        console.log(`Лягушка ${i}: ква`);
        
    }
    if(i % 3 === 0){
        console.log(`Лягушка ${i}: квак`);
    }    
}





