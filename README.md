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