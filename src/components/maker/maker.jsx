import { React, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../footer';
import Header from '../header';
import MakerEditor from './makerEditor';
import MakerPreview from './makerPreview';

const Maker = ({ authService }) => {
  const [cards, setCards] = useState([
    {
      id: '1',
      name: '서재영',
      company: 'Hivelab',
      title: 'Web Developer',
      email: 'email@email.com',
      message: 'Not all those who wander are lost.',
      theme: 'Dark',
      fileName: 'jaeyoung',
      fileURL: null
    },
    {
      id: '2',
      name: '죠르디',
      company: 'NINIZ',
      title: 'Freeter',
      email: 'jordi@email.com',
      message: '니니니 니니니니니',
      theme: 'Jordi',
      fileName: 'jordi',
      fileURL: null
    },
    {
      id: '3',
      name: '농담곰',
      company: 'Nagano\'s Market',
      title: 'Kuma',
      email: 'kuma@email.com',
      message: '맛있어',
      theme: 'Light',
      fileName: 'naganokuma',
      fileURL: null
    },
  ])
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

  const addCard = (card) => {
    const updated = [...cards, card];
    setCards(updated);
  }

  return (
    <section className="maker-wrap">
      <Header onLogout={onLogout} />
      <div className="maker-content">
        <MakerEditor cards={cards} addCard={addCard} />
        <MakerPreview cards={cards} />
      </div>
      <Footer />
    </section>
  )
};

export default Maker;