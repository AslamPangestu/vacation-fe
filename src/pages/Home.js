import Header from "components/Header";
import Hero from "containers/Home/Hero";

const statistic = {
  travelers: 80490,
  cities: 662,
  treasures: 1492,
};

function Home(props) {
  return (
    <>
      <Header {...props} />
      <Hero {...statistic} />
    </>
  );
}

export default Home;
