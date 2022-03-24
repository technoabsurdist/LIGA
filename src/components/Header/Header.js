import React from 'react';
import './Header.css';
import HeaderOption from './HeaderOption'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { useDispatch} from 'react-redux';
import { logout } from '../../features/userSlice';
import { auth } from '../../firebase';


function Header() {

    const dispatch = useDispatch()

    const logoutOfApp = ()=>{
        dispatch(logout())
        auth.signOut();

    };

    return (
        <div className="header">
            <div className="header__left">
                <img
                    src="/assets/images/liga-logos_black.png"
                    alt="liga logo"
                />

                <div className="header__search">
                    <SearchIcon style={{ color: 'black' }}/>
                    <input type="text"  placeholder=""/>
                </div>
            </div>
            
            <div className="header__right">
                <form>
                    <button className="headerButtonHome" onClick={() => navigate('/home')}>HOME</button>
                    <button className="headerButtonNetwork" onClick={() => {}}>PROFILE</button>
                    <button className="headerButtonJobs" onClick={() => {}}>‎‍JOBS</button>
                </form>
            </div>
        </div>
    );
}

export default Header
