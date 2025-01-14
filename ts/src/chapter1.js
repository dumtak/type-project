// 원시타입과 리터럴
// string,number,boolean,undefined,null
// === 1.Number
var num1 = 123;
var num2 = -123;
var num3 = 0.123;
var num4 = -0.123;
var num5 = Infinity;
var num6 = -Infinity;
var num7 = NaN;
// === 2.String
var str1 = "hello";
var str2 = "hello";
var str3 = "hello + ".concat(str1);
// === 3.Boolean
var bln1 = true;
var bln2 = false;
// === 4.Null
var null1 = null;
var numA = 10;
numA = 10;
var strA = "hello";
strA = "hello"; //무조건 지정한 값만
// ===* 배열
var numArr = [1, 2, 3];
var blnArr1 = [true, false];
var blnArr2 = [true, false];
var multiArr = [1, "hello"];
var dooubleArr = [
    [1, 2, 3],
    [4, 5],
];
// ===* 튜플
var tup1 = [1, 2];
var tup2 = [1, "hi", true];
tup1.push(1);
tup1.push(2);
var users = [
    ["조지현", 1],
    ["조지수", 2],
    ["조지성", 3],
    ["조지준", 4],
];
var user = {
    name: "철수",
};
user.name;
var cat = {
    name: "야옹",
    color: "brown",
};
var user1 = {
    id: 1,
    name: "민수"
};
user1 = {
    id: 1,
    name: "만세"
};
console.log(user1);
