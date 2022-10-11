import Companies from "./Companies";
import Features from "./Features";
import Footer from "./Footer";
import Help from "./Help";
import MainSection from "./MainSection";
import Opportunities from "./Opportunities";
import Platforms from "./Platforms";
import Teams from "./Teams";

const HomePage: React.FC = () => {
  console.log("This is not working...");
  return (
    <>
      <div id="q-background-cover" />
      <a
        href="#"
        tabIndex={-1}
        aria-hidden="true"
        rel="nofollow"
        style={{
          opacity: "0.01",
          position: "absolute",
          zIndex: -999,
          width: "54px",
          height: "22px",
        }}
      >
        ___
      </a>
      <div
        style={{
          opacity: "0.01",
          position: "absolute",
          zIndex: -1000,
          width: "54px",
          height: "22px",
        }}
      />
      <div className="loader" style={{ display: "none" }} />
      <MainSection />
      <Companies />
      <Opportunities />
      <Features />
      <Platforms />
      <Teams />
      <Help />
      <Footer />
    </>
  );
};

export default HomePage;
