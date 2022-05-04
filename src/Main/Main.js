import MainButtons from "./MainButtons";

const Main = () => {
  return (
    <main>
      <img
        className="logo"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
        alt="Google logo"
      />
      <input className="search-bar" type="search" />
      <MainButtons />
    </main>
  );
};

export default Main;
