import React from "react";
import { ChevronRight } from "react-bootstrap-icons";
import RightDropdown from "./RightDropdown";

const LeftDropdown = ({ itemsLeft, itemsRight, itemsFinal }) => {
  return (
    <>
      {itemsLeft.map((item, index) => (
        <div
          key={index}
          className={
            item?.chevronRight
              ? "p-4 pt-0 pb-0 block-title d-flex align-items-center flex-row"
              : "p-4 pt-0 pb-0 block-title"
          }
          onMouseLeave={item.leave}
          onMouseEnter={item.enter}
        >
          <div>
            <b className='width-title'>{item?.title}</b>
            <span className='subtitle'>{item?.subtitle}</span>
          </div>
          {item?.chevronRight === "ChevronRight" ? <ChevronRight size={30} /> : <></>}

          {item.isShow && <RightDropdown items={itemsRight} itemsFinal={itemsFinal} />}
          {/* {item?.chevronRight === "ChevronRight" && isShow && (
          )} */}
        </div>
      ))}
    </>
  );
};

export default LeftDropdown;
