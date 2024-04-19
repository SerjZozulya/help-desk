import React from "react";
import s from "./Comment.module.css";
import dayjs from "dayjs";

export default function Comment({ comment }) {
  return (
    <div className={s.comment}>
      <div className={s.comment_header}>
        <h4>{comment.author.name}</h4> <span>from</span> 
        <h4>{comment.author.department} </h4>
      </div>
      <h5>{dayjs(comment.date).format("YYYY-MM-DD HH:mm")}</h5>
      <p>{comment.text}</p>
    </div>
  );
}
