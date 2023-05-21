import React, { useEffect } from "react";
import Tables from "../table/Tables";
import { useDispatch, useSelector } from "react-redux";
import { getAllReceivedPostAction } from "../../reducer/actions/userAction";

const ListApply = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user);

  const headers = [
    {
      name: "stt",
    },
    {
      name: "Tên Công việc",
    },
    {
      name: "Loại việc",
    },
    {
      name: "Thời gian",
    },
    {
      name: "Ngân sách",
    },
    {
      name: "Trạng Thái",
    },
  ];
  useEffect(() => {
    dispatch(getAllReceivedPostAction(user?.id, {}));
  }, [dispatch, user]);
  return (
    <div>
      <Tables posts='post' headers={headers} />
    </div>
  );
};

export default ListApply;
