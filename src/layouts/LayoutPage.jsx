import { Outlet } from "react-router-dom";
import FooterComp from "./../components/footer/FooterComp";
import Navigations from "../components/navigaton/Navigations";
import LoadingPage from "../components/pages/loading/LoadingPage";
import { useNavigation } from "react-router-dom";
import ScrollAnimation from "../scrollBar/ScrollAnimation";
import { HalalJibikaContext } from "../context/JibikaContext";
import { useContext } from "react";

const LayoutPage = () => {
  const loadingData = useNavigation();
  const { isLight } = useContext(HalalJibikaContext);
  const dark = {
    color: "#fff",
    background: "linear-gradient(to right, #004d4d, #003131)",
  };
  const light = {
    color: "rgb(0, 71, 71)",
    background: "linear-gradient(to right, #9dffff, #adffff)",
  };

  return (
    <div
      style={{
        background: isLight ? light.background : dark.background,
        color: isLight ? light.color : dark.color,
      }}
    >
      <Navigations />
      <ScrollAnimation />
      {loadingData.state === "loading" ? <LoadingPage /> : <Outlet />}
      <FooterComp />
    </div>
  );
};

export default LayoutPage;
