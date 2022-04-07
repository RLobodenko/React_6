import React from 'react';
import './App.css';
import PPCLogo from './assets/PPCLogo.png';

function Introduction() {
  return (
    <article className="App-article_4">
      <div className="container">
        <h1>
          <span className="problem">
            Introducing PiedPiperCoin
          </span>
        </h1>

        <img src={PPCLogo}></img>

        <span className="problem_text">
          Pied Piper's new internet is built for users, by
          users. <br /> You supply the storage, compute, and
          networking resources that <br></br> power our
          entire decentralized web.
        </span>
        <br></br>
        <br></br>
        <p className="problem_text">
          Now there's a way to give credit where credit is
          due. Compute credit, that is! <br></br> The more
          you share your device resources, the more
          PiedPiperCoin you <br></br>
          receive. <br></br> <br></br>Whether you're a
          developer with an app ready for market, or just an
          Average <br></br> Joe with a smartphone you'll
          love all you can do with PiedPiperCoin.
        </p>
      </div>
    </article>
  );
}

export default Introduction;
