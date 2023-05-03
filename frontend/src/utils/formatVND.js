const formatVND = (n) => {
  n = n ? n : 0;
  return "VNĐ" + n.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, "$1,");
};

export default formatVND;
