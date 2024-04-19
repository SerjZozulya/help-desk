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
      width: 120,
      align: 'center',
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
      width: 120,
      align: 'center'
    },
    {
      title: "Name",
      key: "name",
      dataIndex: "name",
      width: 500
    },
    {
      title: "Applicant",
      key: "applicant",
      dataIndex: "applicant",
      render: (user) => (user.name)
    },
    {
      title: "Deadline",
      key: "deadline",
      dataIndex: "deadline",
      sorter: (a, b) => a.deadline - b.deadline,
      render: (deadline) => (dayjs(deadline).format('MMMM DD - HH:mm'))
    },
    {
      title: 'Executor',
      key: 'executor',
      dataIndex: 'executor',
      render: (user) => (user.name)
    },
    {
      title: 'Created',
      key: 'created',
      dataIndex: 'created',
      sorter: (a, b) => a.created - b.created,
      render: (created) => (dayjs(created).format("DD MMM YYYY - HH:mm"))
    }
  ];