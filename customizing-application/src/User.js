import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { colorState, userState } from "./atom";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { Tooltip } from "antd";

const CustomizableBox = ({ color, size }) => {
  return (
    <div
      style={{
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: color,
      }}
    ></div>
  );
};

const User = () => {
  const [size, setSize] = useState(100);
  const [hide, setHide] = useState(true);
  const [colors, setColors] = useRecoilState(colorState);
  const user = useRecoilValue(userState); // user 정보를 가져옴
  const db = getFirestore();

  const handleColorChange = (event) => {
    const id = event.target.id;
    const value = event.target.value;
    if (id === "1") {
      setColors({ ...colors, color1: value });
    } else if (id === "2") {
      setColors({ ...colors, color2: value });
    } else if (id === "3") {
      setColors({ ...colors, color3: value });
    }
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const copyHandler = () => {
    navigator.clipboard.writeText(user.uid);
    alert("복사되었습니다.");
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    await setDoc(doc(db, "presets", user.uid), {
      color1: colors.color1,
      color2: colors.color2,
      color3: colors.color3,
    });
    alert("저장되었습니다.");
  };

  return (
    <div>
      <h1>{user.email.split("@")[0]}님 환영합니다. 👅👅👅</h1>
      <button onClick={() => setHide(!hide)}>추천인 코드 보기</button>
      {hide ? null : (
        <div>
          <label>추천인 코드: {user.uid}</label>
          <Tooltip
            placement="bottom"
            title="추천인 코드를 복사하려면 클릭하세요."
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginLeft: "20px" }}
              onClick={copyHandler}
            >
              <circle cx="8.5" cy="8.5" r="8.5" fill="#858585" />
              <path
                d="M8.46179 7.5L8.46179 14"
                stroke="#191919"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M9.6 3.4C9.6 4.00751 9.10751 4.5 8.5 4.5C7.89249 4.5 7.4 4.00751 7.4 3.4C7.4 2.79249 7.89249 2.3 8.5 2.3C9.10751 2.3 9.6 2.79249 9.6 3.4Z"
                fill="#191919"
              />
            </svg>
          </Tooltip>
        </div>
      )}
      <form onSubmit={submitHandler}>
        <label>
          크기를 골라주세요:
          <input type="number" value={size} onChange={handleSizeChange} />
        </label>
        <br />
        <label>
          색상을 골라주세요:
          <input
            type="color"
            id="1"
            value={colors.color1}
            onChange={handleColorChange}
          />
        </label>
        <CustomizableBox color={colors.color1} size={size} />
        <label>
          색상을 골라주세요:
          <input
            type="color"
            id="2"
            value={colors.color2}
            onChange={handleColorChange}
          />
        </label>
        <CustomizableBox color={colors.color2} size={size} />
        <label>
          색상을 골라주세요:
          <input
            type="color"
            id="3"
            value={colors.color3}
            onChange={handleColorChange}
          />
        </label>
        <CustomizableBox color={colors.color3} size={size} />
        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default User;
