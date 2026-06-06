let pos1 = 0;
let animId1 = null;
let box1 = document.getElementById("box1");

function animate1() {
    pos1 += 1;
    box1.style.left = pos1 + 'px';
    if (pos1 < 500) {
        animId1 = requestAnimationFrame(animate1);
    }
}

function startAnimation1() {
    if (animId1 === null) {
        requestAnimationFrame(animate1);
    }
}

function resetAnimation1() {
    if (animId1 !== null) {
        cancelAnimationFrame(animId1);
    }
    pos1 = 0;
    box1.style.left = '0px';
    animId1 = null;
}

let pos2 = 0;
let animId2 = null;
let box2 = document.getElementById("box2");

function animate2() {
    pos2 += 5;
    box2.style.left = pos2 + 'px';
    if (pos2 < window.innerWidth - 50) {
        animId2 = requestAnimationFrame(animate2);
    }
}

function startAnimation2() {
    if (animId2 === null) {
        requestAnimationFrame(animate2);
    }
}

function resetAnimation2() {
    if (animId2 !== null) {
        cancelAnimationFrame(animId2);
    }
    pos2 = 0;
    box2.style.left = '0px';
    animId2 = null;
}

function showVariables() {
    var x = 10;
    console.log(x);
    let y = 20;
    const z = 30;
    let output = `
        var x = ${x}<br>
        let y = ${y}<br>
        const z = ${z}<br>
        Lihat Console (F12) untuk console.log(x)!
    `;
    document.getElementById("varOutput").innerHTML = output;
}

function greetUser() {
    let name = document.getElementById("nameInput").value;
    if (name) {
        document.getElementById("greetOutput").innerHTML = `Halo, ${name}! Selamat belajar JavaScript!`;
    } else {
        document.getElementById("greetOutput").innerHTML = "Silakan masukkan nama Anda!";
    }
}

function calculate() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("calcOutput").innerHTML = "Silakan masukkan angka yang valid!";
    } else {
        let sum = num1 + num2;
        let subtract = num1 - num2;
        let multiply = num1 * num2;
        let divide = num2 !== 0 ? num1 / num2 : "Tidak bisa dibagi 0";
        
        document.getElementById("calcOutput").innerHTML = `
            Penjumlahan: ${num1} + ${num2} = ${sum}<br>
            Pengurangan: ${num1} - ${num2} = ${subtract}<br>
            Perkalian: ${num1} × ${num2} = ${multiply}<br>
            Pembagian: ${num1} ÷ ${num2} = ${divide}
        `;
    }
}
