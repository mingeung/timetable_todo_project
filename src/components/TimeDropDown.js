//코드 참고 https://velog.io/@poiu0329/React-드롭다운-구현하기

import { useRef, useState } from "react";

import useDetectClose from "../hooks/useDetectClose";
import { PhoneDropDown } from "../components/PhoneDropDown";

const TimeDropDown = ({ List }) => {
  const dropDownRef = useRef(); //useRef를 통해 사용자가 클릭한 요소에 접근할 수 있도록 한다.
  const [phoneIdentify, setPhoneIdentify] = useState("");
  // const phoneList = ["010", "011", "017"];
  const [isOpen, setIsOpen] = useDetectClose(dropDownRef, false);
  return (
    <div ref={dropDownRef}>
      <input
        onClick={() => setIsOpen(!isOpen)}
        type="button"
        value={phoneIdentify}
      />
      {isOpen && (
        <ul>
          {List.map((value, index) => (
            <PhoneDropDown
              key={index}
              value={value}
              setIsOpen={setIsOpen}
              setPhoneIdentify={setPhoneIdentify}
              isOpen={isOpen}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default TimeDropDown;
