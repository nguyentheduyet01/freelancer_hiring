import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllReceivedPostAction } from "../../reducer/actions/userAction";
import Tables from "../table/Tables";

const ListApply = () => {
  const dispatch = useDispatch();
  const [page,setPage] = useState()
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
      name: "Dự kiến hoàng thành",
    },
    {
      name: "Giá thương lượng",
    },
    {
      name: "cv",
    },
  ];
  useEffect(() => {
    dispatch(getAllReceivedPostAction(user?.id, {}));
  }, [dispatch, user]);
  return (
    <div>
      <Tables post='apply' headers={headers} page={page} setPage={setPage}/>
    </div>
  );
};

export default ListApply;
