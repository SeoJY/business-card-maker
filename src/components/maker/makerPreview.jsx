import React from 'react';
import Card from './card';

const MakerPreview = ({ cards }) => {
  return (
    <div className="maker-preview">
      <h2 className="maker-title">Card Preview</h2>
      <ul className="maker-preview-lst">
        {
          Object.keys(cards).map(key => (
            <Card
              key={key}
              card={cards[key]}
            />
          ))
        }
      </ul>
    </div>
  )
};

export default MakerPreview;