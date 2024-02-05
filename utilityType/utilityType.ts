// enum

enum Team {
  Manager, //0
  Planner, //1
  Developer, //2
  Designer, //3
}

let sarha: number = Team.Planner; // 3

// as const

const Colors = {
  red: "#FF0000", // string
  blue: "#0000FF", // string
  green: "#008000", // string
};

const asConstColors = {
  red: "#FF0000", // "#FF0000"
  blue: "#0000FF", // "#0000FF"
  green: "#008000", // "#008000"
} as const;

// record

type User = Record<"Levi" | "Elvin", number>;

const user: User = {
  Levi: 26,
  Elvin: 34,
};

// partial

type Person = { name: string; age: number };

type PartialPerson = Partial<Person>; // Person 타입의 모든 속성을 선택적으로 만든다.

const partialPerson: PartialPerson = {
  name: "Levi",
};

// pick

type Key = "name" | "age";

type UserInfo = {
  name: string;
  age: number;
  address: string;
};

type PickUserInfo = Pick<UserInfo, Key>;

const pickUserInfo: PickUserInfo = {
  name: "Levi",
  age: 26,
};

// omit

type Option = "name" | "age";

interface UserOption {
  name: string;
  age: number;
  address: string;
}

type OmitUserOption = Omit<UserOption, Option>;

const omitUserOption: OmitUserOption = {
  address: "서울시 강남구 역삼동",
};

// extract

type A = string | number | boolean;
type B = string | boolean;

type C = Extract<A, B>; // string | boolean

// returntype

function func(a: string | number, b: boolean) {
  return { a, b };
}

type returnType = ReturnType<typeof func>; // type returnType = {a: string | number, b: boolean};

// optional

type OptionalInfo = {
  name: string;
  age?: number;
  address: string;
};

const optionalInfo: OptionalInfo = {
  name: "Levi",
  address: "서울시 강남구 역삼동",
};

// satisfies
