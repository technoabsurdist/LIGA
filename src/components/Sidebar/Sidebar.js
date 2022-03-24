import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectUser } from "../../features/userSlice";
import './Sidebar.css'

export default function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className="sidebar__hash">🏢</span>
            <p>{topic}</p>
        </div>
    ) 

    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://media-exp1.licdn.com/dms/image/C5616AQGpDv5aibcW1w/profile-displaybackgroundimage-shrink_350_1400/0/1552852295802?e=1616025600&v=beta&t=N5r1gZG89SHBYq__9Zcsnk1qVQuyE11Em-ahSpWz78o" alt="background" />
                <Avatar src={user.photoUrl} className="sidebar__avatar"> 
                {user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            
            <div className="sidebar__bottom">
                <h4>Trending RSOs</h4>
                {recentItem('Simon')}
                {recentItem('Tim')}
                {recentItem('Elliot')}
                {recentItem('Lex')}
                {recentItem('Frank')}
                {recentItem('Trump')}
                {recentItem('Steve')}
                {recentItem('Cristiano')}
                {recentItem('Messi')}
                {recentItem('Pele')}
                {recentItem('Sergei')}
                {recentItem('Zuckerberg')}
                {recentItem('Potter')}
            </div>
        </div>
    )
}