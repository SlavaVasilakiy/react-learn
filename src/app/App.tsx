import {useTheme} from 'app/providers/ThemeProvider';
import {AboutPage} from 'pages/AboutPage';
import {MainPage} from 'pages/MainPage';
import React, {Suspense} from 'react';
import './styles/index.scss';
import {Link, Route, Routes} from 'react-router-dom';
import {classNames} from 'shared/lib/classNames/classNames';


const App = () => {
  const {theme, toggleTheme} = useTheme();
  
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>THEME</button>
      <Link to={'/'}>Main</Link>
      <Link to={'/about'}>About</Link>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path={'/about'} element={<AboutPage/>}></Route>
          <Route path={'/'} element={<MainPage/>}></Route>
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
