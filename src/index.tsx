import { render } from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import App from './App';

render(
  <BrowserRouter>

      <App/>

  </BrowserRouter>,
  document.querySelector('#root')
);
