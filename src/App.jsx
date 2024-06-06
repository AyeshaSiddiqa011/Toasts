import useNotification from "./components/hooks/useNotification";

function App() {
  const { NotificationComponent, triggerNotification } =
    useNotification("bottom-left");

  return (
    <>
      <div className="main">
        <button
          onClick={() =>
            triggerNotification({
              type: "success",
              message: "File sent successfully",
              duration: 3000,
            })
          }
        >
          Trigger Success
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "error",
              message: "ERROR!",
              duration: 3000,
            })
          }
        >
          Trigger error
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "warning",
              message: "Warning!",
              duration: 3000,
            })
          }
        >
          Trigger warning
        </button>
        <button
          onClick={() =>
            triggerNotification({
              type: "info",
              message: "Your info",
              duration: 3000,
            })
          }
        >
          Trigger Info
        </button>
      </div>

      {NotificationComponent}
    </>
  );
}

export default App;
