import React from 'react';
import { YouTubeData } from '../../data';
import YoutubeItem from './YoutubeItem';

const YoutubeList = () => {
    return (
        <div className="youtube-list">

            {YouTubeData.map((item, index) => {
                let newClass = "";
                if (index === 1) newClass = "abc";

                // const newClass = index === 1 ? "abc" : "";
                return (

                    <YoutubeItem
                        key={item.id}
                        image={item.image || item.avatar}
                        avatar={item.avatar || item.image}
                        author={item.author}
                        title={item.title}
                        className={newClass}
                    ></YoutubeItem>
                );
            })}

        </div>
    );
};

export default YoutubeList;