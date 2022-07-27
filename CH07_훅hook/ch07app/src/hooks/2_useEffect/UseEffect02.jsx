import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

function UseEffect02() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('NickName');

  const updateInput = (e) => {
    setName(e.target.value);
  }

  const updateCount = () => {
    setCount(count + 1);
  }

  let sideEffect = [];
  //렌더링마다 매번 사이드 이팩트 실행
  /* 
  useEffect(() => {
    console.log("hi");
  }); 
  */

  // 마운팅 && count 바뀔때마다 실행
  useEffect(() => {
    console.log("hi");
  }, [count]);

  //name
  useEffect(() => {
    console.log("hii");
  }, [name]);

  //최초 마운팅 될때만
  useEffect(() => {
    console.log("hii");
  }, []);


  return (
    <div className='container'>
      <p>COUNT : {count}</p>
      <button className='btn btn-danger' onClick={updateCount}>Upadte</button>
      <div>
        <input type="text" onChange={updateInput} />
      </div>
      <p>{name}</p>
    </div>
  )
}

export default UseEffect02