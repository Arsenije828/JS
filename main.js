window.document.getElementsByTagName("p")[0].innerHTML = "<strong>Dinamicki unet tekst</strong>";
document.getElementById("demo").innerText ="Promenili smo izvorni teks uz pomoc JS";
document.getElementsByClassName("demos")[0].style.background="red";
document.getElementsByClassName("demos")[0].style.fontSize="60px";
document.querySelector(".demos").style.color="white";
// document.querySelectorAll(".demos").style.border="2px solid green";
document.getElementsByName("ime")[0].value="Marko"
console.log("afafaf")
console.log(document.getElementsByName("ime")[0].value);
console.log(document.getElementById("demo").innerHTML);
// definicija i inicijalizacija promenljive
var x=5
console.log(x);

x=20
console.log(x);

//2015 ES6
//let i const
let y=3
y=5
console.log(y);

const z=6
//z=7
 const ukupnoDana=10000
 const godine=Math.floor(ukupnoDana / 365)
 let ostaloDana=ukupnoDana%365
 const Meseci=Math.floor(ostaloDana/30)
 ostaloDana = ostaloDana % 30
 console.log(ostaloDana);
 const poruka="Godina: "+godine+"meseci: "+Meseci+"dana: "+ostaloDana
 console.log(poruka);

 const poruka2=`godina im: ${godine}, meseci  `
 console.log(poruka2);
 

 

 
 





