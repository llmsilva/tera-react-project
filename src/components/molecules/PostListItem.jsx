import React from "react";

export default function PostListItem(props) {
  return (
    <div className="user-blog__posts-item">
      <div className="user-blog__posts-item-photo">
        <img src={props.image} className="responsive" alt="" />
      </div>
      <h2 className="user-blog__posts-item-title">{props.title}</h2>
      <div className="user-blog__posts-date">
        Publicado em {props.createdAt}
      </div>
      <div className="user-blog__post-content">{props.content}</div>
    </div>
  );
}