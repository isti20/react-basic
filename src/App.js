import UserClass from "./components/UserClass";
import UserFunctional from "./components/UserFunctional";
import './App.css';

function App() {
  const name = "Ngoding Channel";
  const email = "ngoding@gmail.com";
  const pengikut = 10000;

  return (
    <div className="App">
      <header className="App-header">
        <UserFunctional channel="Coding Channel" email="coding@gmail.com" />
        <UserClass
          name="ReactJS Channel"
          email="reactjs@gmail.com"
          subscriber={5000}
        />
        <UserClass name={name} email={email} subscriber={pengikut} />
      </header>
    </div>
  );
}

export default App;
