import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const FinalDrop = ({ items }) => {
  return (
    <div
      style={{
        position: "absolute",
        width: "400px",
        left: "320px",
        top: "0",
        padding: "50px 40px",
      }}
    >
      {items.length !== 0 &&
        items.map((item, index) => (
          <div className='d-flex'>
            <Link
              key={index}
              to={item.link}
              className='subtitle rightDrop finalDrop'
              style={{ fontSize: "105%" }}
            >
              {item.subtitle}

              {item?.chevronRight === "ChevronRight" ? (
                <div style={{ marginLeft: "20px" }}>
                  <ChevronRight size={20} />
                </div>
              ) : (
                <></>
              )}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default FinalDrop;
