// import logo from './logo.svg';
import './App.css';
import Img02 from './Img02.jpg';
import VideoPlayer from 'react-video-js-player';
import video from './video.mp4';
import reactimg from './reactimg.png'
function App() {
  
  
  return (
  <div className='App' style={{border:"solid 1 black", maxWidth:'100vw'}}>
      <h1 className='title red'>Feten Stambouli</h1>

<br/>

<img className='justifyimg' src={Img02} alt='img02'/>

<br/>

<img src="./img01.jpg" alt='img01'/>
<div className='videojs'>

<VideoPlayer src={video} width="320" height="240" controls={true} poster={reactimg}/>
  </div>
  </div>
  )
}
export default App
