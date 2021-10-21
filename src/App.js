import logo from './logo.svg';
import './App.css';
import ProfilePhoto from './Components/Profile/ProfilePhoto';
import FullName from './Components/Profile/FullName';
import Adress from './Components/Profile/Adress';

function App() {
  return (
    <div className="app">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
