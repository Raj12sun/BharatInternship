let Celsius=document.getElementById("cel");
let  Farenheit=document.getElementById("far");

Celsius.oninput = () =>{
    let Output = (parseFloat(Celsius.value)*9) /5+32;
    Farenheit.value = parseFloat(Output.toFixed(2));
};

Farenheit.oninput = () =>{
    let Output = ((parseFloat(Farenheit.value)-32)*5)/9;
    Celsius.value = parseFloat(Output.toFixed(2));
};