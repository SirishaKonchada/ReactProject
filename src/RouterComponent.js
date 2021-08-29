import React from 'react'
import { BrowserRouter as Router,Route,Switch, withRouter } from 'react-router-dom'
import ButtonComponent from './ButtonComponent'
import PostData from './PostData'
import App from './App'

export default class RouterComponent extends React.Component{
    render(){
        return(
            <div>
                <Router>
                <Switch>
                    <Route exact path="/" component={ButtonComponent}/>
                    <Route path="/FormData" component={PostData}/>
                    <Route path="/DisplayData" component={App}/>
                </Switch>
                </Router>
            </div>
        )
    }
}