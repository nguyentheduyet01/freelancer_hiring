import { State } from "country-state-city";
import React, { useRef, useState } from "react";
import { Button } from "react-bootstrap";
import { XCircle } from "react-bootstrap-icons";
import { Typeahead } from "react-bootstrap-typeahead";
import "react-bootstrap-typeahead/css/Typeahead.css";

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
      <div className='searchItem text-start' style={{ position: "relative", width: "100%" }}>
        <span style={{ color: "black", fontWeight: "500", fontSize: "130%" }}>Tìm kiếm theo</span>
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
      </div>
    </div>
  );
};

export default Filter;
