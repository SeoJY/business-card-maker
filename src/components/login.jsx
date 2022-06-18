import { React, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from './header';
import Footer from './footer';

const Login = ({authService}) => {
  const navigate = useNavigate();
  // 로그인이 되면 maker 화면으로 전환
  const goToMaker = (userId) => {
    navigate('/maker', {
      state: {
        id: userId
      }
    });
  }

  const onLogin = event =>  {
    authService
      .login(event.currentTarget.textContent) // 로그인 팝업창 띄움
      .then(data => goToMaker(data.user.uid)); // 사용자의 uid를 받아서 goToMaker로 전달/실행
  }

  // 로그인이 된 상태이면 바로 maker로 전환
  useEffect(() => {
    authService
      .onAuthChange(user => {
        user && goToMaker(user.uid);
      })
  })

  return (
    <section className="login-wrap">
      <Header />
      <div className="login-content">
        <h2 className="login-title">Login</h2>
        <ul className="login-lst">
          <li><button type="button" onClick={onLogin} className="btn btn-white btn-medium btn-full">Google</button></li>
          <li><button type="button" onClick={onLogin} className="btn btn-white btn-medium btn-full">Github</button></li>
        </ul>
      </div>
      <Footer />
    </section>
  )
};

export default Login;