// string
let nickName: string = "Levi";
let myName: string = `My name is ${nickName}`;

// number
let age: number = 26;
let binary: number = 0b1010;
let octal: number = 0o744;
let infinity: number = Infinity;
let nan: number = NaN;

// boolean
let isBoolean: boolean = true;

// any
let any: any = 123;
any = "Levi";
any = true;

// object
let obj: object = {};
let arr: object = [];
let func: object = function () {};

// object 타입보다 객체 속성을 개별로 지정하는 것이 좋다..!
let user: { name: string; age: number } = { name: "Levi", age: 26 };

// array

let fruits: string[] = ["apple", "banana", "grape"];
let score: Array<number> = [90, 80, 70];

// unknown

let unknownName: unknown;

unknownName = 123;
unknownName = "apple";
unknownName = true;

// unknownName은 unknown 타입이므로 아래 코드는 에러가 발생.
// unknownName의 타입이 any라면 에러 발생 x.
// let first_unknownName: boolean = unknownName

// union

let array: (string | number | boolean)[] = ["apple", 2, "banana", true];
let newArray: Array<string | number> = ["apple", "lemon", 2];

// conditional

type isStringType<T> = T extends string ? string[] : number[];

type T1 = isStringType<string>; // type T1 = string[]
type T2 = isStringType<number>; // type T2 = number[]

const nameArray: T1 = ["Kwon", "Kim", "Cho"];
const ageArray: T2 = [24, 35, 41];
