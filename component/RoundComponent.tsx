import React from 'react'
interface Catogary {
  catogary: string;
}
const RoundComponent = (props: Catogary) => {
  const { catogary } = props;
  return (
    <div>
      <div className="round">{catogary}</div>
    </div>
  );
};

export default RoundComponent;
