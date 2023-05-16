import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const SkillFreelancer = ({ skills }) => {
  return (
    <div className='d-flex'>
      {skills?.length !== 0 &&
        skills?.map((skill, index) => (
          <button className='skillButton' key={index}>
            <Link className='linkSkill'>{skill?.name}</Link>
          </button>
        ))}
    </div>
  );
};

export default SkillFreelancer;
