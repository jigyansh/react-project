import React from "react";
import "./Feed.css";
import MessageSender from "./MessageSender";
import Post from "./Post";
import StoryReel from "./StoryReel";

function Feed() {
  return (
    <div className="feed">
      <StoryReel className="feed-stories" />
      <MessageSender />
      <Post
        profilePic="https://media.istockphoto.com/photos/laptop-computer-desktop-pc-human-hand-office-soft-focus-picture-picture-id811268074"
        image="https://media.istockphoto.com/photos/laptop-computer-desktop-pc-human-hand-office-soft-focus-picture-picture-id811268074"
        username="jigyansh varshney"
        timestamp="time"
        message="wow this works"
      />
    </div>
  );
}

export default Feed;
