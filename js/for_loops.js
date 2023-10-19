const showMultiplicationTable = num => {
    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i*num}`);
    }
}
showMultiplicationTable(7);

for (let i = 0; i < 10; i++) {
    let x = Math. floor(Math. random() * ((200-20)+1) + 20);
    console.log(i + 1);
    if (x % 2 === 0) {
        console.log(`${x} is even`);
    } else {
        console.log(`${x} is odd`);
    }
}

for (let i = 1; i < 10; i++) {
    let j = i;
    let str = "";
    while (j > 0) {
        str += String(i);
        j--;
    }
    console.log(str);
}

for (let i = 100; i > 0; i -= 5) {
    console.log(i);
}

