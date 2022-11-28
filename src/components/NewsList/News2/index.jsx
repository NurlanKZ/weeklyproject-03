import photo from "../../../assets/avatar.png"
import "./style.css"

function News2() {
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
            <p className="python">Recently, I’ve been automating tasks more than often due to my lack of time. Thanks to thatI have 5 new projects that I classified as beginner, intermediate, and advanced.
You’ll find links to the full scripts and tutorials to solve each project. Also, I’m leaving a
challenge to each of them to test your Python skills. To make things easier, I already created a template for a cover letter. Here’s how the template we’ll use looks...</p>
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
  
  export default News2;
  