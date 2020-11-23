


const btnpo = document.getElementById("po");



const cdetails = document.getElementById("cdetails");
const name = document.getElementById("name");
const email = document.getElementById("email");
const tnumber =document.getElementById("tnumber");
const cname =document.getElementById("cname");
const customere =document.getElementById("customere");
const customern =document.getElementById("customern");

cdetails.addEventListener("change",details);
function details(){
  cname.innerText=("Name : "+ name.value); 
  customere.innerText=("E-mail : "+ email.value);
  customern.innerText=("Telephone Number : "+ tnumber.value);   
}

const type = document.getElementById("type");

let teamanu=null;
let price=0;

type.addEventListener("change", teamanufacture);
function teamanufacture(){
if (document.getElementById("d").checked){
  teamanu=`Dilma`
  price=1000;
}
if (document.getElementById("j").checked){
  teamanu=`Jones`
  price=1500;
}
if (document.getElementById("gs").checked){
  teamanu=`George Steuart`
  price=1000;
}
if (document.getElementById("mvp").checked){
  teamanu=`Malwatte Valley Plantations`
  price=2000;
}
if (document.getElementById("pct").checked){
  teamanu=`Prestige Ceylon Teas`
  price=1000;
}
if (document.getElementById("et").checked){
    teamanu=`Empire teas`
    price=2000;
}
cocost.innerText=`Current order cost: ${price}`;
currentorder.innerText=`Tea manufacturer: ${teamanu}. `
}

const ptype = document.getElementById("ptype");

let pprice=0;
let packaging;
ptype.addEventListener("change",cost);
function cost(){
if (document.getElementById("paperp").checked){
packaging=`Paper Pouches`
pprice=1000;
}
if (document.getElementById("tins").checked){
packaging=`Tins`
pprice=5000;
}
if (document.getElementById("bags").checked){
packaging=`Bags`
pprice=2500;
}
cocost.innerText=`Current order cost: ${pprice+price}`;
currentorder.innerText=`Tea manufacturer= ${teamanu}.Package type= ${packaging}.`
}

const size =document.getElementById("size");
let sprice=0;
let sz;
size.addEventListener("change",ss);
function ss(){
    if (document.getElementById("s").checked){
    sz=`small`
    sprice=1000;
    }
    if (document.getElementById("m").checked){
    sz=`medium`
    sprice=2500;
    }
    if (document.getElementById("l").checked){
    sz=`large`
    sprice=5000;
    }
    cocost.innerText=`Current order cost: ${sprice+pprice+price}`;
    currentorder.innerText=`Tea manufacturer= ${teamanu},Package type=${packaging},size=${sz}`
    }

const currentorder =document.getElementById("currentorder");
const cocost =document.getElementById("cocost");
const extra = document.getElementById("extra");

let eprice=0;
let ex;
ptype.addEventListener("change",extras);
function extras(){
if (document.getElementById("mg").checked){
ex=`mug`
eprice=500;
}
if (document.getElementById("sp").checked){
ex=`silver pin`
eprice=1000;
}
if (document.getElementById("ws").checked){
ex=`wooden souvenir`
eprice=1500;
}
cocost.innerText=`Current order cost: ${eprice+sprice+pprice+price}`;
currentorder.innerText=`Tea manufacturer= ${teamanu},Package type=${packaging},size=${sz},Extra=${ex}`
}
const overallo =document.getElementById("overallo");
const oocost =document.getElementById("oocost");
const btnato = document.getElementById("ato");
let overallorder=null;
let overallcost=0;
btnato.addEventListener("click",add)
function add(){
  currentorder=null;
  cocost.innerText=`0`;
  overallcost=price+pprice+sprice+eprice;
  oocost.innerText=`Over all cost=${overallcost}`;
  overallo.innerText=`Ordered tea brands=${teamanu}`
}




