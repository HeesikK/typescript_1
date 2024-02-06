# 📌 Generic

## 🔎 Generic 이란 무엇일까?

제네릭은 선언 시점이 아니라 생성 시점에 타입을 명시하여 하나의 타입만이 아니라 다양한 타입을 사용할 수 있도록 하는 기법이다.
한 번의 선언으로 다양한 타입에 재사용이 가능하다는 장점이 있다.

## 🔎 Generic 의 Hello World (Generic 은 왜 사용하는걸까?)

identity 함수는 인수로 무엇이 오던 그대로 반환하는 함수이다. 제네릭이 없다면, identity 함수에 특정 타입을 주어야 한다.

```javascript
function identity(arg: string): string {
  return arg;
}
```

다른 타입을 받고 싶다면 함수를 추가로 선언해야 한다.

```javascript
function identity(arg: number): number {
  return arg;
}

function identity(arg: boolean): boolean {
  return arg;
}
```

또는 `any` 타입을 사용하여 identity 함수를 작성할 수 있다.

```javascript
function identity(arg: any): any {
  return arg;
}
```

이렇게 `any` 타입을 사용하게 된다면 `arg` 가 어떤 타입이든 받을 수 있다는 점에서 제네릭과 비슷하지만, 실제로 함수가 반환할 때 어떤 타입인지에 대한 정보는 잃게 된다. 만약 number 타입을 넘긴다고 해도 `any` 타입이 반환된다는 정보만 얻을 뿐이다. 또한 `any` 타입은 타입 검사를 하지 않아 에러가 발생할 위험이 있다.

이런 문제를 해결하기 위해서 제네릭이 등장했음.

```javascript
function identity<Type>(arg: Type): Type {
  return arg;
}
```

identity 함수에 `Type` 변수를 추가. `Type` 는 유저가 준 인수의 타입을 캡쳐하고 이 정보를 나중에 사용할 수 있게 한다. 제네릭 함수는 두 가지 방법으로 호출할 수 있다. 첫 번째는 함수에 타입 인수를 포함한 모든 인수를 전달하는 방법이다.

```javascript
let output = identity<string>(); // ()안에 string 타입을 전달하면 됨
```

두 번째 방법은 타입 인수 추론을 사용한다. 즉 우리가 전달하는 인수에 따라 컴파일러가 `Type` 값을 자동으로 정하게 하는 것이다.

```javascript
let output = identity("hello"); // 출력 타입은 string
```

컴파일러는 `"hello"` 를 보고 `Type` 를 결정함. 인수 추론은 코드를 간결하고 가독성 있게 하는데 있어 유용하지만 더 복잡한 예제에서 컴파일러가 타입을 유추할 수 없는 경우엔 명시적으로 타입 인수 전달이 필요할 수 있음.
