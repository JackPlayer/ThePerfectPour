import './styles/main.scss'
import Page from './components/reusable/Page'
import LoginRegister from './components/LoginRegister'
import History from './components/History'

function App() {
  const navList = ["home", "history", "calculations"]
  return (
    <div className="app">
      <History navList={navList}/>
    </div>
  );
}

export default App;
