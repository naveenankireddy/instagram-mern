import React, { useState, useEffect } from "react";
import "../styles/createpost.css";
import { useHistory } from "react-router-dom";
// import { axios } from "axios";

import M from "materialize-css";

function CreatePost() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [image, setImage] = useState("");
  const [url, setUrl] = useState("");

  const handleSubmit = () => {
    const data = new FormData();
    data.append("file", image);
    data.append("upload_preset", "instagram-mern");
    data.append("cloud_name", "dgtal2koc");
    fetch("	https://api.cloudinary.com/v1_1/dgtal2koc/image/upload", {
      method: "post",
      body: data,
    })
      .then((res) => res.json())
      .then((data) => {
        setUrl(data.url);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    if (url) {
      fetch("/createpost", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Protected ${localStorage.getItem("jwt")}`,
        },

        body: JSON.stringify({
          title,
          body,
          photo: url,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "hey im data");

          if (data.error) {
            return M.toast({
              html: data.error,
              classes: "#e57373 red lighten-2",
            });
          } else {
            console.log(data, "this thime avengers will come");
            localStorage.setItem("jwt", data.token);
            localStorage.setItem("user", data.user);
            M.toast({
              html: "Created Successfully",
              classes: "#ba68c8 purple lighten-2",
            });
            history.push("/");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [url]);

  return (
    <div className="card createpost input-field">
      <input
        type="text"
        placeholder="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <input
        type="text"
        placeholder="body"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      <div className="file-field input-field">
        <div className="btn #42a5f5 blue lighten-1">
          <span>Upload Image</span>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <div className="file-path-wrapper">
          <input className="file-path validate" type="text" />
        </div>
      </div>
      <button
        className=" btn waves-effect waves-light #42a5f5 blue lighten-1"
        onClick={() => handleSubmit()}
      >
        Lets go
      </button>
    </div>
  );
}

export default CreatePost;
