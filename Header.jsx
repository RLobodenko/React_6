import Vector from './assets/Vector.png';
import Vector1 from './assets/Vector1.png';
import './App.css';

function Header() {
  return (
    <header className="App-header">
      <div className="container">
        <span className="logo">
          <span className="image_1">
            <img src={Vector}></img>
          </span>
          <span className="image_1">
            <img src={Vector1}></img>
          </span>
        </span>
        <span className="links">
          <span>the problem </span>
          <p> | </p>
          <p> PiedPiperCoin </p>
          <p> | </p>
          <p> the team</p>
        </span>
      </div>
    </header>
  );
}

export default Header;
