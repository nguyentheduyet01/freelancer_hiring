import React from "react";
import { Row } from "react-bootstrap";

const Filter = () => {
  return (
    <Row>
      <div className='searchHeader d-flex mb-3 '>
        <div className='searchItem text-start'>
          <span style={{ color: "black", fontWeight: "500", fontSize: "130%" }}>Tìm kiếm theo</span>
        </div>
      </div>
    </Row>
  );
};

export default Filter;
