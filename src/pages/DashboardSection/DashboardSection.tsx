import { useEffect, useState } from "react";
import Table from "../../components/DashboardSection/Table/Table";
import { useNavigate, useParams } from "react-router";
import { TData } from "../../types";
import "./DashboardSection.css";
import MainButton from "../../components/shared/MainButton/MainButton";
import axios from "axios";
import API from "../../api/axios";
import Loading from "../../components/shared/Loading/Loading";

const DashboardSection = () => {
  const [data, setData] = useState<TData>([]);
  const [deleteItem, setDeleteItem] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { section } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    if(!(section == 'projects' || section == 'messages')) {
      navigate('/error');
    }
    if (section == "projects") {
      setLoading(true);
      axios.get(API.GET.projects)
      .then((res) => {        
        setLoading(false);
        setData(res.data.data);
      })
      .catch((error) => {
        setLoading(false);
        // console.log("error getting projects", error);
      });
    } else if (section == "messages") {
      axios.get(API.GET.messages)
      .then((res) => {
        setData(res.data.data);
      })
      .catch((error) => {
        // console.log("error getting messages", error);
      });
    }
  }, [section, deleteItem]);

  return (
    <section className="page dashboard-section">
      <h1>{section}</h1>
      <p>
        Count of {section} is {data?.length}{" "}
      </p>
      {section == 'projects' && <MainButton type="" title="Add Project" url="/dashboard/project-request" />}
      <div className="main-container">
        <Table data={data} setDeleted={setDeleteItem}/>
      </div>
      <Loading loading={loading}/>
    </section>
  );
};

export default DashboardSection;
