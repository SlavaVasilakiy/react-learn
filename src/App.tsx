import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Counter} from './components/Counter';
import './styles/index.scss';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';

const App = () => {
  return (
    <div className="app">
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPageAsync/>}></Route>
          <Route path={'/'} element={<MainPageAsync/>}></Route>
        </Routes>
      </Suspense>
      <Counter></Counter>
    </div>
  );
};

export default App;
