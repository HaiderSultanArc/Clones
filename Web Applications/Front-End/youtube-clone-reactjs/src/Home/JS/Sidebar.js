import { ExpandMoreOutlined, History, Home, OndemandVideo, Subscriptions, ThumbUpOutlined, VideoLibrary, WatchLater, Whatshot } from '@material-ui/icons';
import React from 'react';
import SidebarRow from './SidebarRow';

function Sidebar() {
    return (
        <div className="sidebar" >
            <SidebarRow selected title="Home" Icon={Home} />
            <SidebarRow title="Trending" Icon={Whatshot} />
            <SidebarRow title="Subscription" Icon={Subscriptions} />
            <hr />
            <SidebarRow title="Library" Icon={VideoLibrary} />
            <SidebarRow title="History" Icon={History} />
            <SidebarRow title="Your Videos" Icon={OndemandVideo} />
            <SidebarRow title="Watch Later" Icon={WatchLater} />
            <SidebarRow title="Liked Videos" Icon={ThumbUpOutlined} />
            <SidebarRow title="Show More" Icon={ExpandMoreOutlined} />
            <hr />
        </div>
    )
}

export default Sidebar
