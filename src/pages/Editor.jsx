import React, { useState, useContext } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Header from "../components/Header";
import "../App.css";
import { StateContext } from "../contexts/contextProvider";

const Editor = () => {
  const { currentColor, currentMode } = useContext(StateContext);
  const [text, setText] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ font: [] }],
      [{ size: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image", "video"],
    ],
  };
  return (
    <div
      className="editor m-2 dark:bg-main-dark-bg  mt-24 p-6 w-4/5 mx-auto rounded-3xl">
      <Header category="App" title="Editor" />
      <ReactQuill
        className="text-black"
        theme="snow"
        value={text}
        onChange={setText}
        modules={modules}
      />
    </div>
  );
};

export default Editor;
