import { Tag } from "antd";
import dayjs from "dayjs";

export const columns = [
    {
      title: "№",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (_, { status }) => (
        <Tag
          color={
            status === "IN PROGRESS"
              ? "geekblue"
              : status === "OPEN"
              ? "volcano"
              : "green"
          }
          key={status}
        >
          {status.toUpperCase()}
        </Tag>
      ),
    },
    {
      title: "Priority",
      dataIndex: "priority",
      key: "priority",
      sorter: (a, b) => a.priority - b.priority,
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
    },
    {
      title: "Applicant",
      key: "applicant",
      dataIndex: "applicant",
    },
    {
      title: "Deadline",
      key: "deadline",
      dataIndex: "deadline",
      sorter: (a, b) => a.deadline - b.deadline,
      render: (deadline) => (dayjs(deadline).format('MMMM DD - HH:mm'))
    },
    {
      title: 'Asignee',
      key: 'asignee',
      dataIndex: 'asignee'
    },
    {
      title: 'Created',
      key: 'created',
      dataIndex: 'created',
      sorter: (a, b) => a.created - b.created,
      render: (created) => (dayjs(created).format("DD MMM YYYY - HH:mm"))
    }
  ];