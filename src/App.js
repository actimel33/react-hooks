import React                          from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home                           from './pages/Home';
import About                          from './pages/About';
import Profiler                       from './pages/Profile';
import Navbar                         from './components/Navbar';
import Alert                          from './components/Alert';
import AlertState                     from './context/alert/AlertState';
import {GithubState}                  from './context/github/GithubState';

function App() {
    return (
        <GithubState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert alert={{type: null, text: 'Test Alert'}}/>
                        <Switch>
                            <Route path='/' exact component={Home}/>
                            <Route path='/about' component={About}/>
                            <Route path='/profile/:name' component={Profiler}/>
                        </Switch>
                    </div>

                </BrowserRouter>
            </AlertState>
        </GithubState>
    );
}

export default App;
