import { Avatar } from "@material-ui/core";
import React from "react";
import "./Post.css";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";

function Post({ profilePic, image, username, timestamp, message }) {
  return (
    <div className="post">
      <div className="post__top">
        <Avatar src={profilePic} className="post__avatar" />
        <div className="post__topInfo">
          <h3>{username}</h3>
          <p>timestamp...</p>
        </div>
      </div>
      <div className="post__bottom">
        <p>{message}</p>
      </div>
      <div className="post__image">
        <img src={image} alt="some" />
      </div>
      <div className="post__options">
        <div className="post__option">
          <ThumbUpAltIcon style={{ color: "gray" }} />
          <p>Like</p>
        </div>
        <div className="post__option">
          <CommentIcon style={{ color: "gray" }} />
          <p>Comment</p>
        </div>
        <div className="post__option">
          <ShareIcon style={{ color: "gray" }} />
          <p>Share</p>
        </div>
      </div>
    </div>
  );
}

export default Post;
