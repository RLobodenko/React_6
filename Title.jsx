import React, { useCallback } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import './App.css';

// useEffect useState используются всегда
// useMemo useCallback используются ситуативно
// useSelector useDispatch используются для redux
function Title() {
  return (
    <article className="App-article_1">
      <div className="container">
        <div className="PiperNet">
        <h1>PiperNet Is Here</h1>
      </div></div>
    </article>
  );
}

export default Title;
