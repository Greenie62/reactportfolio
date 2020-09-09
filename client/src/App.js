import React, {useEffect} from 'react'
import {BrowserRouter as Router, Route} from "react-router-dom"
import { Navbar, Header } from "./components"
import {Resume, Grocery} from "./pages"
import {GlobalProvider} from "./context/GlobalState"
import "./App.css"

 const App = () => {


    // useEffect(()=>{
    //     fetch('http://localhost:5000/test')
    //     .then(res=>res.json())
    //     .then(res=>{
    //         console.log(res)
    //     })

    // },[])


    return (
        <GlobalProvider>
        <div>
            <Header/>
            <Router>
            <div className="container">
            <Navbar/>

                <Route exact path="/" component={Resume}/>
                <Route exact path="/grocery" component={Grocery}/>

                </div>
            </Router>
        </div>
        </GlobalProvider>
    )
}


export default App
