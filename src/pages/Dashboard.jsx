import { Column, Pie } from "@ant-design/plots";
import { useContext } from "react";
import { dataContext } from "../App";

export default function Dashboard() {
  const data = useContext(dataContext);

  const barConfig = {
    data: [
      {
        type: "DONE",
        requests: data.filter((item) => item.status === "DONE").length,
      },
      {
        type: "IN PROGRESS",
        requests: data.filter((item) => item.status === "IN PROGRESS").length,
      },
      {
        type: "OPEN",
        requests: data.filter((item) => item.status === "OPEN").length,
      },
    ],
    xField: "type",
    yField: "requests",
  };
  const pieConfig = {
    data: [
      { priority: "1", requests: data.filter((item) => item.priority === 1).length },
      { priority: "2", requests: data.filter((item) => item.priority === 2).length },
      { priority: "3", requests: data.filter((item) => item.priority === 3).length },
      { priority: "4", requests: data.filter((item) => item.priority === 4).length },
      { priority: "5", requests: data.filter((item) => item.priority === 5).length },
    ],

    label: {
      text: "priority",
      style: {
        fontWeight: "bold",
      },
    },

    annotations: [
      {
        type: "text",
        style: {
          text: "Request\nPriority",
          x: "50%",
          y: "50%",
          textAlign: "center",
          fontSize: 32,
          fontStyle: "bold",
        },
      },
    ],

    legend: {
      color: {
        title: true,
        rowPadding: 5,
      },
    },

    colorField: "priority",
    angleField: "requests",
    innerRadius: 0.6,
  };

  return (
    <div className="dashboard">
      <div className="category">
        <h2 style={{ textAlign: "center" }}>Request Status</h2>
        <Column {...barConfig} />
      </div>
      <div className="category">
        <h2 style={{textAlign: 'center'}}>Requests by Priority</h2>
        <Pie {...pieConfig} />
      </div>
    </div>
  );
}
