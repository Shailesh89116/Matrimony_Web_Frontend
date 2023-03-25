import React from 'react'
import { storyData } from '../../datasource'
import Story from '../story/Story'
import "./storyBanner.scss"
const StroyBanner = () => {
  return (
    <div className='storyBanner'>
      <div className="wrapper">
        <div className="top">
            <p className="heading">Matrimony Service with Some of Success Stories</p>
        </div>
        <div className="bottom">
        {storyData.map((story)=>(
            <div className="content" key={story.id}>
                <Story  id={story.id} pic={story.pic} desc={story.desc} name={story.name} />
            </div>
        ))}
        </div>
        
      </div>
    </div>
  )
}

export default StroyBanner
