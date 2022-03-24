import React, { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Header from '../../components/Header/Header';
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";
import { login, logout, selectUser } from '../../features/userSlice';
import { auth } from '../../firebase';
import Login from "../../components/Login/Login";
// import { auth } from './firebase';
import Widgets from "../../components/Widgets/Widgets";

function Home() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser); 

    const logoutOfApp = ()=>{
        dispatch(logout())
        auth.signOut();

    };
    // Authenticate user with back-end
    useEffect(() => {
    auth.onAuthStateChanged((userAuth) => {
        if (userAuth) {
        dispatch(
            login({
            email: userAuth.email,
            uid: userAuth.uid,
            displayName: userAuth.displayName,
            photoUrl: userAuth.photoURL,
            })
        );
        }
        else {
        dispatch(logout())
        }
    });
    }, [dispatch])

    return (
    <div>
    {!user ? <Login /> : (
        <div className ="app">
            <Header />
            <div className="app__body">
            <Sidebar />
            {/* <Feed /> */}
            <Widgets/>
            </div>
        </div>
        )}
    </div> 
    )
}

export default Home