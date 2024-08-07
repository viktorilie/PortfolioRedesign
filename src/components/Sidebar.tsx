import App from "../App";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="d-flex justify-content-center align-items-center ">
        <img
          className="sidebarimage shadow-lg"
          src="../public/images/IMG_0013.JPG"
        />
      </div>
      <div className="sidenavlinks">
        <div className="list-group  list-none">
          <a
            href="#"
            className="list-group-item list-group-item-action list-group-item-secondary">
            About me
          </a>
          <a className="list-group-item list-group-item-action list-group-item-secondary">
            Skills
          </a>
          <a className="list-group-item list-group-item-action list-group-item-secondary">
            Portflio
          </a>
          <a className="list-group-item list-group-item-action list-group-item-secondary">
            Resume
          </a>
          <a className="list-group-item list-group-item-action list-group-item-secondary">
            Contact me
          </a>
        </div>
      </div>
      <div className="icon-links"></div>
    </>
  );
};

export default Sidebar;
