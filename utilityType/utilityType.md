# 📌 타입스크립트 유틸리티 타입

### enum

enum 타입은 타입스크립트에서 제공하는 열거형 데이터 타입이다.

### as const

타입스크립트에서 변수를 const로 선언하면 let으로 선언할 때와 타입 추론이 다르게 일어난다. 아래 예시를 보면 const로 선언한 변수는 string라는 넓은
범위의 타입 대신 구체적으로 딱 하나의 문자열인 "apple"를 가리키게 된다.

```javascript
let fruit = "apple"; // let fruit: string
const fruit = "apple"; // const fruit: "apple"
```

그러나 배열이나 객체의 경우에는 const로 선언하여도 문자열이나 숫자일 때처럼 구체적으로 범위를 좁히지 않음.

```javascript
const user = {
  name: "Levi",
  age: 26,
};

// const user: {name: string; age: number;}
```

이때 변수 선언문 뒤에 as const를 추가하거나 리터럴 앞에 <const>를 붙이면 const assertion을 적용할 수 있다.

```javascript
const user = {
  name: "Levi",
  age: 26,
} as const;

// const user: {name: "Levi"; age: 26}
```

### record

`Record<K, T>` </br>
K를 속성으로, T를 그 속성 값의 타입으로 갖는 새로운 타입을 반환한다.

### partial

`Partial<T>` </br>
T의 모든 프로퍼티를 선택적 프로퍼티로 변경한 새로운 타입을 반환한다.

### pick

`Pick<T, K>` </br>
T에서 K의 집합으로 이루어진 새로운 타입을 반환한다.

### omit

`Omit<T, K>` </br>
Pick와 반대로 T에서 K의 집합을 제외한 새로운 타입을 반환한다.

### extract

`Extract<T, U>`</br>
T에서 U와 겹치는 타입을 반환한다

### returntype

`ReturnType<T>`</br>
함수 타입 T의 반환 타입을 새로운 타입으로 반환한다.

### optional

프로퍼티가 선택적으로 필요한 경우 `?`을 사용하여 에러를 방지할 수 있음

### satisfies
