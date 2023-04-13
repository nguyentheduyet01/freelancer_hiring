import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import FinalDrop from "./FinalDrop";

const RightDropdown = ({ items, itemsFinal }) => {
  return (
    <div
      className='d-flex flex-column'
      style={{
        position: "absolute",
        top: "-50px",
        right: "-800px",
        height: "60vh",
        width: "800px",
        padding: "50px",
        paddingLeft: "100px",
      }}
    >
      {items.length !== 0 &&
        items.map((item, index) => (
          <div className='d-flex' key={index}>
            <Link
              className='subtitle rightDrop'
              style={{ fontSize: "105%" }}
              onMouseLeave={item.leave}
              onMouseEnter={item.enter}
            >
              {item.subtitle}

              {item?.chevronRight === "ChevronRight" ? (
                <>
                  <div style={{ marginLeft: "20px" }}>
                    <ChevronRight size={20} />
                  </div>
                  {item.isShow && <FinalDrop items={itemsFinal} />}
                </>
              ) : (
                <></>
              )}
            </Link>
          </div>
        ))}
    </div>
  );
};

export default RightDropdown;
