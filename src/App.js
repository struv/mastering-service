
import './App.css';
import AudioPlayer from './components/audio.js';

function App() {
  return (
    
    <div className="App">
      <script src="https://kit.fontawesome.com/0123952d7e.js" crossorigin="anonymous"></script>
      <div class="masthead">
        <img src="https://files.scatter.art/remilia-ico/milady-cult-masthead.png" alt="head"/>
      </div>
      <div class="box">
        <h2>GIVE YOUR MUSIC NEW LIFE</h2>
        <div class="inner-pad">
          <p>Master your music with Milady Mastering. Our legendary gear and world-class engineers will improve the
             sound quality, elevate the listening experience and help you bring your musical ideas into the world.</p>
        </div>
        <AudioPlayer src="./assets/fireSampl2.mp3" />
      </div>
      <div class="icon-list">
        <div class="icon-box">
          <i class="fa-solid fa-user fa-2x"></i>
          <p>Individualized Mastering for your Song</p>
        </div>
        <div class="icon-box">
          <i class="fa-solid fa-music fa-2x"></i>
          <p>Industry Standard Mastering</p>
        </div>
        <div class="icon-box">
          <i class="fa-solid fa-sliders fa-2x"></i>
          <p>As many revisions as you need</p>
        </div>
        <div class="icon-box">
          <i class="fa-solid fa-eye-slash fa-2x"></i>
          <p>Your sensitive music data is safe</p>
        </div>
      </div>
      

    </div>
  );
}

export default App;
