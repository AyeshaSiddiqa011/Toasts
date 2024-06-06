import { useCallback, useState } from "react";
import Notifications from "../notifications";

const useNotification = (position = "bottom-left") => {
  const [notification, setNotification] = useState(null);

  let timer;

  const triggerNotification = useCallback((notificationProps) => {
    clearTimeout(timer);
    setNotification(notificationProps);
    timer = setTimeout(() => {
      setNotification(null);
    }, notificationProps.duration);
  }, []);

  const NotificationComponent = notification ? (
    <div className={`${position}`}>
      <Notifications {...notification} />
    </div>
  ) : null;
  return { NotificationComponent, triggerNotification };
};

export default useNotification;
