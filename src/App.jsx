import React, { useEffect, useState } from "react";
import {ColorfullMessage} from './components/ColorfullMessage';

const App = () => {
  console.log("さいしょ");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setfaceShowFlag] = useState(false);
  const onClickCountuUp = () => {
    setNum(num + 1);
  }
  const onClickShowFlag = () => {
    setfaceShowFlag(!faceShowFlag);
  }
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0 ) {
        faceShowFlag || setfaceShowFlag(true);
      }else {
        faceShowFlag && setfaceShowFlag(false);
      }
    }
    //eslint-disable-next-line
  }, [num]);

  return (
    <>
   <ColorfullMessage color="red" fontsize="50">こんにちは！</ColorfullMessage>
   <ColorfullMessage color="blue" fontsize="20">お元気ですか？</ColorfullMessage>
    <ColorfullMessage color="pink" fontsize="10">元気です！</ColorfullMessage>
    <button onClick={onClickCountuUp}>カウントアップ</button>
    <br />
    <button onClick={onClickShowFlag}>on/off</button>
    <p>{num}</p>
    {faceShowFlag && <p>☺</p>}
    
    </>
  )
}
export default App;