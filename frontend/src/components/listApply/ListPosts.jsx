import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllPostUserAction } from "../../reducer/actions/userAction";
import Tables from "../table/Tables";

const ListPosts = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
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
    dispatch(
      getAllPostUserAction({ id: user?.id, pagesize: 5, pageindex: page })
    );
  }, [dispatch, user, page]);

  return (
    <div>
      <Tables post="post" headers={headers} page={page} setPage={setPage} />
    </div>
  );
};

export default ListPosts;
