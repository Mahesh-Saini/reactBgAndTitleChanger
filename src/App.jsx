import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const handleBtnClick = (e) => {
    const text = e.target.innerHTML;
    const d = document.querySelector("body");
    d.style.backgroundColor = text;
    const title = document.querySelector("title");
    title.textContent = `${text[0].toUpperCase()}${text.slice(1)}`;
  };
  return (
    <>
      <div className="buttonWrapper">
        <Button
          btnName="red"
          color="white"
          bgColor="red"
          handleBtnClick={handleBtnClick}
        />
        <Button
          bgColor="purple"
          color="white"
          btnName="purple"
          handleBtnClick={handleBtnClick}
        />
        <Button
          btnName="orange"
          color="white"
          bgColor="orange"
          handleBtnClick={handleBtnClick}
        />
        <Button
          bgColor="pink"
          color="black"
          btnName="pink"
          handleBtnClick={handleBtnClick}
        />
        <Button
          btnName="green"
          color="white"
          bgColor="green"
          handleBtnClick={handleBtnClick}
        />
        <Button
          bgColor="blue"
          color="white"
          btnName="blue"
          handleBtnClick={handleBtnClick}
        />
        <Button
          btnName="silver"
          color="black"
          bgColor="silver"
          handleBtnClick={handleBtnClick}
        />
        <Button
          bgColor="tomato"
          color="white"
          btnName="tomato"
          handleBtnClick={handleBtnClick}
        />
      </div>
    </>
  );
}

export default App;
