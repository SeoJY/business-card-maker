import React from 'react';
import CardAddForm from './cardAddForm';
import CardEditForm from './cardEditForm';

const MakerEditor = ({ FileInput, cards, addCard, updateCard, deleteCard }) => {
  return (
    <div className="maker-editor">
      <h2 className="maker-title">Card Editor</h2>
      <ul className="maker-editor-lst">
        {
          Object.keys(cards).map(key => (
            <CardEditForm
              key={key}
              FileInput={FileInput} 
              card={cards[key]}
              updateCard={updateCard}
              deleteCard={deleteCard}
            />
          ))
        }
        <CardAddForm
          FileInput={FileInput} 
          onAdd={addCard}
        />
      </ul>
    </div>
  )
};

export default MakerEditor;