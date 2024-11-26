import NavBar from "../components/NavBar";
import Cartas from "../components/contentCard";
import Jumbo from "../components/contentJumbo";
import Footer from "../components/footer";

const HomePage = () => {
  return (
    <>
      <NavBar />
      `{<div class= "container">
      <Jumbo />
      <Cartas />
      </div>}`
      <Footer />
    </>
  );
};

export default HomePage;