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
                <Avatar src={user.photoUrl} className="sidebar__avatar"> 
                {user.email[0].toUpperCase()}</Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>
            
            <div className="sidebar__bottom">
                <h4>Profile Information</h4>
                {/* TODO: Add resume information */}
                {user.displayResume && recentItem('Resume: ')}
                {user.displayRSOList && recentItem('RSOs: ' + user.displayRSOList)}
                {user.displayMajors && recentItem('Major(s)/Minor(s):  + user.displayMajors')}
                {user.displayInterests && recentItem('Interests: ') + user.displayInterests}
                {user.displayLinkedinURL && recentItem('Linkedin: ' + user.displayLinkedinURL)}
                {user.displayTwitterURL && recentItem('Twitter: ' + user.displayTwitterURL)} 
                {user.displayGhURL && recentItem('Github: ' + user.displayGhURL)}
            </div>
        </div>
    )
}
