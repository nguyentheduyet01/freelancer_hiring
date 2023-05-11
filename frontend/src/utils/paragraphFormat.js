const paragraphFormat = (text) => {
  text = text ? text : "";

  const replacedText = text.replace(/•/g, "@@@");

  const list = replacedText.split("@@@").splice(1);

  if (list.length === 0) {
    return <div style={{ marginLeft: "12px" }}> {text}</div>;
  }
  return list.map((item, index) => (
    <div key={index} style={{ marginLeft: "12px" }}>
      <p>• {item}</p>
    </div>
  ));
};

export default paragraphFormat;
