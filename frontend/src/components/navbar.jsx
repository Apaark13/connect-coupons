import "./navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src="/assets/logo.png" alt="" />
        <div>
          <div>Connect</div>
          <div>Coupons</div>
        </div>
      </div>
      <div className="nav-main"><input type="text" placeholder="Search" /></div>
      <div className="nav-profile">
        <img src="./assets/user.png" alt="" />
        Dummy</div>
    </div>
  );
};

export default Navbar;
