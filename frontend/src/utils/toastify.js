import { toast } from "react-toastify";

export const showToastMessageSuccess = (message) => {
  toast.success(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};

export const showToastMessageError = (message) => {
  toast.error(message, {
    position: toast.POSITION.TOP_RIGHT,
  });
};
