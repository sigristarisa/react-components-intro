const MainButtons = () => {
  const searchBtn = <button>Google Search</button>;
  const feelingLuckyBtn = <button>Feeling Lucky</button>;
  return (
    <div className="buttons">
      {searchBtn}
      {feelingLuckyBtn}
    </div>
  );
};

export default MainButtons;
