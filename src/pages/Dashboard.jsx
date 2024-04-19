import { Column, Pie } from "@ant-design/plots";
import { useContext } from "react";
import { dataContext } from "../App";
import {pieConfig} from "../utils/consts/pieChartConfig"
import {barConfig} from "../utils/consts/barChartConfig"

export default function Dashboard() {
  const data = useContext(dataContext);

  const pieChartConfig = pieConfig(data)
  const barChartConfig = barConfig(data)

  return (
    <div className="dashboard">
      <div className="category">
        <h2 style={{ textAlign: "center" }}>Request Status</h2>
        <Column {...barChartConfig} />
      </div>
      <div className="category">
        <h2 style={{textAlign: 'center'}}>Requests by Priority</h2>
        <Pie {...pieChartConfig} />
      </div>
    </div>
  );
}
