import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import EntryPage from './pages/EntryPage';
import Connexion from './components/Connexion';
import Inscription from './components/Inscription';
import Homepage from './pages/Homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import Contact from './pages/Contact'
import Goldenbook from './pages/Goldenbook'
import Presentation from './pages/Presentation'
import Projects from './pages/Projects'

import {userAuth} from "./utils/apicalls";
import {UserContext} from "./utils/userContext";
import{ useState, useEffect} from 'react'

function App() {
    const [user, setUser] = useState({});


    useEffect(() => {
        userAuth().then((user) => {
            if (user && user["_id"]) {
                setUser(user);
            } else {
                setUser(null);
                localStorage.removeItem('token');

            }
        });
    }, []);


    return (
            <UserContext.Provider value={[user, setUser]}>
                <Router>
                    <Routes>
                        <Route path='/' element={<EntryPage/>}/>
                        <Route path='/homepage' element={<Homepage/>}/>
                        <Route path='/contact' element={<Contact/>}/>
                        <Route path='/goldenbook' element={<Goldenbook/>}/>
                        <Route path='/presentation' element={<Presentation/>}/>
                        <Route path='/projects' element={<Projects/>}/>
                    </Routes>
                </Router>
            </UserContext.Provider> 
        );
}


export default App;
