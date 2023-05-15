import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getAllSkillUserAction } from "../../reducer/actions/userAction";

const SkillFreelancer = ({ userId }) => {
  // const dispatch = useDispatch();
  // const { user } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(getAllSkillUserAction(userId));
  // }, [dispatch, userId]);
  // console.log(userId);
  return (
    <div className='d-flex'>
      <button className='skillButton'>
        <Link className='linkSkill'>javascript</Link>
      </button>
      <button className='skillButton'>
        <Link className='linkSkill'>Nodejs</Link>
      </button>
      <button className='skillButton'>
        <Link className='linkSkill'>Nodejs</Link>
      </button>
    </div>
  );
};

export default SkillFreelancer;
