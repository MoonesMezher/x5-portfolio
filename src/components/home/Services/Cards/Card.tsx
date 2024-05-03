import { TCardprops } from "../../../../types";
import "./Card.css";
import limitString from '../../../../helpers/limitString'

const Card = ({ service, price, brief, link, icon }: TCardprops) => {
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
        <p>{limitString(brief,80)}</p>
      </div>
      <a href="#">{link}</a>
      <div className="icon">{icon}</div>
    </div>
  );
};

export default Card;
