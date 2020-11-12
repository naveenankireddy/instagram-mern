import React from "react";
import "../styles/createpost.css";

function CreatePost() {
  return (
    <div className="card createpost input-field">
      <input type="text" placeholder="title" />
      <input type="text" placeholder="body" />
      <div className="file-field input-field">
        <div className="btn #42a5f5 blue lighten-1">
          <span>File</span>
          <input type="file" />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button className=" btn waves-effect waves-light #42a5f5 blue lighten-1">
        Lets go
      </button>
    </div>
  );
}

export default CreatePost;
