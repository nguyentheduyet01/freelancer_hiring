import { format, register } from "timeago.js";

const formatVi = (date) => {
  const vi = (number, index, totalSec) => {
    // đối với định dạng ngày giờ có từ 0-59 giây
    return [
      ["vừa xong", "một lúc"], // 0 - 59 giây
      ["%s giây trước", "cách đây %s giây"], // 1 - 59 phút
      ["1 phút trước", "cách đây 1 phút"], // 1 giờ
      ["%s phút trước", "cách đây %s phút"], // 2 giờ - 1 ngày
      ["1 ngày trước", "cách đây 1 ngày"], // 2 ngày - 1 tuần
      ["%s ngày trước", "cách đây %s ngày"], // 1 tuần - 1 tháng
      ["1 tháng trước", "cách đây 1 tháng"], // 2 - 11 tháng
      ["%s tháng trước", "cách đây %s tháng"], // 1 năm trước
      ["1 năm trước", "cách đây 1 năm"], // sau đó
      ["%s năm trước", "cách đây %s năm"],
    ][index];
  };

  register("locate", vi);

  return format(date, "locate");
};

export default formatVi;
