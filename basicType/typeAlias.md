# 📌 Type Alias

## 🔎 Type Alias 란 무엇일까?

타입 앨리어스는 새로운 타입을 정의할 수 있다.

```javascript
type User = {
  name: string,
  age?: number,
};

// 빈 객체를 User 타입으로 지정
const user = {} as User;

user.name = "Levi";
user.age = 26;
```

타입 앨리어스는 타입으로 사용할 수 있다는 점에서 인터페이스와 유사하다. 하지만 타입 앨리어스는 원시값, 유니온 타입, 튜플 등도 타입으로 지정이 가능하다.

```javascript
// 문자열 리터럴로 타입 지정
type Str = "Levi";

// 유니온 타입으로 타입 지정
type Uni = string | null;

// 문자열 유니온 타입으로 타입 지정
type Name = "Levi" | "Elvin";

// 숫자 리터럴 유니온 타입으로 타입 지정
type Num = 1 | 2 | 3 | 4 | 5;

// 객체 리터럴 유니온 타입으로 타입 지정
type Obj = { a: 1 } | { b: 2 };

// 함수 유니온 타입으로 타입 지정
type Func = (() => string) | (() => void);

// 인터페이스 유니온 타입으로 타입 지정
interface Square {}
interface Rectangle {}
interface Circle {}
type Shape = Square | Rectangle | Circle;

// 튜플로 타입 지정
type Tuple = [string, boolean];
const t: Tuple = ["", false];
```

## 🔎 Type Alias와 Interface의 차이점은 무엇일까?

인터페이스는 `extends` 키워드를 통해 상속될 수 있지만 타입 앨리어스는 `extends` 키워드 사용 또는 상속이 허용되지 않는다. 따라서 상속을 통한 확장이 필요하다면 인터페이스를 사용하는 것이 유리하다. 하지만 인터페이스로 표현이 되지 않거나 유니온 혹은 튜플을 사용해야 한다면 타입 앨리어스를 사용하는 것이 유리하다
