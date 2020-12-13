import { TuneOutlined } from '@material-ui/icons';
import React from 'react';
import ChannelRow from './ChannelRow';
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
            
            <hr />
            
            <VideoRow
                image="https://i.ytimg.com/an_webp/4F2m91eKmts/mqdefault_6s.webp?du=3000&sqp=CKnh0_4F&rs=AOn4CLBwCgHkC56ztelNtJtYskh3ymzf7g"
                channel="Clever Programmer"
                subs="852k"
                views="1.8M"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                timestamp="11 Months Ago"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium necessitatibus eum qui, magnam reiciendis saepe magni ad amet dolores!"
            />
            
            <VideoRow
                image="https://i.ytimg.com/vi/MEqrzeU-UCQ/hqdefault.jpg?sqp=-oaymwEZCOADEI4CSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLBm3HdW5MjQC6NgVxGKn5hSLvHfCQ"
                channel="Clever Programmer"
                subs="20k"
                views="1.8M"
                title="Uneducated Junior Developer Gets Slapped for a FATAL mistake #Shorts"
                timestamp="6 Days Ago"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium necessitatibus eum qui, magnam reiciendis saepe magni ad amet dolores!"
            />
            
            <VideoRow
                image="https://i.ytimg.com/an_webp/nTjyD3aWQ3U/mqdefault_6s.webp?du=3000&sqp=CLmB1P4F&rs=AOn4CLBnqYMnOpU70qBf2D63XMyx1VhQhQ"
                channel="Clever Programmer"
                subs="8.6k"
                views="1.8M"
                title="Top 8 VS Code Shortcuts (2021)"
                timestamp="1 Week Ago"
                description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit accusantium necessitatibus eum qui, magnam reiciendis saepe magni ad amet dolores!"
            />            
        </div>
    )
}

export default SearchPage
