//keyword jiska koi meaning ho js mai word can be normal like harsh is a word if, else etc are keywords
 // VARIABLES
 //var,let,const - line by line comparison
 var a = 12;// declare and initialize
 var a = 10;// no erro agar 2 same value alag variable mai store hogi  var mai 
 var b = 10; // let mai error atta h 
 // window mai add hota h (var se created h)
 // function scoped hota h(var keyword)
 //aap firse declare kr skte aur error nhi aega(var keyword) 
 var a;// declare krna
 // same throughout the code as can be used in long codes
 let a = 12;
 let a;
 // let is blocked scoped
 // let window mai add nhi hota h
 const a = 12;
 // const ki value fix h 1 baar declare krli to vhi rhegi eg = pie ki value 
    // scope(global,block,functional)
// global scope = pure code mai access kr skte h 
//  block scope = in btw {}
// function scope = in function only;

// reassignment and redeclaration 
var a = 12; 
a =32;// var mai redeclare kr skte h 

let b = 12;
b = 32;// let mai redeclare nhi kr skte  h 

// temporal dead zone - utna area jitne mai js ko pata h ki variable exist krta h pr vo apko value nhio de skta h 
console.log(a);

let a = 12;// ismai error aega ki a badme declared h yani usko pata h agge chalke variable declared  h 
// agr var use krenge koi error nhi aega 

// hoisting impact per type
// hoisting -> ek variable ko jab js mai banate h vo 2 part mai tut jata h and uska declaration part upar chala jata h aur uska initialization part neeche rh jata h 

//var a = 12 ; this is the variable 

var a = undefined ;

console.log(a);// temporal dead zone kyu hota h kyumki define of varibale upar ho jati h 

var a= 12;

// var -> hoist ->undefined 
// let -> hoist -> reference error
// const -> hoist -> reference error
// var if ,for, {} kisi ki respect nhi krta h  
// let if, for, { } ki respect krta h 
// const khta  h value update ho skti h reassign nhi kr skte h 
// Object.freeze can be used to make const immutable ie the value cannot be updated as well
const person = {
    name: "Saurav",
    age: 20
};

Object.freeze(person);

person.age = 25;      // Not allowed
person.city = "Delhi"; // Not allowed
delete person.name;    // Not allowed

console.log(person);

DAY 2 //(DATA TYPES+TYPES SYSTEM)

// two types primitive{bina bracket wale sare and can copy directly} and reference ( bracket wali sare and cannot copy directly)

// DATATYPES( data ka type)

// primitive -> aisi sari values jinko copy krne pr tumhe real copy mil jae;
// eg primitive = string , number , bool, null, undefined, symbol, bigint( int of larger size and n laga do last mai)
// reference-> inkop copy krne pr real copy nahi milegi but aapko reference milega parent ka
// eg reference = arrays[], objects{} , functions()
let a = [1,2,3];
let b = a;
// string = ' ,"",` inke anddar wrapped value
// ' ' = single quotes 
// " "= double quotes 
// ` = back ticks 

// boolean = true false 
// null -> jaan puch kr koi value nhi di start mai uski value nhi pata h;
// undefined -> variable banay aur usko value nhi di ;
let a;// undefined assigned to it
//symbol -> unique immutable ( cant be changed ) value
// future mai hum kuch library use krenge ab is case mai un libraries mai kuch fields hoti h jisne similar hum bhi bana dete hai aur galti se humari banai hui fields us library ki original fields ko change kr deti h 
// dynamic typing -> js mai static typing nhi h yha pr dynamic h to data can be modified 
 let a = 12;
 a= true;
 a = " harsh"
 a =[];
 a= null;
 a= undefined;
// static typing is preffered and better than dynamic typing 
// typeof quirks ( e.g. typeof null === 'object')
typeof 12;
//output number ;
Nan === Nan 
//output is false;

 // type coercion ( == vs ===)
 // type coercion -> concept jismein apka ek type automatically convert hojaega 
note - "5"( string )+ 1 // concatination ( js samajti h plus ka matlab h concationation jb string ho )
// output = '51';
// - sign hota to subtract hota 
// truthy vs falsy values
//to check a value it is true or false use !! becuase of logical ! ( not) 1 baar mai value fale agli baar mai true agr true nature ki h to 
// falsy values = 0 false "" null undefined NaN document.all
// ye sari values jab hongi tb output false aega
// inke alawa sari value true mai consider hogi 
 
// note = typeof NaN === 'number'// true( nan failed number operation h yani derived from a number so js usko number ki value dedeti h )
// undefined khud se atti h null hum khud dete h baad mai jismai kuch value assign krenge 

// operators 
// arithmetic, logical,comparison,assignment,unary,ternary

//ARITHMETIC
// + - * % / **
// 1+2 = 3
// "sa" + "urav"= "saurav"( concatenation)
//2**3=8 ( power = **)

//COMPARISON
//= (assignment operator) , == (comparison operator) ,=== (comparison operator),!= , !== , >= , <= ,  > , < 
// == ke sath 1 dikkat h jaise ki 12== 13 // false 
// but 12 == "12"//true ( string number ke equal nhi ho skti h i.e sirf value check krta h )
// yhi pr === atta 12 === "12"// false
// == and != strict comparison nhi krta h whereas === and !== strict comparison krta h 
// 12 != "12" //false & 12!=="12"// true

//ASSIGNMENT
// = , += ,-=, *= , /=, %= 

//LOGICAL
// && , || , !
// &&(AND) -> dono true values
// ||(OR) -> any one value true 
// ! -> true ko false ( used in truthy and falsy !! is useful to nature if it is true or not)

//UNARY 
// +, - , ! , typeof , ++ , --
// +"5" // 5 ( string in number using unary operator)
// +"saurav" // output ->NaN 
// typeof 12 // number ( nature of data)
// ++a ( phle increment kro fir print kro)
//a++ (phle print then increament)

//TERNARY 
// ?:
// condition ? true hui ka code : false hui ka code
 12 > 13 ? console.log("true") : console.log("false");

 //typeof,instanceof
 //typeof null -> 'object' // ye galat batata h 
 //typeof []-> 'object' // ye galat batata h 
 //typeof NaN -> 'number' // ye galat batata h 
 // ye upr teeno quirk h 

 // variable instanceof formed from this
 // ye sirf reference values ke sath use hota h 
 // typeof mostly primitive value ke sath aega 

 //CONTROL FLOW
 // if else else if
 // switch case 
 // early return pattern 

//if else else-if
//if(65)// true because truthy falsy ka case aagya h yha pr

//switch case
switch(val){
    case 1 : 
    break;
      case 2 : 
    break;
      case 3 : 
    break;
    default: 
}

//EARLY RETURN PATTERN 

function getVal(val){
    if(val<25){
        return "d";
    }
    else if (val<50){
        return "c";}
     else if (val<75){
        return "B";}
    else return "a";
}
console.log(getVal(76)); 
// early return pattern mai else if use nhi hota h sirf if use krke code clean hota h assan hota h check krna conditions ko 

//LOOPS (repeat karne ko loop kahte h )
//for, while, do while , foreach 

//FOR LOOP
//kaha se jana h -> kha tak jana h -> kaise jana h 
//for eg  1 - 40 , 20 - 30 
for(let i=1; i<101; i++){
    console.log("hello saanvi/n");
}

//WHILE LOOP
//kha se jana h -> kab rukhna h -> kaise jana h 
//while eg print till hello 
start
while(end){
    //code
    change
}

let i =1;
while(i<33){
    console.log(i);
    i++;
}

// DO While LOOP
let i =12;
do{
    console.log(i);
    i++;
}
while(i<2)
 
//BREAK AND CONTINUE 
for (let i = 1; i<201;i++){
    console.log(i);
    if(i==32){
        break;
    }
}
// output all no till 32

for (let i = 1; i<201;i++){
    console.log(i);
    if(i==32){
        continue;
    }
}
// output from 1 to 200 except 32 
// continue ka matlab uss no ko chord dije baki likhie whereas break mai hum sirf uss number tak print krate h 

//INPUT IN JS
 let val = prompt("give a number");
  for (let i=1; i< val;i++){
    if(i%2===0){
        console.log(`${i} is even`);
    }
    else {
         console.log(`${i} is odd`);
    }
  }

  //NOTE jab bhi tum number ko 10 se divide krte ho to aur math.floor() use krte h gto decimal wala part hat jata h 

  //FUNCTIONS
 //what why how
 // funtion declaration
 //function soja(){} normal way to declare a function

 //function expression 
 let fnc = function (){
 console.log("heheh")};
 fnc();// function call

 // fat arrow function 
 let fnc = ()=>{
console.log("heheh")
 }
 fnc();

 // parameters and arguments 
 // backtick ka use krke dynamic value add kr skte h $ sign use krke
 function dance(value){
    console.log(`${value} is dancing`)
 }
 dance ("saanvi");
 dance ("horse");
 dance (" peacock");
 // here value is a parameter 
 // the value we pass in function real values are arguments

 //default parameter 
 function add(v1 =0 , v2 = 0){
    console.log(v1+v2);
 }
 add(); // ismai koi value pass nhi hui h to hmne khud se default value di h 
 // agr koi value nhi dete to undefined atta dono ka agr undefined + undefined hota h NaN

 //rest
 //jab argument bhot sare ho tab hme utne hi parameter bhi utne hi banane padenge usse bachne ke liye hum rest ka use krte h ... hota h rest 
 // agar ... function ke parameter space mai lage to vo rest operator hai 
 function abcd(...val){
console.log(val);
 }
 abcd(1,2,3,4,5,6);

 function abcd(a,b,c...val){
console.log(a,b,c,val);
 }
 abcd(1,2,3,4,5,6);

 //return values and early return 
 // return matlab jha se ae ho wahi daal denge
 function abcd(){
    return 12;
 }
 let val = abcd();
console.log(val);

//FIRST CLASS FUNCTIONS
// functions ko values ki trah treat kar skte h 
let abcd = function(){}
// function bhi js mai value h 
function abcd(val)
{
val();
}
abcd(function(){
    console.log("heyy");
})// because argument mai value pass kr skte h aur function 1 value h


//HIGHER ORDER FUNCTION 
// vo function hota hai jo ki return kre function ya fir accept kre ek function apne argument mai
// function as a argument
function sayHello() {
    console.log("Hello");
}

function execute(fn) {
    fn();
}

execute(sayHello);
//another example
function turnOnTV() {
    console.log("TV ON");
}

function pressButton(action) {
    action();
}

//function returning another function
function greet() {
    return function() {
        console.log("Hello");
    };
}

const message = greet();

message();

//PURE VS IMPURE FUNCTIONS
// aisa function jo ki bahr ki value ko naa badle wo hai pure function
let a = 12;
fuction abcd(){
    console.log("hehehe");
}

// aisa function jo bahr ki value ko badal de wo hai impure function 
let a =12;
function hui (){
    a++;
}

//CLOSURES AND LEXICAL SCOPING
// closures -> ek function jo return kare ek aur function and return hone wala function hmesha use krega parent function ka koi variable

function abcd(){
    let a =12;
    return function(){
        console.log(a);
    }
}

//LEXICAL SCOPING 
function abcd(){
    let a =12 ;// a =12 can be used all over the functions scope universal h but defg , ghij nahi use kr skte h abcd mai
    function defg(){
        let b = 13;
        function ghij(){
            let c =14;
        }
    }
}

//IIFE ( IMMEDIATELY INVOKED FUNCTION EXPRESSIONS)
(function (){

})();// FUCNTION CALL IS DONE HERE

//HOISTING 
//agr function expresssion use krenge to error aega to sirf function declartion wala hi chlega 
 abcd();

 function abcd(){
    console.log("hi");
 }
 // output hi

 //function expression
  abcd();

 let abcd = function (){
    console.log("hi");
 }
 // output will be error 

 
 //ARRAYS
// in js arrays can store different data types

