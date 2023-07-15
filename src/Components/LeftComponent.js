import logo from "./logo.png";

const LeftComponent = () => {
  return (
    <div className="leftComponent">
      <h2>Find 3D Objects, Mockups and Ilustration here</h2>
      <div id="logoimg">
        <img id="logo" src={logo} alt="" />
      </div>
    </div>
  );
};
export default LeftComponent;
