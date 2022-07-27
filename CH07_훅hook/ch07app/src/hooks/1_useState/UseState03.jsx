import React from 'react'
import { useState } from 'react'

const styles = {
  container: {
    padding: 100,
    dipslay: 'flex',
    flexDirection:'center'
  },
  btn: {
    padding: 25,
  }
}

function UseState03() {

  const [count, setCount] = useState(0);

  const clickHandler = () => {
    setCount(count + 1)
  }

  return (
    <>
      <div className='container' style={styles.container}>
        {count <= 1 ? <div>You clicked {count} time</div> : <div>You clicked {count} times</div>}
        <button className='btn btn-primary' onClick={clickHandler} style={styles.btn}>Clik Me!</button>
      </div>
    </>
  )
}

export default UseState03