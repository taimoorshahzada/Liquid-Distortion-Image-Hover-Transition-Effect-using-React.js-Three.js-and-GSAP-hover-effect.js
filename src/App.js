import react, {useEffect} from 'react';
import './App.css';
import hoverEffect from 'hover-effect';
import image from './image.jpg';
import image2 from './image2.jpg'
import overlay from './overlay.png'
function App() {
  useEffect(()=> {
    var image_animate = new hoverEffect({
      parent: document.querySelector(".item-image"),
      intensity: .3,
      image1: image,
      image2: image2,
      displacementImage: overlay
    })
  })
  return (
    <div className="App">
      <div className="container">
        <div className="item">
          <div className="item-header">
            <div className="item-header-heading">Mouthwash</div>
            <div className="item-header-heading2">02/03</div>
          </div>
          <div className="item-image"></div>
          <div className="item-footer">
            <div className="item-footer-quote">Being so stupid!</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
