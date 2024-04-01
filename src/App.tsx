import React, {Suspense} from 'react';
import {Link, Route, Routes} from 'react-router-dom';
import {Counter} from './components/Counter';
import './styles/index.scss';
import {AboutPageAsync} from './pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './pages/MainPage/MainPage.async';
import {useTheme} from './theme/useTheme';


const App = () => {
  
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>THEME</button>
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
