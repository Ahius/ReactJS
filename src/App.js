
import './App.css';

function App() {
  return (
    <div className="youtube-list">
      <YoutubeItem  image="https://i.pinimg.com/564x/cf/19/a9/cf19a9ffe6c7b98ef0bef5532710ad0a.jpg"
      avatar="https://i.pinimg.com/564x/d7/27/82/d727820bed8d12f55429743579708619.jpg"
      author = "Doan Hieu"
      title = "Hi! I love it!"
      
      />
      <YoutubeItem  image="https://i.pinimg.com/564x/a3/8d/fe/a38dfe252220b74a6a2eddabacaf80e2.jpg"
      avatar="https://i.pinimg.com/564x/9f/81/f0/9f81f0fb03ac511fc7003420fb0f1d85.jpg"
      author = "Doan Hieu"
      title = "Hi! I fall in love!"
      
      />
      <YoutubeItem  image="https://i.pinimg.com/564x/08/62/e0/0862e06f65aec9818f3e96dfeee4a157.jpg"
      avatar="https://i.pinimg.com/564x/1e/fc/10/1efc10cf5299a2d94f554021c2a45725.jpg"
      author = "Doan Hieu"
      title = "Hi! I am so cute!"
      
      />
      <YoutubeItem  image="https://i.pinimg.com/564x/c4/be/33/c4be335fca52ffe2ecd465f3ee02088f.jpg"
      avatar="https://i.pinimg.com/564x/75/61/36/7561367f3fdbb70de2c208bcbb56da97.jpg"
      author = "Doan Hieu"
      title = "Hi! I love sunny!"
      
      />

    </div>
  );
}



function YoutubeItem(props) {
  console.log(props);
  return (

    <div className="youtube-item">

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


