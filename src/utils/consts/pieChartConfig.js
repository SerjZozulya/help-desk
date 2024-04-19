export const pieConfig = (data) => {
  return {
    data: [
      {
        priority: "1",
        requests: data.filter((item) => item.priority === 1).length,
      },
      {
        priority: "2",
        requests: data.filter((item) => item.priority === 2).length,
      },
      {
        priority: "3",
        requests: data.filter((item) => item.priority === 3).length,
      },
      {
        priority: "4",
        requests: data.filter((item) => item.priority === 4).length,
      },
      {
        priority: "5",
        requests: data.filter((item) => item.priority === 5).length,
      },
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
};
