// cd ts
// tsc src/chapter2.ts //js컴파일
// tsc --watch src/chapter2.ts //수정 자동 컴파일
// node src/chapter2.js //실행
var userInfo1 = {
    id: 1,
    name: "Kim",
    nickname: "go",
    birth: "990123",
    location: "종로",
};
var userInfo2 = {
    id: 2,
    name: "Lee",
    nickname: "meme",
    birth: "940123",
    location: "영등포",
};
var country = {
    Korea: "ko",
    UnitedState: "us",
};
// 열거형 enum
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["USER"] = 1] = "USER";
    Role[Role["GUEST"] = 2] = "GUEST";
})(Role || (Role = {}));
var hiUser0 = {
    adminName: "어드민님",
    role: Role.ADMIN,
};
var hiUser1 = {
    adminName: "정님",
    role: Role.USER,
};
var hiUser2 = {
    adminName: "김님",
    role: Role.GUEST,
};
// ===* any (타입검사X)
var anyVar = 10;
anyVar = 12345;
anyVar = "java";
anyVar = true;
anyVar = {};
anyVar.toUpperCase();
anyVar.toFixed();
// ===* unknown-any (비슷하지만 안전한 타입)
var unknownVar;
unknownVar = "java";
unknownVar = 1;
unknownVar = function () { };
if (typeof unknownVar === "number") {
    unknownVar * 3;
}
// ===* void
// const func = () => {}
// func();
function func() {
    console.log("hello");
}
var a;
a = undefined;
// ===* never
function funcNever() {
    while (true) {
    }
}
