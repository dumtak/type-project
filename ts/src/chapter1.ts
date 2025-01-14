// cd ts
// tsc src/chapter1.ts //js컴파일
// tsc --watch src/chapter1.ts //수정 자동 컴파일
// node src/chapter1.js //실행


// 원시타입과 리터럴
// string,number,boolean,undefined,null

// === 1.Number
let num1: number = 123;
let num2: number = -123;
let num3: number = 0.123;
let num4: number = -0.123;
let num5: number = Infinity;
let num6: number = -Infinity;
let num7: number = NaN;

// === 2.String
let str1: string = "hello";
let str2: string = `hello`;
let str3: string = `hello + ${str1}`;

// === 3.Boolean
let bln1: boolean = true;
let bln2: boolean = false;

// === 4.Null
let null1: null = null;

let numA: 10 = 10;
numA = 10;
let strA: "hello" = "hello";
strA = "hello"; //무조건 지정한 값만

// ===* 배열
let numArr: number[] = [1, 2, 3];
let blnArr1: boolean[] = [true, false];
let blnArr2: Array<boolean> = [true, false];
let multiArr: (number | string)[] = [1, "hello"];
let dooubleArr: number[][] = [
  [1, 2, 3],
  [4, 5],
];

// ===* 튜플
let tup1: [number, number] = [1, 2];
let tup2: [number, string, boolean] = [1, "hi", true];
tup1.push(1);
tup1.push(2);

const users: [string, number][] = [
  ["조지현", 1],
  ["조지수", 2],
  ["조지성", 3],
  ["조지준", 4],
];

let user: {
  id?: number;
  name: string;
} = {
  name: "철수",
};
user.name;

let cat: {
  name: string;
  color: string;
} = {
  name: "야옹",
  color: "brown",
};

let user1:{
  id?:number,
  name:string,
} = {
  id:1,
  name:"민수"
}
user1 = {
  id:1,
  name:"만세"
}
console.log(user1)



