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

    

const a=5
const b= 10
const povrsinaPravouganika=a*b
const obimPravougaonika=2*a+2*b
console.log(povrsinaPravouganika);
console.log(obimPravougaonika);
const poruka5=`Povrsina pravougaionika je  ${povrsinaPravouganika}, obim pravougaonika je  ${obimPravougaonika}`
console.log(poruka5);

const pi=3.14
const r=5
const obimKruga=(2*pi*r).toFixed(2)
const povrsinaKruga=pi*(r*r)
const poruka6=`Obim kruga je  ${obimKruga}, povrsina kruga je  ${povrsinaKruga}`
console.log(poruka6);


const povrsinaLopte=4*pi*(r*r)
const zapreminaLopte=((3/4)*pi*(r*r*r)).toFixed(2)
const poruka3=`Povrsina lopte je  ${povrsinaLopte}, zapremina lopte je  ${zapreminaLopte}`
console.log(poruka3);


const kilometri=2000
const t=10
const prosecnaBrzina=(kilometri/t).toFixed(1)
const poruka4=`prosecna brzina je  ${prosecnaBrzina}`
console.log(poruka4);


const farenhajt=100
const celzijus= ((5/9)*(farenhajt-32)).toFixed(2)
const poruka10=`Ovoliko ima celzijusa  ${celzijus}`
console.log(poruka10);





 

 

 
 





