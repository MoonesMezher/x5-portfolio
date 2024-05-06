// import { useState } from "react";
// import CrudTabel from "./CrudTable/CrudTabel";
// import Modal from "./CrudTable/Modal";
import { useState } from "react";
import MainButton from "../../components/shared/MainButton/MainButton";
import "./Dashboard.css";
import Alert from "../../components/shared/Alert/Alert";
import axios from "axios";
import API from "../../api/axios";
import { useAdminContext } from "../../hooks/useAdminContext";
import { useNavigate } from "react-router";

const Dashboard = () => {
  const [alert, setAlert] = useState<boolean>(false);

  const { state, dispatch } = useAdminContext();

  const navigate = useNavigate();
  const handleNoOption = () => {
    setAlert(false)
  }

  const handleYesOption = () => {
    axios.post(API.POST.logout)
      .then(res => {
        if(!res.data.admin) {
          dispatch({ type: "LOGOUT" })
          navigate('/');
        }
      });
  }

  return (
    <section className="dashboard page">
        <div className="main-container">
          <h1>Hello Admin</h1>
          <div className="actions">
            <MainButton title="Projects" url="/dashboard/projects"/>
            <MainButton title="Messages" url="/dashboard/messages"/>
            <div onClick={() => setAlert(true)}>
              <MainButton title="Logout" url="#"/>
            </div>
          </div>
        </div>
        { alert && <Alert message="Are you sure you want logout?" handleNoOption={handleNoOption} handleYesOption={handleYesOption}/> }
    </section>
  );
};

export default Dashboard;