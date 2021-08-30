import React from "react";

function Timercom() {
  const [time, setTime] = React.useState(0);
  console.log("컴포넌트 업데이터");
  function updatetime() {
    setTime(time + 1);
  }
  return (
    <div>
      <h3>{time}초</h3>
      <button onClick={updatetime}>1씩 올려주세요</button>
    </div>
  );
}

export default Timercom;
