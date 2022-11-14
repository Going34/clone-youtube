import RoundComponent from '../component/RoundComponent';
import React from 'react';
import {  Catogary } from '../Array/allArrayList';
const TopRoundMenuBar = () => {
  return (
    <div>
         <div className="re">
        {Catogary.map((item) => {
          return (
            <div key={item}>
              <RoundComponent catogary={item} />
            </div>
          );
        })}
      </div>
    </div>
  )
}
export default TopRoundMenuBar