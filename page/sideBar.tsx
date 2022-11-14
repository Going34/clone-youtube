import NavBarList from '../component/NavBarList';
import { MenuList1, Catogary, MenuList2 } from '../Array/allArrayList';
import React from 'react';
import TopRoundMenuBar from './topRoundMenuBar'

const sideBar = () => {
  return (
    <div>
      <TopRoundMenuBar />
    <div className="fx">
      <ul>
        {MenuList1.map((list) => {
          const { menuName, Icon } = list;
          return (
            <div key={menuName}>
              <NavBarList menuName={menuName} Icon={Icon} />
            </div>
          );
        })}
        
        <hr />
        {MenuList2.map((list) => {
          const { menuName, Icon } = list;
          return (
            <div key={menuName}>
              <NavBarList menuName={menuName} Icon={Icon} />
            </div>
          );
        })}
      </ul>
      </div>
      </div>
  );
};
export default sideBar;
