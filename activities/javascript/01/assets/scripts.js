let btnMorning = document.getElementById("btn-morning");
btnMorning.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-greeting").innerText = "Good morning";
    document.getElementById("p-fullname").innerText = FullName;
});

let btnAfternoon = document.getElementById("btn-afternoon");
btnAfternoon.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-greeting").innerText = "Good Afternoon";
    document.getElementById("p-fullname").innerText = FullName;
});

let btnEvening = document.getElementById("btn-evening");
btnEvening.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-greeting").innerText = "Good evening";
    document.getElementById("p-fullname").innerText = FullName;
});

//Lower Case
let btnLowerCase = document.getElementById("btn-success");
btnLowerCase.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-output").innerText = FullName.toLowerCase();
});


//String Length
let btnLength = document.getElementById("btn-primary");
btnLength.addEventListener('click', function() {

    let FullName = document.getElementById("txt-fullname").value;
    
    document.getElementById("h1-output").innerText = FullName.length;
});

//Output
let btnOutput = document.getElementById("btn-danger");
btnOutput.addEventListener('click', function() {
    let Output = document.getElementById("h1-output").innerHTML;
    console.log(Output);
});

//Contatenation
let btnConcat = document.getElementById("btn-danger");
btnConcat.addEventListener('click', function() {
    let Prefix = "Good Morning, ";
    let FullName = document.getElementById("txt-fullname").value;
    
    let Concatenated = Prefix + FullName;
    document.getElementById("h1-output").innerText = Concatenated;
    console.log(Output);
});

