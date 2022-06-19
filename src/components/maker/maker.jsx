import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import MakerEditor from './makerEditor';
import MakerPreview from './makerPreview';

const Maker = ({ FileInput, authService }) => {
  // 배열을 쭉 검색하는 것보다는 object 방식으로 key를 찾아서 업데이트하는 방식이 더 빠름
  const [cards, setCards] = useState(
    {
      1: {
        id: '1',
        name: '서재영',
        company: 'Hivelab',
        title: 'Web Developer',
        email: 'email@email.com',
        message: 'Not all those who wander are lost.',
        theme: 'Dark',
        fileName: null,
        fileURL: null
      },
      2: {
        id: '2',
        name: '죠르디',
        company: 'NINIZ',
        title: 'Freeter',
        email: 'jordi@email.com',
        message: '니니니 니니니니니',
        theme: 'Jordi',
        fileName: null,
        fileURL: null
      },
      3: {
        id: '3',
        name: '농담곰',
        company: 'Nagano\'s Market',
        title: 'Kuma',
        email: 'kuma@email.com',
        message: '맛있어',
        theme: 'Light',
        fileName: null,
        fileURL: null
      }
    }
  )
  const navigate = useNavigate();
  const onLogout = () => {
    authService.logout();
  }

  useEffect(() => {
    authService
      .onAuthChange(user => {
        if(!user) {
          navigate('/');
        }
      })
  })

  const createOrUpdateCard = (card) => {
    // 일반적인 기존 방법
    // const updated = {...cards};
    // updated[card.id] = card;
    // setCards(updated);

    // 개선: 
    // state가 오래되었을지도 모르는 상황. 이전 상태값을 받아서 새로운 값으로 만드는 콜백함수로도 이용 가능
    // setCards를 호출할 시점의 상태(cards)를 그대로 복사해와서 card의 key를 이용해서 업데이트
    // 기존의 아이디가 object에 없었다면 새로운 것을 추가함 => addCard 함수와 병합 사용 가능!
    setCards(cards => {
      const updated = {...cards};
      updated[card.id] = card;
      return updated;
    });
  }

  const deleteCard = (card) => {
    setCards(cards => {
      const updated = {...cards};
      delete updated[card.id];
      return updated;
    });
  }

  return (
    <section className="maker-wrap">
      <Header onLogout={onLogout} />
      <div className="maker-content">
        <MakerEditor 
          FileInput={FileInput} 
          cards={cards} 
          addCard={createOrUpdateCard} 
          updateCard={createOrUpdateCard} 
          deleteCard={deleteCard}
        />
        <MakerPreview cards={cards} />
      </div>
      <Footer />
    </section>
  )
};

export default Maker;