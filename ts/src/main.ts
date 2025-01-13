// function hello(msg){
//   console.log(`hello ${msg}`);
// }
// hello("world");


// let str = "hello";
let str:string = "hello";

// let num = 123;
let num:number = 123;

// let boo = true;
let boo:boolean = true;

str = "javascript";
// str = 123;

// === 객체타입
const obj:{a:number, b:string} = { a:0, b:"str" }
obj.a = 3;

// === 배열타입
const arr1:number[] = []; //튜플타입(Tuple Type)
const arr2:string[] = [];
arr1[0] = 123;
arr2[1] = "문자임";

const arr3:Array<string> = [];
arr3.push("123");

// === 함수타입
// const hello = (msg) => { //origin
  // const hello: (msg:string) => string = (msg) => msg; //type1
  // const hello: (msg: string) => string = (msg) => {  //type2
  //   return msg;
  // }

  // const hello: (a:string, b:string) => string = (a, b) => a;

  const hello = (msg, xyz)=>{
    return msg;
  }
