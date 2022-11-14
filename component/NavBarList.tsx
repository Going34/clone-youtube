import React from 'react';
const NavBarList = (props: any) => {
  console.log('props====', props);
  const { menuName, Icon } = props;
  console.log(menuName);
  return (
    <div>
      <li>
        <a className="links_name" href="#home">
          {Icon} {menuName}
        </a>
      </li>
    </div>
  );
};

export default NavBarList;
