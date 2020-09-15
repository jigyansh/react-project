import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow.js';
// import AccountBoxIcon from '@material-ui/icons/AccountBox';
// import AccessAlarmsIcon from '@material-ui/icons/AccessAlarms';
// import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


function Sidebar() {
    return (
        <div className="sidebar">
            <SidebarRow title="jigyansh varshney" src="https://th.bing.com/th/id/OIP.zpFGxbpuO_OTy13WXi2MtQHaHT?w=159&h=180&c=7&o=5&dpr=1.5&pid=1.7"/>
            {/* <SidebarRow title="something" Icon={AccessAlarmsIcon}/>
            <SidebarRow title="avatar" Icon={AccountBalanceWalletIcon}/> */}
        <SidebarRow title="COVID-19 center" Icon={LocalHospitalIcon} font-size="xx-large"/>
            <SidebarRow title="pages" Icon={EmojiFlagsIcon}/>
            <SidebarRow title="friends" Icon={PeopleIcon}/>
            <SidebarRow title="messenger" Icon={ChatIcon}/>
            <SidebarRow title="MarketPlace" Icon={StorefrontIcon}/>
            <SidebarRow title="videos" Icon={VideoLibraryIcon}/>
            <SidebarRow title="Market" Icon={ExpandMoreIcon}/>
        </div>
    )
}

export default Sidebar
