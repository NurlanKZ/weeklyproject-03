import News from "./News";
import News2 from "./News2";
import img1 from "../../assets/laptop.png"
import img2 from "../../assets/art.png"
import img3 from "../../assets/yoga.png"
import "./style.css"

function NewsList() {
    return (
      <div className="main">
        <div className="d-flex flex-row newslist">
            <div>
                <News />
            </div>
            <img className="sideImg" src={img1} alt="laptop"/>
        </div>
        <div className="d-flex flex-row newslist">
            <div>
                <News2 />
            </div>
            <img className="sideImg" src={img2} alt="art"/>
        </div>
        <div className="d-flex flex-row newslist">
            <div>
                <News2 />
            </div>
            <img className="sideImg" src={img3} alt="yoga"/>
        </div>
      </div>
    );
  }
  
  export default NewsList;
  