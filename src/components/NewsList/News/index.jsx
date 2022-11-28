import photo from "../../../assets/avatar.png"
import "./style.css"

function News() {
    return (
      <div className="inter d-flex flex-column gap-4">
        <div className="d-flex flex-row gap-2">
            <img className="avatar" src={photo} alt="avatar"/>
            <p>Authors name</p>
            <p className="opacity50">in</p>
            <p>Topics name</p>
            <p>·</p>
            <p className="opacity50">7 july</p>
        </div>
        <div className="mid">
            <p className="tips">7 Practical CSS Tips</p>
            <p className="python">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
        </div>
        <div className="d-flex flex-row justify-content-between">
            <div className="d-flex flex-row gap-2 newsBtn">
                <button>Java Script</button>
                <p>12 min read</p>
                <p>·</p>
                <p>Selected for you</p>
            </div>
            <div className="actions">
                <div className="icon"></div>
                <div className="icon"></div>
                <div className="icon"></div>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default News;
  