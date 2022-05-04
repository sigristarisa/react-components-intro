import MainButtons from "./MainButtons";

const Main = () => {
  const mainLogo = (
    <img
      className="logo"
      src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
      alt="Google logo"
    />
  );
  const searchBar = <input className="search-bar" type="search" />;

  return (
    <main>
      {mainLogo}
      {searchBar}
      <MainButtons />
    </main>
  );
};

export default Main;
