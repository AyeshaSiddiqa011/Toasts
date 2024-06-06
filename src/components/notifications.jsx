import {
  AiOutlineCheck,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
  AiOutlineClose,
} from "react-icons/ai";
import "./notifications.css";

const iconStyles = { marginRight: "10px" };

const icons = {
  success: <AiOutlineCheck style={iconStyles} />,
  info: <AiOutlineInfoCircle style={iconStyles} />,
  warning: <AiOutlineWarning style={iconStyles} />,
  error: <AiOutlineCloseCircle style={iconStyles} />,
};

const Notifications = ({ type = "info", message, onClose = () => {} }) => {
  return (
    <div className={`notification ${type}`}>
      {/* icon */}
      {icons[type]}

      {message}

      {/* closebtn  */}
      <AiOutlineClose className="closeBtn" color="white" onClick={onClose} />
    </div>
  );
};

export default Notifications;
