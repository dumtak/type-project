// cd ts
// tsc src/chapter2.ts //js컴파일
// tsc --watch src/chapter2.ts //수정 자동 컴파일
// node src/chapter2.js //실행

type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  location: string;
};

let userInfo1: User = {
  id: 1,
  name: "Kim",
  nickname: "go",
  birth: "990123",
  location: "종로",
};
let userInfo2: User = {
  id: 2,
  name: "Lee",
  nickname: "meme",
  birth: "940123",
  location: "영등포",
};

type CountryCodes = {
  Korea?: string; // 선택적 속성
  UnitedState: string;
};
let country: CountryCodes = {
  Korea: "ko",
  UnitedState: "us",
};

// 열거형 enum
enum Role {
  ADMIN = 0,
  USER = 1,
  GUEST = 2,
}

const hiUser0 = {
  adminName: "어드민님",
  role: Role.ADMIN,
};
const hiUser1 = {
  adminName: "정님",
  role: Role.USER,
};
const hiUser2 = {
  adminName: "김님",
  role: Role.GUEST,
};

// ===* any (타입검사X)
let anyVar:any = 10;
anyVar = 12345;
anyVar = "java";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
anyVar.toFixed();

// ===* unknown-any (비슷하지만 안전한 타입)
let unknownVar:unknown;
unknownVar = "java";
unknownVar = 1;
unknownVar = ()=>{};
if(typeof unknownVar === "number"){
  unknownVar * 3
}


// ===* void
// const func = () => {}
// func();
function func():void {
  console.log("hello");
}
let a:void;
a = undefined;


// ===* never
function funcNever():never {
  while(true){
    
  }
}

