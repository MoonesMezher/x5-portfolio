import "./Container.css";
import { AiOutlineGlobal } from "react-icons/ai";
import { BsLightbulb } from "react-icons/bs";
import { CiMobile2 } from "react-icons/ci";
import { FaGoogle } from "react-icons/fa";
import Card from "../Cards/Card";

const Container = () => {
  const json = [
    {
      service: "Websites",
      price: "$2,400",
      brief:
        "You may want to explore Too CSS for great collection of free HTML CSS templates.",
      link: "Discover More",
      icon: <AiOutlineGlobal />,
    },

    {
      service: "Branding",
      price: "$1,200",
      brief:
        "You can explore more CSS templates on TemplateMo website by browsing through different tags.",
      link: "Discover More",
      icon: <BsLightbulb />,
    },

    {
      service: "Ecommerce",
      price: "$3,600",
      brief:
        "If you need a customized ecommerce website for your business, feel free to discuss with me.",
      link: "Discover More",
      icon: <CiMobile2 />,
    },

    {
      service: "SEO",
      price: "$1,450",
      brief:
        "To list your website first on any search engine, we will work together. First Portfolio is one-page CSS Template for free download.",
      link: "Discover More",
      icon: <FaGoogle />,
    },
  ];

  return (
    <div className="service_container main-container">
      {json.map((element, index) => {
        return (
          <div key={index}>
            <Card
              service={element.service}
              price={element.price}
              brief={element.brief}
              link={element.link}
              icon={element.icon}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Container;
