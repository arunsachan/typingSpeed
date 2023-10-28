import React from 'react'
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom'
import TypingSpeedTest from './Components/TypingSpeedTest'
import ScoreSummary from './Components/ScoreSummary'

const App = () => {
    return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={TypingSpeedTest} />
          <Route path="/score-summary" component={ScoreSummary} />
        </Switch>
      </div>
    </Router>
  );
}

export default App