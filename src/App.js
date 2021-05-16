import React, { useState } from "react";
import axios from "axios";
import MapContainer from "./MapContainer"
import "./App.css";

export default function App() {
  const [inputs, setInputs] = useState({
    x_text: 129.07509523457,
    y_text: 35.17992598569,
    address: "",
    secrete: "d0a864383b39b65dc2abaec7cf4ece53"
  });

  const { x_text, y_text, address, secrete } = inputs;

  const onChange = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value
    });
  };

  const onSearch = async () => {
    const res = await axios(
      `https://dapi.kakao.com/v2/local/search/address.json?query=${address}&size=20`,
      {
        headers: {
          Authorization: `KakaoAK ${secrete}`
        }
      }
    );
    console.log(res.data);
    setInputs({
      ...inputs,
      x_text: parseFloat(res.data.documents[0].x),
      y_text: parseFloat(res.data.documents[0].y),
      address:''
    });
  };

  const showMap = () => {};

  return (
    <div className="App container">
      <input className="p btn-block"
        name="address"
        value={address}
        placeholder="주소를 입력하세요"
        onChange={onChange}
      />
      <button onClick={onSearch} className="btn btn-dark btn-block">지도보기</button>
      <div>
        <b>X좌표:</b>
        <input name="x_text" value={x_text} />
      </div>
      <div>
        <b>Y좌표:</b>
        <input name="y_text" value={y_text} />
      </div>
      <div>
      </div>
      <MapContainer x_text={x_text} y_text={y_text}></MapContainer>
    </div>
  );
}

