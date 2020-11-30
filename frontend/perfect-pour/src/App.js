import './styles/main.scss'
import LoginRegister from './components/LoginRegister'
import History from './components/History'
import Home from './components/Home'
import Calculations from './components/Calculations'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom' 

function App() {
  const navList = ["home", "history", "calculations"]

  const renderMainApp = () => {
    return (
      <Router >
        <div className="app">
          <Switch>
            <Route path="/home">
              <Home active="home" navList={navList} />
            </Route>

            <Route path="/history">
              <History active="history" navList={navList} />
            </Route>

            <Route path="/calculations">
              <Calculations active="calculations" navList={navList} />
            </Route>
            <Route render={() => <Redirect to="/home" />} />
          </Switch>
        </div>
      </Router>
    )
  }
  return (
    renderMainApp()  
  )
}

export default App;
