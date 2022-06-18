import React from 'react';
import Card from './card';

const MakerPreview = ({ cards }) => {
  return (
    <div className="maker-preview">
      <h2 className="maker-title">Card Preview</h2>
      <ul className="maker-preview-lst">
        {
          cards.map((card) => (
            <Card card={card} key={card.id} />
          ))
        }
      </ul>
    </div>
  )
};

export default MakerPreview;