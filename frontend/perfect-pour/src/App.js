import './styles/main.scss'
import Page from './components/reusable/Page'
import LoginRegister from './components/LoginRegister'

function App() {
  const navList = ["home", "history", "calculations"]
  return (
    <div className="app">
      <LoginRegister />
    </div>
  );
}

export default App;
