import React from "react";
import Book from "./Book";

function Library(props) {
  return (
    <div>
      <Book name="파이썬이 제일 쉬었어요" page="100" />
      <Book name="리액트란" page="100" />
      <Book name="자바의 정석" page="100" />
    </div>
  );
}

export default Library;