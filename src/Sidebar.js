import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow.js';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="profile" Icon="AccountBoxIcon" src="./myimage.jpg"/>
            <SidebarRow title="something" Icon="AccessAlarmsIcon"/>
            <SidebarRow title="avatar" Icon="AccountBalanceWalletIcon"/>
        </div>
    )
}

export default Sidebar
