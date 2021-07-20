import React, { useState } from "react";

function InputSample() {
  //input 을 관리할 상태 만들기
  const [text, setText] = useState("");

  // e 이벤트객체는 수정이벤트가 발생했을 때 이벤트의 내용이 e 객체를 파라미터로 받아와서 사용
  const onChange = (e) => {
    //이벤트가 발생한 돔=input 에 대한 정보 가져있음. 현재 돔의 값을 알고 싶으면 value
    setText(e.target.value);
  };

  //초기화 하기
  const onReset = () => {
    setText("");
  };

  return (
    <div>
      {/* value값 적어주기: 나중에 초기화 버튼을 눌렀을 때도, input 값이 비워짐 */}
      {/* value 값을 안 적어주면, 입력한 값이 나타나지만 초기화가 안됨. */}
      <input onChange={onChange} value={text} />
      <button onClick={onReset}>초기화</button>
      <div>
        <b> 값: </b>
        {text}
      </div>
    </div>
  );
}
export default InputSample;
