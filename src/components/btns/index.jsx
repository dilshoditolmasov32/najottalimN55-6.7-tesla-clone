import next from "../../assets/images/next.svg";
import "../footer/index.css"
const Index = () => {
  return (
    <div>
      <button className="btn-order-now">
        Order Now <img src={next} alt="next" />
      </button>
    </div>
  );
};

export default Index;
