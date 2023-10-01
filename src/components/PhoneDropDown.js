//사용자가 드롭다운의 값을 선택하면 해당 값을 UI에 보이게 하기
//ex. 사용자가 010을 선택하면 드롭다운이 없어지고 input의 value에 010이 들어가야 한다.
import "./PhoneDropDown.css";

export const PhoneDropDown = ({
  value,
  setPhoneIdentify,
  setIsOpen,
  isOpen,
}) => {
  const ValueClick = () => {
    setPhoneIdentify(value);
    setIsOpen(!isOpen);
  };
  return (
    <li className="timetable-li" onClick={ValueClick}>
      {value}
    </li>
  );
};
