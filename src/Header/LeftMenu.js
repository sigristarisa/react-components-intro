const LeftMenu = () => {
  const aboutBtn = "About";
  const storeBtn = "Store";
  return (
    <nav className="left-menu">
      <ul>
        <li>{aboutBtn}</li>
        <li>{storeBtn}</li>
      </ul>
    </nav>
  );
};

export default LeftMenu;
