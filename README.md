# [원티드] 프리온보딩 챌린지(7월)

## 미션 1. 라우터 구현하기

### 설계

#### 1. Router와 Route 컴포넌트 구조

- `window.location.pathname`으로 url path 문자열을 받아온다.
- `Router` 컴포넌트에서 context를 만들고 url path를 저장한다.
  - `Router` 컴포넌트는 children을 props로 받고, wrapper로 context provider를 둔다.
- `Route` 컴포넌트에서는 부모 컴포넌트인 `Router`에서 선언한 context value를 가져온다.
  - 이 때, `Route`의 props로 전달된 path와 context value 값이 같으면 component를 렌더링하고 아니라면 false

> `Router`와 `Route`는 컴파운드 컴포넌트 패턴으로 깔끔하게 작성한다.

#### 2. useRouter 훅

- `push` 함수를 객체 형태로 반환한다.
  - 이 때, `push` 함수는 url의 path 형태의 string을 인자로 받는다.
    ```js
      push('/about');
    ```
  - `push` 함수는 인자로 받은 string을 `window.location.pathname = string`으로 초기화하여 페이지를 이동시킨다.

### 문제점

`window.location.pathname`에 직접 url path를 초기화하는 방식으로 진행하니, 새로고침이 일어난다. => SPA의 장점이 사라져버림
> 리팩토링 방안: state에 따라 다른 `Route` 컴포넌트가 렌더링되는 방법을 써야할 것 같다.

### 설계(리팩토링)

#### 1. Router와 Route 컴포넌트 구조

`Router` 컴포넌트
  - `window.location.pathname`으로 url path 문자열을 받아오고 이 값을 state로 초기화한다.
  - context를 만들고 현재 path state를 변경하는 `handleCurrentPathClick` 함수를 전달한다.
  - children을 props로 받고, wrapper로 context provider로 감싼다.
    - 이 때, children 중 props.path의 값이 현재 path state와 같은 component만 필터링한다.
  - 또한, 뒤로가기 이벤트를 catch하여 현재 `window.location.pathname`으로 path state를 변경하도록 한다.

`Route` 컴포넌트
  - props로 받은 `path`를 useRouter의 push 함수 인자로 넘겨준다.

#### 2. useRouter 훅

- `window.history.pushState` api를 사용하여 인수로 받은 path 문자열로 url 값을 변경한다.

### 문제점

1. 이제 `뒤로가기`는 잘되는데, `about`에서 `root`로 가고나면 `앞으로 가기`가 안됨... 왜 그러지??? history stack을 초기화하는 코드도 없는데...
2. 각 컴포넌트 별 역할과 책임이 확실한가..? 리팩토링하려고 코드들을 보다보니 고민하게 된 부분