
import EmblaCarousel from "./Components/EmblaCarousel";

function MainContent() {
  return (
    <div className="main-content">
      <div className="content">
        <div className="welcome">
        <h1 style={{paddingBottom: "30px"}}>Hi, I'm Saachi :)</h1>
        <h3>I'm a second-year computer science student at the University of Georiga.</h3>
        <h3>Want to know more?</h3>
        <h3>Scroll down!</h3>
        </div>
        <div className="about-page">
          <div style={{display:"flex"}}> <h2>What I can do  </h2><div style={{marginTop: "85px", marginLeft:"15px", fontSize:"25px",}}>(or at least try to do)</div></div>
          <EmblaCarousel />
          <h2>A little about me...</h2>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
