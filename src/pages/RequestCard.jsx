import React from "react";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { dataContext } from "../App";
import { Button, DatePicker, Input, Select } from "antd";
import dayjs from "dayjs";
import s from "./card.module.css";
import SidePanel from "../UI/SidePanel";
import Comment from "../UI/Comment";

export default function RequestCard() {
  const params = useParams();
  const data = useContext(dataContext);
  const card = data.find((item) => item.key == params.id);
  const statusOptions = [
      { value: "OPEN", label: "OPEN" },
      { value: "IN PROGRESS", label: "IN PROGRESS" },
      { value: "DONE", label: "DONE" },
    ],
    priorityOptions = [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
      { value: "5", label: "5" },
    ];

  const comments = card.comments.map((item) => <Comment comment={item} />);

  console.log(card.executor);

  return (
    <div className={s.card}>
      <div className={s.card_wrapper}>
        <span className="card-header">
          <h2>
            {params.id}. {card.name}
          </h2>
        </span>
        <div className="category main">
          <form>
            <label htmlFor="name">Name</label>
            <Input id="name" value={card.name} placeholder="Name" />
            <label htmlFor="description">Description</label>
            <Input.TextArea
              id="description"
              placeholder="Description"
              value={card.description}
            />
            <span className="form-row">
              <div className="form-item">
                <label htmlFor="status">Status</label>
                <Select
                  id="status"
                  defaultValue={card.status}
                  style={{ width: 150 }}
                  options={statusOptions}
                />
              </div>
              <div className="form-item">
                <label htmlFor="priority">Priority</label>
                <Select
                  id="priority"
                  defaultValue={card.priority}
                  style={{ width: 120 }}
                  options={priorityOptions}
                />
              </div>
              <div className="form-item">
                <label htmlFor="deadline">Deadine</label>
                <DatePicker
                  id="deadline"
                  value={dayjs(card.deadline)}
                ></DatePicker>
              </div>
            </span>
            <div className="button-block">
              <Button type="primary">Save</Button>
              <Button>Cancel</Button>
            </div>
          </form>
        </div>

        <div className="category additional">
          <form>
            <label htmlFor="comment">Add Comment:</label>
            <Input.TextArea id="comment" />
            <Button type="primary">Send</Button>
          </form>
        </div>
        <div className="category">
          <h5>Comments:</h5>
          {comments}
        </div>
      </div>
      <SidePanel
        applicant={card.applicant}
        executor={card.executor}
        created={card.created}
      />
    </div>
  );
}
