import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';

const Login = ({authService}) => {
  const onLogin = event =>  {
    authService.login(event.currentTarget.textContent)
  }
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