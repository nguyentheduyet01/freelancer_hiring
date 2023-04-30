import { State } from "country-state-city";
import React, { useRef, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";
import "./Filter.css";

const Filter = () => {
  const ref = useRef(null);
  const options = State.getStatesOfCountry("VN");
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [isClose, setIsClose] = useState(false);
  let newSelected = [];

  const handleSelected = (selected) => {
    setSelectedOptions(selected);
    newSelected = selectedOptions.map((item) => item.name);
    setIsClose(true);
  };

  return (
    <div className='searchHeader d-flex mb-3 '>
      <div className='searchItem text-start' style={{ width: "100%" }}>
        <span style={{ color: "black", fontWeight: "500", fontSize: "130%" }}>Lọc theo</span>
        <div style={{ position: "relative" }}>
          <span style={{ fontWeight: "500", fontSize: "95%", color: "#003342" }}>Thành phố</span>

          <Typeahead
            // defaultSelected={options.slice(0, 4)}
            id='public-methods-example'
            labelKey='name'
            multiple
            options={options}
            placeholder='Chọn thành phố...'
            ref={ref}
            onChange={handleSelected}
            selected={selectedOptions}
            className='mt-2 mb-3'
          />
          {isClose && (
            <Button
              onClick={() => {
                ref.current?.clear();
                setIsClose(false);
              }}
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "black",
                position: "absolute",
                top: "50px",
                right: "-6px",
              }}
            >
              <XCircle />
            </Button>
          )}
          <hr />
        </div>
        <div>
          <span style={{ fontWeight: "500", fontSize: "95%", color: "#003342" }}>Khoảng giá</span>
          <div className='d-flex'>
            <label class='label d-flex align-items-center'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
            <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              nhỏ hơn 1 triệu
            </div>
          </div>
          <div className='d-flex'>
            <label class='label d-flex align-items-center'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
            <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              nhỏ hơn 1 triệu
            </div>
          </div>
          <div className='d-flex'>
            <label class='label d-flex align-items-center'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
            <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              nhỏ hơn 1 triệu
            </div>
          </div>
          <div className='d-flex'>
            <label class='label d-flex align-items-center'>
              <input type='checkbox' />
              <span class='checkmark'></span>
            </label>
            <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              nhỏ hơn 1 triệu
            </div>
          </div>
          <hr />
        </div>
        <div>
          <span style={{ fontWeight: "500", fontSize: "95%", color: "#003342" }}>
            Hình thức làm việc
          </span>
          <div className='d-flex'>
            <label class='label d-flex align-items-center'>
              <input type='radio' name='radio' />
              <span class='checkmarkRadio'></span>
            </label>
            <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Tất cả
            </div>
          </div>
          <div className='d-flex'>
            <label class='label d-flex align-items-center'>
              <input type='radio' name='radio' />
              <span class='checkmarkRadio'></span>
            </label>
            <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Làm online
            </div>
          </div>
          <div className='d-flex'>
            <label class='label d-flex align-items-center'>
              <input type='radio' name='radio' />
              <span class='checkmarkRadio'></span>
            </label>
            <div class='d-flex align-items-start' style={{ lineHeight: "33px" }}>
              Làm tại văn phòng
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
