
import './App.css';
import { YouTubeData } from './YoutubeData';
console.log(YouTubeData);
function App() {
  return (
    <div className="youtube-list">

      {YouTubeData.map((item, index) => {
        let newClass ="";
        if(index === 1) newClass ="abc";

        // const newClass = index === 1 ? "abc" : "";
        return (

        <YoutubeItem
        key ={item.id}
        image={item.image || item.avatar}
        avatar = {item.avatar || item.image}
        author = {item.author}
        title = {item.title}
        className={newClass}
        ></YoutubeItem>
        );
        })}


      

    </div>
  );
}



function YoutubeItem(props) {
  console.log(props);
  return (

    <div className={'youtube-item ${props.classname}'}>

      <div className="youtube-image">

        <img

          src={props.image}

          alt=""
        />
      </div>
      <div className="youtube-footer">
        <img
          src={props.avatar}
          alt=""
          className="youtube-avatar"
        />
        <div className="youtube info">
          <h3 className="youtube-title">{props.title || 'This is a title' }</h3>
          <h4 className="youtube-author">{props.author  || 'This is a author name' }</h4>
        </div>
      </div>


    </div>
  );
}

export default App;


