import React from 'react';
import CardAddForm from './cardAddForm';
import CardEditForm from './cardEditForm';

const MakerEditor = ({ cards, addCard }) => {
  return (
    <div className="maker-editor">
      <h2 className="maker-title">Card Editor</h2>
      <ul className="maker-editor-lst">
        {
          cards.map((card) => (
            <CardEditForm card={card} key={card.id} />
          ))
        }
        <CardAddForm onAdd={addCard} />
      </ul>
    </div>
  )
};

export default MakerEditor;