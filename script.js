function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    
    if (!weight || !height) {
        alert("Por favor, ingresa ambos valores.");
        return;
    }
    
    const bmi = weight / (height * height);
    let resultText;
    
    if (bmi < 18.5) resultText = "Bajo peso";
    else if (bmi < 24.9) resultText = "Peso normal";
    else if (bmi < 29.9) resultText = "Sobrepeso";
    else resultText = "Obesidad";
    
    document.getElementById("result").innerText = `Tu IMC es ${bmi.toFixed(2)} - ${resultText}`;
}