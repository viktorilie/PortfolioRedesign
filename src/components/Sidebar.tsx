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
        <div className="list-group ">
          <ul className="navbar-nav flex-column text-start">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                <i className="fas fa-home fa-fw me-2"></i>About Me
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                <i className="fas fa-home fa-fw me-2"></i>Skills
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                <i className="fas fa-home fa-fw me-2"></i>Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                <i className="fas fa-home fa-fw me-2"></i>Contact me
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="icon-links"></div>
    </>
  );
};

export default Sidebar;
