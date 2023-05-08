const billEl = document.getElementById("billinput");
const tipEl = document.getElementById("tipinput");
const btnEl = document.getElementById("calculate");
const totalEl=document.getElementById("total");
const totallabelEl = document.getElementById("totallabel");


function calculate(){
    const billvalue = billEl.value;
    const tipvalue = tipEl.value;
    if(billvalue == 0 && tipvalue == 0){
        alert("Please Enter The Value.")
    }
    else{
    let total = billvalue * (1 + tipvalue/100);
    totalEl.innerText = total.toFixed(2);
    totalEl.style.display = "inline";
    totallabelEl.style.display = "inline"; 
    }
}

btnEl.addEventListener("click", calculate);