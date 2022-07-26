/**
 * 컴포넌트
 * 
 * 함수 컴포넌트
 */

function Welecome(props) {
  return <h1>Hello, {props.name}</h1>
}

/**
 * class 컴포넌트
 */

class Welecome2 extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>
  }
}

<Welecome2 name="bit"></Welecome2>