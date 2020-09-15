import React from 'react';
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import FlagIcon from '@material-ui/icons/Flag';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions';
import StorefrontOutlinedIcon from '@material-ui/icons/StorefrontOutlined';
import SupervisedUserCircleIcon from '@material-ui/icons/SupervisedUserCircle';
import {Avatar, IconButton} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import ForumIcon from '@material-ui/icons/Forum';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

function Header() {
    return (
        <div className="header">


         <div className="header__left" >
             <img src="data:image/png;base64,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"
            alt="something" ></img>
            <div className="header__input">
                <SearchIcon />
                <input placeholder="Search Facebook" type="text"/>
            </div>
         </div>
         <div className="header__middle" >
             <div className="header__option header__active">
                 <HomeIcon fontSize="large"/>
             </div>
             <div className="header__option">
                 <FlagIcon fontSize="large"/>
             </div>
             <div className="header__option">
                 <SubscriptionsIcon fontSize="large"/>
             </div>
             <div className="header__option">
                 <StorefrontOutlinedIcon fontSize="large"/>
             </div>
             <div className="header__option">
                 <SupervisedUserCircleIcon fontSize="large"/>
             </div>
             
         </div>


         <div className="header__right" >
             <div className="header__info">
                 <Avatar />
                 <h4>jigyansh varshney</h4>
                 <IconButton><AddIcon /></IconButton>
                 <IconButton><ForumIcon /></IconButton>
                 <IconButton><NotificationsActiveIcon /></IconButton>
                 <IconButton><ExpandMoreIcon /></IconButton>

             </div>
         </div>
        
        </div>
    ) 
}

export default Header
