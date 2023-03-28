import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Search } from 'react-bootstrap-icons';
// import SearchIcon from '@mui/icons-material/Search';
const Header = () => {
  return (
    <>
      <Row style={{ borderBottom: '1px #BECCBE solid', lineHeight: '70px' }}>
        <Col xs xm lg='2'>
          <div className='logo'>hello</div>
        </Col>
        <Col xs xm lg='4'>
          <Row>
            <Col xm lg='5'>
              Tìm kiếm việc làm
            </Col>
            <Col xm lg='5'>
              Tuyển dụng
            </Col>
          </Row>
        </Col>
        <Col xs xm lg='4'>
          <Row className='mt-3'>
            <Col xm lg='3'></Col>
            <Col style={{ padding: '15  px 0 0 0' }}>
              <Form style={{ width: '90%', position: 'relative' }}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Control type='text' placeholder='search' style={{ fontSize: '110%' }} />
                </Form.Group>
                <Button
                  type='submit'
                  className='buttonSubmit'
                  style={{
                    backgroundColor: 'transparent',
                    width: '35px',
                    height: '35px',
                    position: 'absolute',
                    top: '3px',
                    right: '0',
                    border: 'none',
                  }}
                >
                  <Search
                    size={25}
                    color='#5a645a'
                    style={{ position: 'absolute', top: '5px', right: '5' }}
                  />
                </Button>
              </Form>
            </Col>
          </Row>
        </Col>
        <Col
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Row>
            <Col>
              <Button variant='light'>Login</Button>
            </Col>
            <Col>
              <Button variant='success'>Register</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Header;
