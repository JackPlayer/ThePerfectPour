import './styles/main.scss'
import Page from './components/reusable/Page'

function App() {
  const navList = ["home", "history", "calculations"]
  return (
    <div className="app">
      <Page navList={navList}>
        
      </Page>
    </div>
  );
}

export default App;
