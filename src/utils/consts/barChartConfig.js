export const barConfig = (data) => {
  return {
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
};
