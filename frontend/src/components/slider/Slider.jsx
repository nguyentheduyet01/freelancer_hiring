import Carousel from "react-bootstrap/Carousel";
import bg1 from "../../images/bg1.jpg";
import bg2 from "../../images/bg2.jpg";
import bg3 from "../../images/bg3.jpg";

function Slider() {
  return (
    <img src={bg2} alt="bg1" />
    // <Carousel controls={false}>
    //   <img src={bg1} alt="bg1" />
    //   {/* <Carousel.Item>
    //     <img className="d-block w-100" src={bg1} alt="First slide" />
    //     <Carousel.Caption>
    //       <h3>Chào mừng đến với Molas</h3>
    //       <p>Nơi kết nối giữa nhà tuyển dụng và các chuyên gia đa lĩnh vực.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src={bg2} alt="Second slide" />

    //     <Carousel.Caption>
    //       <h3>Nền tảng tuyển dụng freelancer tốt nhất</h3>
    //       <p>Mang đến cho bạn những giải pháp tốt nhất cho dự án của bạn.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item>
    //   <Carousel.Item>
    //     <img className="d-block w-100" src={bg3} alt="Third slide" />

    //     <Carousel.Caption>
    //       <h3>Tìm kiếm chuyên gia freelancer tốt nhất</h3>
    //       <p>Chúng tôi giúp bạn tiếp cận với những tài năng đa dạng nhất.</p>
    //     </Carousel.Caption>
    //   </Carousel.Item> */}
    // </Carousel>
  );
}

export default Slider;
