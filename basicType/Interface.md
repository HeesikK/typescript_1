# 📌 Interface

## 🔎 Interface 란 무엇일까?

인터페이스는 일반적으로 타입 체크를 위해 사용되는 변수, 함수, 클래스에 사용할 수 있다. 인터페이스는 여러가지 타입을 갖는 프로퍼티로 이루어진
새로운 타입을 정의하는 것과 유사하다.

```javascript
// 인터페이스의 정의
interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

// 변수 todo의 타입으로 Todo 인터페이스를 선언
let todo: Todo;

// 변수 todo는 Todo 인터페이스를 준수해야 함.
todo = { id: 1, content: "typescript", isCompleted: true };
```

인터페이스를 사용하여 함수 파라미터의 타입을 선언할 수 있다. 이때 해당 함수에서는 함수 파라미터 타입으로 지정한 인터페이스를 준수하는 인수를 전달해야 함.

```javascript
interface Todo {
  id: number;
  content: string;
  isCompleted: boolean;
}

let todos: Todo[] = [];

// 파라미터 todo의 타입으로 Todo 인터페이스를 선언
function addTodo(todo: Todo) {
  todos = [...todos, todo];
}

// 파라미터 todo는 Todo 인터페이스를 준수해야 함
const newTodo: Todo = { id: 9999, content: "study", isCompleted: false };
addTodo(newTodo);
```

인터페이스는 함수의 타입으로도 사용할 수 있다. 이때 함수의 인터페이스에는 타입이 선언된 파라미터 리스트와 리턴 타입을 정의한다.

```javascript
interface SquareFunc {
  (num: number): number;
}

// 함수 인터페이스를 구현하는 함수는 인터페이스를 준수해야 함
// 아래 코드에서 파라미터와 리턴 값은 인터페이스를 준수하고 있음.
const squareFunc: SquareFunc = function (num: number) {
  return num * num;
};
```

## 🔎 선택적 프로퍼티

인터페이스의 프로퍼티는 반드시 구현되어야 함. 하지만 인터페이스의 프로퍼티가 선택적으로 필요한 경우가 있을 수 있음. 이때 선택적 프로퍼티(Optional Property) `?`를 사용하면 에러를 방지할 수 있음. 선택적 프로퍼티는 프로퍼티명 뒤에 `?`를 붙이며 생략하여도 에러가 발생하지 않는다.

```javascript
interface UserInfo {
  name: string;
  password: string;
  age?: number;
  address?: number;
}

// age와 address는 선택적 프로퍼티를 사용했으므로 생략 가능
const userInfo: UserInfo = {
  name: "Levi",
  password: "1234",
};
```

## 🔎 인터페이스 상속

인터페이스는 `extends` 키워드를 사용하여 인터페이스 또는 클래스를 상속받을 수 있다.

```javascript
interface User {
  name: string;
  age?: number;
}

interface Student extends User {
  grade: string;
}

const student: Student = {
  name: "Levi",
  age: 20,
  grade: "A",
};
```

복수의 인터페이스를 상속받을 수도 있다.

```javascript
interface User {
  name: string;
  age?: number;
}

interface Skill {
  skills: string[];
}

interface Developer extends User, Skill {}

const developer: Developer = {
  name: "Levi",
  skills: ["javascript", "react"],
};
```
