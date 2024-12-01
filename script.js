let number1, number2, lcm;

const randomNumbers = () => {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    return [num1, num2];
};

const calculateLCM = (a, b) => {
    const gcd = (x, y) => (!y ? x : gcd(y, x % y));
    return (a * b) / gcd(a, b);
};

const generateNewProblem = () => {
    [number1, number2] = randomNumbers();
    lcm = calculateLCM(number1, number2);
    document.getElementById("numbers").innerText = `${number1} y ${number2}`;
    document.getElementById("userInput").value = '';
    document.getElementById("feedback").innerText = '';
    document.getElementById("multiplesList").style.display = "none";
};

function checkAnswer() {
    const userInput = parseInt(document.getElementById("userInput").value, 10);
    const feedback = document.getElementById("feedback");
    const multiplesList = document.getElementById("multiplesList");

    if (userInput === lcm) {
        feedback.innerText = "¡Correcto! El MCM es " + lcm;
        feedback.className = "correct";
        multiplesList.style.display = "none";
    } else {
        feedback.innerText = `Incorrecto. Aquí están los múltiplos del ${number1} y del ${number2}:`;
        feedback.className = "incorrect";

        const multiples1 = [];
        const multiples2 = [];
        let i = 1;

        while (true) {
            const multiple1 = number1 * i;
            const multiple2 = number2 * i;
            if (multiple1 <= lcm) multiples1.push(multiple1);
            if (multiple2 <= lcm) multiples2.push(multiple2);
            if (multiple1 >= lcm && multiple2 >= lcm) break;
            i++;
        }

        multiplesList.style.display = "block";
        multiplesList.innerHTML = `
            <p>Múltiplos de ${number1}: ${multiples1.join(", ")}</p>
            <p>Múltiplos de ${number2}: ${multiples2.join(", ")}</p>
            <p>
                El mínimo común entre ${number1} y ${number2} es 
                <span style="color: red; font-weight: bold;">${lcm}</span>.
            </p>
        `;
    }
}

// Inicializa el primer problema
generateNewProblem();