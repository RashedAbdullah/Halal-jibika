import { Outlet } from "react-router-dom";
import FooterComp from "./../components/footer/FooterComp";
import Navigations from "../components/navigaton/Navigations";
import LoadingPage from "../components/pages/loading/LoadingPage";
import { useNavigation } from "react-router-dom";
import ScrollAnimation from "../scrollBar/ScrollAnimation";

const LayoutPage = () => {
  const loadingData = useNavigation();
  return (
    <div>
      <Navigations />
      <ScrollAnimation />
      {loadingData.state === "loading" ? <LoadingPage /> : <Outlet />}
      <FooterComp />
    </div>
  );
};

export default LayoutPage;
