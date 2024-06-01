import Btn from "../btns";
import "./index.css";

const Index = () => {

  const footer = [
    {
      title: "396mi",
      text: "Range (EPA est.)",
    },
    {
      title: "1.99s",
      text: "0-60 mph*",
    },
    {
      title: "200mph",
      text: "Top Speed†",
    },
    {
      title: "1,020hp",
      text: "Peak Power",
    },
  ];


  return (
    <footer className="footer-page">
      <div className="footer_car_data">
        {
          footer?.map((item, index) => (
            <div key={index} className="data">
              <h5>{item.title}</h5>
              <p>{item.text}</p>
            </div>
          ))
        }
      </div>

      <div className="btn">
        <Btn />
      </div>
    </footer>
  );
};

export default Index;
