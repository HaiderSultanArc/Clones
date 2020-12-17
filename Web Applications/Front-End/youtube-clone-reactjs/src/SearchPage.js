import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from './ChannelRow';
import './SearchPage.css';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className="searchPage" >
            <div className="searchPage__filter">
                <TuneOutlined />
                <h2>FILTER</h2>
            </div>
            
            <hr />
            
            <ChannelRow 
                image="https://yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="852K"
                noOfVideos={503}
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium necessitatibus eum qui, magnam reiciendis saepe magni ad amet dolores!"
            />
            
            <VideoRow
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CPnJyv4F&rs=AOn4CLCIo2CR0VfwO-BR7H8wsl06TWSbMw"
                channel="Clever Programmer"
                views={"1.8M"}
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                timestamp="11 Months Ago"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium necessitatibus eum qui, magnam reiciendis saepe magni ad amet dolores!"
            />
        </div>
    )
}

export default SearchPage
