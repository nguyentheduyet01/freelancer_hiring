import { State } from "country-state-city";
import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./Filter.css";

const Filter = () => {
  const ref = useRef(null);
  const options = State.getStatesOfCountry("VN");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isClose, setIsClose] = useState(false);

  const handleSelected = (selected) => {
    setSelectedOptions(selected);
    // newSelected = selectedOptions.map((item) => item.name);
    // console.log(selected);
    localStorage.setItem("address", JSON.stringify(selected[0].name));
    setIsClose(true);
  };

  return (
    <div className='searchHeader d-flex mb-3'>
      <div className='searchItem text-start' style={{ width: "100%" }}>
        <span style={{ color: "black", fontWeight: "500", fontSize: "130%" }}>Lọc theo</span>
        <div style={{ position: "relative" }}>
          <span style={{ fontWeight: "500", fontSize: "95%", color: "#677967" }}>Thành phố</span>

          <Typeahead
            // defaultSelected={options.slice(0, 4)}
            id='public-methods-example'
            labelKey='name'
            // multiple
            options={options}
            placeholder='Chọn thành phố...'
            ref={ref}
            onChange={handleSelected}
            selected={selectedOptions}
            className='mt-2 mb-3'
          />
          {isClose && (
            <Button
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "black",
                position: "absolute",
                top: "59px",
                right: "-6px",
              }}
            >
              <XCircle
                onClick={() => {
                  ref.current.clear();
                  setIsClose(false);
                }}
                style={{ cursor: "pointer" }}
              />
            </Button>
          )}
          <hr />
        </div>
        <div>
          <span style={{ fontWeight: "500", fontSize: "95%", color: "#677967" }}>Khoảng giá</span>
          <div className='d-flex'>
            <label className='label d-flex align-items-center'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Nhỏ hơn 1 triệu
            </div>
          </div>
          <div className='d-flex'>
            <label className='label d-flex align-items-center'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Lớn hơn 1 triệu - Nhỏ hơn 2 triệu
            </div>
          </div>
          <div className='d-flex'>
            <label className='label d-flex align-items-center'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Lớn hơn 2 triệu - Nhỏ hơn 3 triệu
            </div>
          </div>
          <div className='d-flex'>
            <label className='label d-flex align-items-center'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Lớn hơn 3 triệu - Nhỏ hơn 4 triệu
            </div>
          </div>
          <div className='d-flex'>
            <label className='label d-flex align-items-center'>
              <input type='checkbox' />
              <span className='checkmark'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Lớn hơn 4 triệu
            </div>
          </div>
          <hr />
        </div>
        <div>
          <span style={{ fontWeight: "500", fontSize: "95%", color: "#677967" }}>
            Hình thức làm việc
          </span>
          <div className='d-flex'>
            <label className='label d-flex align-items-center'>
              <input type='radio' name='radio' />
              <span className='checkmarkRadio'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Tất cả
            </div>
          </div>
          <div className='d-flex'>
            <label className='label d-flex align-items-center'>
              <input type='radio' name='radio' />
              <span className='checkmarkRadio'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Làm online
            </div>
          </div>
          <div className='d-flex'>
            <label className='label d-flex align-items-center'>
              <input type='radio' name='radio' />
              <span className='checkmarkRadio'></span>
            </label>
            <div className='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Làm tại văn phòng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
