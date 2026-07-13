let countEl = document.getElementById("home-el")
let guestel = document.getElementById("count-el")
let Gcount = 0;
let HOMEcount = 0;

function increment1() {
    countEl.innerText = HOMEcount+1;
    HOMEcount++;
}

function increment2() {
    countEl.innerText = HOMEcount+2;
    HOMEcount+=2;
}

function increment3() {
    countEl.innerText = HOMEcount+3;
    HOMEcount+=3;
}


function increment1g() {
    guestel.innerText = Gcount+1;
    Gcount++;
}

function increment2g() {
    guestel.innerText = Gcount+2;
    Gcount+=2;
}

function increment3g() {
    guestel.innerText = Gcount+3;
    Gcount+=3;
}