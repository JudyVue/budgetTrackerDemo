import './style/main.scss';
import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import AboutContainer from './component/about-container/index';
import DashboardContainer from './component/dashboard-container/index';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      budget: 400,
      expenses: [],
    }
    this.getApp = this.getApp.bind(this);
  }

  //this lifts state and allows us to use it in other places of our application at the app level
  getApp() {
    return { 
      state: this.state,
      setState: this.setState.bind(this),
    };
  }

  componentDidUpdate() {
    console.log(this.state, 'STATE UPDATED');
  }

  render() {
    console.log(this.state)
    return (
      <main>
        <BrowserRouter>
          <section>
            <Route
              exact path="/about"
              component={AboutContainer}
            />
            <Route 
              exact path="/dashboard"
              component={() => <DashboardContainer app={this.getApp()} />}
            />
          </section>
        </BrowserRouter>
      </main>
    )
  }
}

ReactDom.render(<App />, document.getElementById('root'));