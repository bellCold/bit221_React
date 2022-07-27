import React from 'react'
import { useState } from 'react'

function UseState02() {

  const [input, setInput] = useState("");
  const [names, setNames] = useState([]);

  const inputChangeHandler = (e) => {
    setInput(e.target.value);
  }

  

  const uploadHandler = () => {
    setNames((preState) => {
      console.log(preState);
      return [...preState, input + '\n']
    });
  }

  return (
    <div className='container'>
      <div style={{ display: 'flex' }}>
        <input type="text" className='form-control ' style={{ width: '300px' }} placeholder="이름을 입력해주세요." onChange={inputChangeHandler}></input>
        <button className='btn btn-primary' onClick={uploadHandler}>업로드</button>
      </div>
      <textarea className='form-control mt-1' rows={10} defaultValue={names.toString().split(',').join('')} />
    </div>
  )
}

export default UseState02