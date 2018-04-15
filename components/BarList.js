import React from 'react';

const buildBarList = (props) => {
    return (
        <div className="barItem" >
            <h2>{props.eventName}</h2>
            <h3>{props.eventCost}</h3>
            <p>{props.name}</p>
    <style jsx>{`
      .barItem {
        border: 1px solid #000;
        text-align: center;
        width: 40%;
        display: inline-grid;
        margin: 5% 0 0 5%;
      }
      .barItem:hover {
          cursor: pointer;
          background-color: #eee;
      }
    `}</style>
        </div>
    );
}

  export default buildBarList;