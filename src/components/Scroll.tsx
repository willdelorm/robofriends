import React from 'react';

type ScrollProps = {
  children: JSX.Element
}

const Scroll = (props: ScrollProps) => {
  return (
    <div style={{ overflow: 'scroll', border: '5px solid black', height: '800px'}}>
      {props.children}
    </div>
  );
};

export default Scroll;