import { ReactNode } from "react";
import "./Card.css";
interface Cardprops {
  service: string;
  price: string;
  brief: string;
  link: string;
  icon: ReactNode;
}

const Card = ({ service, price, brief, link, icon }: Cardprops) => {
  return (
    <div className="service_card">
      <div className="service_top">
        <h3>{service}</h3>
        <div className="service_price_wrapper">
          <p className="service_price">
            {price}
            <div className="services-price-overlay"></div>
          </p>
        </div>
      </div>
      <div className="brief">
        <p>{brief}</p>
      </div>
      <a href="#">{link}</a>
      <div className="icon">{icon}</div>
    </div>
  );
};

export default Card;
