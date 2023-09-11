import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="logo.svg" alt="" />
        <span>Task Tracker</span>
      </div>
      <div className="icons">
        
        <a href="/"><img src="/home.svg" alt="" className="icon" /></a>
        {/* <img src="/expand.svg" alt="" className="icon" /> */}
      </div>
    </div>
  );
};

export default Navbar;
