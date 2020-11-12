import React from "react";
import "../styles/profile.css";

function Profile() {
  return (
    <div className="profile">
      <div className="profile-flex">
        <div>
          <img
            src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
            className="profile-img"
          />
        </div>
        <div>
          <h4>monster</h4>
          <div className="profile-status">
            <h6>40 posts</h6>
            <h6>40 followers</h6>
            <h6>40 following</h6>
          </div>
        </div>
      </div>
      <div className="profile-gallery">
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
        <img
          className="item"
          src="https://images.unsplash.com/photo-1603280697403-d63281c9e657?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"
        />
      </div>
    </div>
  );
}

export default Profile;
