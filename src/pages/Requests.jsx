import { Input, Pagination, Table } from "antd";
import React, { useContext, useState } from "react";
import { columns } from "../utils/consts/columns";
import { dataContext } from "../App";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../utils/hooks/useFilter";

export default function Requests() {
  const navigate = useNavigate();
  const data = useContext(dataContext);

  const [filter, setFilter] = useState("");

  const filteredData = useFilter(data, filter);

  return (
    <div className="requests">
      <div className="toolbar">
        <h2>Help requests. Total: {data.length}</h2>
        <Input.Search
          style={{ width: 300 }}
          placeholder="Search"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        />
      </div>

      <Table
        columns={columns}
        dataSource={filteredData}
        onRow={(record, rowIndex) => {
          return {
            onClick: (event) => {
              navigate(String(record.key));
            }, // click row
          };
        }}
        pagination={{
          position: ["bottomRight"],
        }}
        scroll={{ y: 640, x: 1200 }}
      />
    </div>
  );
}
