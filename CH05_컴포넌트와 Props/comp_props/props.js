/**
 * 컴포넌트 입력(props)
 * '속성'
 * 읽기 전용
 * 
 * javascript object { } 
 */

function App(props) {
  return (
    <Profile name='Tom' intro='안녕' hit={100} />
  );
}

function Profile({ name, intro, hit }) {
  return (
    <>
      <h2>{name}의 블로그 입니다.</h2>
      <p>{intro}</p>
      <hr />
      <span>{hit}</span>
    </>
  );
}