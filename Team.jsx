import './App.css';
import React from 'react';
import image from './assets/image.png';
import image_3 from './assets/image_3.png';
import image_4 from './assets/image_4.png';
import image_5 from './assets/image_5.png';
import image_6 from './assets/image_6.png';
import image_7 from './assets/image_7.png';
function Team() {
  return (
    <article className="App-article_5">
      <h1>
        <span className="problem">The Team</span>
      </h1>

      <div className="team-list">
        <div className="team-item">
          <img src={image}></img>
          <p>
            <span className="name">Richard Hendricks</span>
            <br></br>
            <i>Founder & CEO</i>
          </p>
        </div>
        <div className="team-item">
          <img src={image_7}></img>
          <p>
            <span className="name"> Dinesh Chugtai</span>{' '}
            <br></br>
            <i> Senior Programmer</i>
          </p>
        </div>
        <div className="team-item">
          <img src={image_3}></img>
          <p>
            <span className="name"> Bertram Gilfoyle</span>{' '}
            <br></br>
            <i> Chief Systems Architect</i>
          </p>
        </div>
        <div className="team-item">
          <img src={image_5}></img>
          <p>
            <span className="name"> RJared Dunn</span>{' '}
            <br></br>
            <i> Chief Operating Officer</i>
          </p>
        </div>
        <div className="team-item">
          <img src={image_4}></img>
          <p>
            <span className="name"> Monica Hall</span>{' '}
            <br></br>
            <i>Chief Financial Officer</i>
          </p>
        </div>
        <div className="team-item">
          <img src={image_6}></img>
          <p>
            <span className="name"> Nelson Bighetti</span>{' '}
            <br></br>
            <i> Majority Investor</i>
          </p>
        </div>
      </div>
    </article>
  );
}

export default Team;
