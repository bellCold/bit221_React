import React from 'react'
import { useEffect } from 'react'

function Timer() {
  useEffect(() => {
    const updateTimer = setInterval(() => {
      console.log("🕛...")
    }, 1000);

    //마운트 해제시 실행정지
    return () => {
      clearInterval(updateTimer);
      console.log("타이머 종료");
    }
  }, []);

  return (
    <span>타이머를 시작합니다. 콘솔 확인하세요!</span>
  )
}

export default Timer