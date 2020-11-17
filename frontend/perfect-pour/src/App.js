import './styles/main.scss'
import Header from './components/Reusable/Header'

function App() {
  const navList = ["home", "history", "calculations"]
  return (
    <div className="app">
      <Header navList={navList}/>
    </div>
  );
}

export default App;
