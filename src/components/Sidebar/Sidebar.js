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
                {recentItem('Resume: ')}
                {recentItem('Interests: ')}
                {recentItem('LinkedIn: ')}
                {recentItem('Twitter: ')}
                {recentItem('Github: ')}
                {recentItem('Major(s)/Minor: ')}
            </div>
        </div>
    )
}