import React, {useEffect} from 'react';
import {useSearchParams} from 'react-dom';
import './App.css';
import './index.css'
import Header from './Components/Header';
import Footer from './Components/footer';
function App() {
  const [answers, setAnswers] = React.useState([]);
  let videoId = '';
  const search = window.location.search;
  const params = new URLSearchParams(search);
  videoId = params.get('vid_id');
  useEffect(() => {
    document.body.addEventListener('click', handleClick );

    return function cleanup() {
      window.removeEventListener('click', handleClick );
    } 
  },[]);
  let handleClick = (e) => {
    let clickedEl = e?.composedPath()[0];
    if (clickedEl.nodeName === 'SPAN' && clickedEl?.parentNode?.type === 'button'){
      setAnswers((prevState => {
        return [...prevState, clickedEl.innerText];
      }));
    }
    
  }
  return (
    <div className="App">
      <Header/>   
      <div className="video-container">
        <div className="voomly-embed player-styles" 
          data-id={videoId} 
          data-ratio="0.600000" 
          data-type="f" 
          data-skin-color="#008EFF" 
          data-shadow="">
            
        </div>
      </div>
      {answers.length > 0 && <div className='current-selections'>
        <ul>
          {answers.map(ans => <li>{ans}</li>)}
        </ul>
      </div>}
      <Footer/>
    </div>
  );
}

export default App;
