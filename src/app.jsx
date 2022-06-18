import Login from "./components/login/login";

function App({authService}) {
  return (
    <div className="wrap">
      <Login authService={authService} />
    </div>
  );
}

export default App;
