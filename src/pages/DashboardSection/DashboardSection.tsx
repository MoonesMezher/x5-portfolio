import { useEffect, useState } from "react";
import Table from "../../components/DashboardSection/Table/Table";
import { useNavigate, useParams } from "react-router";
import { TData } from "../../types";
import "./DashboardSection.css";
import MainButton from "../../components/shared/MainButton/MainButton";
import axios from "axios";
import API from "../../api/axios";

const DashboardSection = () => {
  const [data, setData] = useState<TData>([]);
  const [deleteItem, setDeleteItem] = useState<boolean>(false);

  const { section } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if(!(section == 'projects' || section == 'messages')) {
      navigate('/error');
    }
    if (section == "projects") {
      axios.get(API.GET.projects)
      .then((res) => {        
        setData(res.data.data);
      })
      .catch((error) => {
        console.log("error getting projects", error);
      });
    } else if (section == "messages") {
      axios.get(API.GET.messages)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        console.log("error getting messages", error);
      });
    }
  }, [section, deleteItem]);

  return (
    <section className="page dashboard-section">
      <h1>{section}</h1>
      <p>
        Count of {section} is {data?.length}{" "}
      </p>
      {section == 'projects' && <MainButton title="Add Project" url="/dashboard/project-request" />}
      <div className="main-container">
        <Table data={data} setDeleted={setDeleteItem}/>
      </div>
    </section>
  );
};

export default DashboardSection;
