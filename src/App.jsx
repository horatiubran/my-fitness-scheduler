import {BrowserRouter as Router} from 'react-router-dom';
import {Navbar} from "./components/nav-bar/nav-bar.jsx"
import {AppRoutes} from "./components/nav-bar/app-routes.jsx";
import {Header} from "./components/header/index.jsx";
import {AppContainer} from "./components/container/index.jsx";

const App = () => {
    return (
        <Router>
            <AppContainer>
                <Header/>
                <Navbar/>
                <AppRoutes/>
            </AppContainer>
        </Router>

    );
};

export default App;
