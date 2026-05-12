function App() {

  const tasks = [
    {
      title: "Design Login Page",
      status: "Completed"
    },
    {
      title: "Create Backend APIs",
      status: "Pending"
    },
    {
      title: "Connect MongoDB",
      status: "Completed"
    },
    {
      title: "Deploy Project",
      status: "Pending"
    }
  ];

  return (
    <div
      style={{
        fontFamily: "Arial",
        background: "#f3f4f6",
        minHeight: "100vh",
        padding: "30px"
      }}
    >

      <h1 style={{ textAlign: "center" }}>
        Team Task Manager 🚀
      </h1>

      <div
        style={{
          display: "flex",
          gap: "20px",
          justifyContent: "center",
          marginTop: "30px"
        }}
      >

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center"
          }}
        >
          <h2>12</h2>
          <p>Total Tasks</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center"
          }}
        >
          <h2>5</h2>
          <p>Completed</p>
        </div>

        <div
          style={{
            background: "white",
            padding: "20px",
            borderRadius: "10px",
            width: "200px",
            textAlign: "center"
          }}
        >
          <h2>7</h2>
          <p>Pending</p>
        </div>

      </div>


      <h2 style={{ marginTop: "40px" }}>
        Project Tasks
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          marginTop: "20px"
        }}
      >

        {tasks.map((task, index) => (

          <div
            key={index}
            style={{
              background: "white",
              padding: "20px",
              borderRadius: "10px"
            }}
          >

            <h3>{task.title}</h3>

            <p>
              Status:
              <strong>
                {" "}
                {task.status}
              </strong>
            </p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default App;