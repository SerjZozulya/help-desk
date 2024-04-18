import { Table } from "antd";
import React, { useContext } from "react";
import { columns } from "../utils/consts/columns";
import { dataContext } from "../App";
import { useNavigate } from "react-router-dom";

export default function Requests() {

  const navigate = useNavigate()

  const data = useContext(dataContext)
  return (
    <div className="requests">
      <h2>Help requests. Total: {data.length}</h2>
      <Table 
        columns={columns}
        dataSource={data}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {navigate(String(record.key))}, // click row
          };
        }}
        pagination={{
          position: ['topRight', 'bottomRight']
        }}
      />
    </div>
  );
}
