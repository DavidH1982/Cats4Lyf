// import './App.js'
import './App.css'
import {BrowserRouter as Router, Switch, Link, Route} from "react-router-dom"
import App from './App.js'
import HomePage from './home'
import Branch from './branch'
import About from './about'
import Menu from './menu'
import Basket from './basket'
import Login from './login'

const CatsHome = () => {

    return (
        <div>
            <Router>
                <nav className='navBar'>
                    <div className="navLinkBox">
                        <Link to="/About" className='navLink' >About Us</Link>
                        <Link to="/Branch" className='navLink' >Branches</Link>
                        <Link to="/App.js" className='navLink' >Shop Now</Link>
                    </div>
                    <div className='nameBox'>
                        <Link to="/" className='companyName'>CATS4LYF </Link>
                    </div>
                    <div className='customerBox'>
                        <Link to="/LogIn" className='customerLink' >Log In</Link>
                        <Link to="/Basket" className='customerLink' >Basket</Link>
                        <Link to="/Menu" className='customerLink burgerMenu' ></Link>
                    </div>
                </nav>

                <Switch>
                    <Route exact path="/">
                        <HomePage />
                        {/* <Link to="/sub-page-1">Sub-Page-1</Link>
                        <Link to="/sub-page-2">Sub-Page-2</Link>
                        <Switch>
                            <Route exact path="/sub-page-1">
                                <h3>Sub Page 1</h3>
                            </Route>
                            <Route exact path="/sub-page-2">
                                <h3>Sub Page 2</h3>
                            </Route>
                        </Switch> */}
                    </Route>
                    <Route exact path="/App.js">
                        <App />
                    </Route>
                    <Route exact path="/Branch">
                        <Branch />
                    </Route>
                    <Route exact path="/About">
                        <About />
                    </Route>
                    <Route exact path="/Menu">
                        <Menu />
                    </Route>
                    <Route exact path="/Basket">
                        <Basket />
                    </Route>
                    <Route exact path="/LogIn">
                        <Login />
                    </Route>
                </Switch>
            </Router>
        </div>
    )
}

export default CatsHome