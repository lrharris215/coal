import { Route, Switch, Link} from 'react-router-dom'
import React from 'react'

//import authroute&protectedRoute

const App = () => {
    return (
    <div>
        <header>
            <Link to='/' className="header-link">
                <h2>Coal</h2>
            </Link>
        </header>
    </div>
    )
}

export default App;