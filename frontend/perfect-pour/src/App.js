import './styles/main.scss'
import LoginRegister from './components/LoginRegister'
import History from './components/History'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 

function App() {
  const navList = ["home", "history", "calculations"]

  const renderMainApp = () => {
    return (
      <Router >
        <div className="app">
          <Switch>
            <Route path="/home">
            </Route>

            <Route path="/history">
              <History navList={navList} />
            </Route>

            <Route path="/calculations">
            </Route>

          </Switch>
        </div>
      </Router>
    )
  }
  return (
    { renderMainApp } 
  )
}

export default App;
