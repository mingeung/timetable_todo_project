import { useState, useEffect } from "react";

const useDetectClose = (ref, initialState) => {
  //메뉴를 클릭하거나 메뉴 외의 구역을 클릭 시 안 보이게
  const [isOpen, setIsOpen] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", pageClickEvent);
    }
    return () => {
      window.removeEventListener("click", pageClickEvent);
    };
  }, [isOpen, ref]); //isOpen이 변할 때마다 함수를 실행시킨다.
  return [isOpen, setIsOpen]; // 해당 component가 unmount될 때 이벤트 핸들러를 제거해준다. (잘 이해 안 됨))
};

export default useDetectClose;
