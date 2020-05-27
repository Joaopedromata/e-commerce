import React from 'react'
import { BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './pages/Home'
import Product from './pages/Product'


function Router(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path={"/"} component={Product} />
            </Switch>
        </BrowserRouter>
    )
}


export default Router
