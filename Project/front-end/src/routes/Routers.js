import About from '../pages/About';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Signup from '../pages/Signup';
import Contact from '../pages/Contact';
import Doctor from '../pages/Doctor';
import { Routes, Route } from 'react-router-dom';
import Faq from '../pages/Faq';
import Reviews from '../pages/Reviews';
import UserProfile from '../pages/UserProfile'; // Import UserProfile component

const Routers = () => {
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/doctor' element={<Doctor/>}/>
            <Route path='/faq' element={<Faq/>}/>
            <Route path='/reviews' element={<Reviews/>}/>
            <Route path='/userprofile' element={<UserProfile/>}/> {/* Add this line for UserProfile */}
        </Routes>
    );
}

export default Routers;
