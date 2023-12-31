import { CircleLoader } from "react-spinners";

const LoadingPage = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "85vh",
      }}
    >
      <div>
        <CircleLoader color="#fff" size={"300px"} />
      </div>
    </div>
  );
};

export default LoadingPage;
