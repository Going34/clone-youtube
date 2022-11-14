import './styles.css';
import NavBar from './page/NavBar';
import React, {memo} from 'react';
import SideBar from './page/sideBar';
import HomeVideoPage from './page/HomeVideoPage';
 function App() {
  return (
    <div className="App">
      <SideBar />
      <HomeVideoPage />
    </div>
  );
}

export default memo(App)