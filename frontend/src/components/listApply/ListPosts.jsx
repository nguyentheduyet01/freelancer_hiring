import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostUserAction } from "../../reducer/actions/userAction";
import Tables from "../table/Tables";

const ListPosts = () => {
  const dispatch = useDispatch();
  const { user, posts } = useSelector((state) => state.user);

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
      name: "Ngân sách",
    },
    {
      name: "Trạng Thái",
    },
  ];

  useEffect(() => {
    dispatch(getAllPostUserAction(user?.id, {}));
  }, [dispatch, user]);

  return (
    <div>
      <Tables posts={posts?.data} headers={headers} />
    </div>
  );
};

export default ListPosts;
