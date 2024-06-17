//taske 1 (1)
let cash = 1000;
let currentliabilities = 500;
let Cashflowratio=cash/currentliabilities
console.log(Cashflowratio);

//taske 1 (2)
let revenues= 1000;
let expenses = 500;
let Netincome=revenues-expenses
console.log(Netincome);



//taske 1 (3)
let liabilities= 1000;
let equity= 500;
let Totalassets= liabilities+equity
console.log(Totalassets);


//taske 1 (4)
let profit= 1000;
let sales= 500;
let Netincomeusingprofitmarginandsales= profit*sales;
console.log(Netincomeusingprofitmarginandsales);


//taske 1 (5)
let x = 7;
let y = 9;
let z = 2;
let Average=(x+y+z)/3 
console.log(Average);


//taske 1 (6)
let price = 150;
var discount = 0.3;
let dd=price*discount;
let pp=price-dd;
console.log(pp);


//taske 1 (7)
let age= 20;
if (age > 18 && age<30){
    console.log(true);
};


//taske 1 (8)
let num = 2;
let Exponential=num**3;
console.log(Exponential);



//taske 1 (9)
let num1 = 10;
let num2 = 4;
let Remainder=num1%num2;
console.log(Remainder);


//taske 2
console.log(typeof(444));

console.log(typeof(74.9));

console.log(typeof(NaN));

console.log(typeof("water"));

console.log(typeof(false));

console.log(typeof(9 != 11));
//لانه عملية مقارنة ف بتكون النتيجة إما true او fulse

console.log("Orang" + "e");

console.log("Orange" - "s");
//Because subtraction only deals in numbers, so it converts
//both sides to numbers and gets Not A Number.

console.log("4" + "8");

console.log("4" - "8");

console.log("name" + 3);

console.log("name" - 3);

console.log(82 * "word");

console.log(1 + "hello");

console.log("hello" + 1);

console.log(true+7)
console.log(3+ false);
//true=1
//false=0

console.log("hello" + true);

console.log(typeof (Infinity) );
//+∞ and −∞ are number

console.log(1 == '1');

console.log(1 === '1');


//taske 3
let method="Welcome to Orange";
let up = ( method.toUpperCase());
console.log(up);
console.log(up.slice(8,10));
console.log(`Hello from `+ ( method.slice(11,17)));
console.log(method.toLowerCase());
console.log(method.length);
console.log('Welcome to "Orange"');
console.log(method +` Jordan`);


//taske 5
let strin1="Rasha";
console.log(strin1);

let strin2="Nejar";
console.log(strin2);

let strin3="Relam";
console.log(strin3);

let strin4="Aram";
console.log(strin4);

let strin5="Hala";
console.log(strin5);

let strin6="Jana";
console.log(strin6);

let strin7="Shahed";
console.log(strin7);

let strin8="Nawal";
console.log(strin8);

let strin9="Mohammed";
console.log(strin9);

let strin10="Mahmoud";
console.log(strin10);

let number1=19;
console.log(number1);

let number2=18;
console.log(number2);

let number3=17;
console.log(number3);

let number4=16;
console.log(number4);

let number5=15;
console.log(number5);

let number6=13;
console.log(number6);

let number7=11;
console.log(number7);

let number8=9;
console.log(number8);

let number9=35;
console.log(number9);

let number10=52;
console.log(number10);

let boo=true;
console.log(boo);

let boo2=false;
console.log(boo2);

let boo3=true;
console.log(boo3);

let boo4=false;
console.log(boo4);

let boo6=true;
console.log(boo6);

let boo7=false;
console.log(boo7);

let boo8=true;
console.log(boo8);

let boo9=false;
console.log(boo9);

let boo10=true;
console.log(boo10);

let boo88=false;
console.log(boo88);

let arr1=["zaina","tala","laila","yasmeen"];
console.log(arr1);

let arr2=["44","35","60"];
console.log(arr2);

let arr3=["dog","cat","elephant","mouse"];
console.log(arr3);

let arr4=["sun","moon","star","sky"];
console.log(arr4);

let arr5=["4456","nesreen","55556"];
console.log(arr5);

let arr6=["summer","winter","autum","spring"];
console.log(arr6);

let arr7=["44","2","87","tweety","30"];
console.log(arr7);

let arr8=["youtube","instgram","facebook","44"];
console.log(arr8);

let arr9=["tweety","mesho","beso","4"];
console.log(arr9);

let arr10=["up","down","left","right"];
console.log(arr10);

let ob={name:"rasha ",age:19 };
console.log(ob);

let ob2={name:"tweety" ,age:3 };
console.log(ob2);

let ob3={color:"red" ,page:2 };
console.log(ob3);

let ob4={calss:5 };
console.log(ob4);

let ob5={name:"najar" ,age:17};
console.log(ob5);

let ob6={name: "relam", age: 16};
console.log(ob6);

let ob7={city:"aqaba" ,street:22 };
console.log(ob7);

let ob8={name:"mesho" ,age:3 };
console.log(ob8);

let ob9={car:"BMW" ,model:2023};
console.log(ob9);

let ob10={name:"aram" ,age: 15};
console.log(ob10);


//taske 6
let names=["rasha","ahmad","marya"]
for(var i =3; i > 4 ; i++){

}
console.log(i);


// let names2=["rr","aa","mm"]
// for(let t =3; t > 4 ; t++){

// }
// console.log(t);


//taske 7
let a=10;
let b=5;

console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

console.log(a>b);
console.log(a<b);
console.log(a==b);
console.log(a!=b);
console.log(a>=b);
console.log(a<=b);



let m=true;
let n=false;

console.log(m || n);
//false+true=true
//true+false=true
//true+true=true
//false+false=false
console.log(m && n);
//false+true=false
//true+false=false
//false+false=false
//true+true=true
console.log(!m);
console.log(!n);

let gg=10;
console.log(gg+=5);
console.log(gg-=7);
console.log(gg*=2);
//10+5=15
//15-7=8
//8*2=16
























