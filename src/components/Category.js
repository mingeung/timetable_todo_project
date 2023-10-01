import React, { useState, useEffect } from "react";
import "./Category.css";

function Category() {
  //⭐️카테고리 만들기⭐️
  const [category, setCategory] = useState(
    JSON.parse(localStorage.getItem("categoryList")) || ""
  );

  //카테고리가 변경될 때마다 Local Storage에 저장
  useEffect(() => {
    localStorage.setItem("categoryList", JSON.stringify(category));
  }, [category]);
  //브라우저 local storage에서 데이터를 가져와 초기 카테고리을 설정하는 함수
  useEffect(() => {
    const storedCategory = JSON.parse(localStorage.getItem("categoryList"));
    if (storedCategory) {
      setCategory(storedCategory);
    }
  }, []);

  //카테고리 onchange, onsubmit 함수
  const onChangeCategory = (event) => setCategory(event.target.value);
  const onSubmitCate = (event) => {
    event.preventDefault();
    if (category == "") {
      return;
    }
    setCategory(category);
  };
  return (
    <form onSubmit={onSubmitCate} className="category-form">
      <input
        onChange={onChangeCategory}
        value={category}
        type="text"
        className="todo-category"
      />
    </form>
  );
}

export default Category;
