import "./assets/css/colors.css";
import "./assets/css/fonts.css";
import "./assets/css/layout.css";
import "./App.css";
import Home from "./pages/Home/Home";
import Header from "./components/shared/Header/Header";
import Footer from "./components/shared/Footer/Footer";
import Dashboard from "./pages/Dashboard/Dashboard";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import DashboardSection from "./pages/DashboardSection/DashboardSection";
import ProjectRequest from "./pages/ProjectRequest/ProjectRequest";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import { useAdminContext } from "./hooks/useAdminContext";

function App() {
  const { state } = useAdminContext();

  const { admin } = state;

  console.log(admin);

  return (
    <div>
      <main>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={!admin ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/dashboard"
              element={admin ? <Dashboard /> : <Navigate to={"error"} />}
            />
            <Route
              path="/dashboard/project-request"
              element={admin ? <ProjectRequest /> : <Navigate to={"error"} />}
            />
            <Route
              path="/dashboard/:section"
              element={admin ? <DashboardSection /> : <Navigate to={"error"} />}
            />
            <Route path="*" element={<Navigate to={"error"} />} />
            <Route path="/error" element={<ErrorPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </main>
    </div>
  );
}

export default App;
