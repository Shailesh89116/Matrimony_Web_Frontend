import React from 'react'
import "./story.scss"


const Story = ({id,pic,desc,name}) => {
  return (
    <div className='story'>
      <div className="wrapper">
       <div className="topImg">
        <img src={pic} alt="" className="coupleImg" />
       </div>
       <div className="bottomStory">
        <p className="coupleName">{name}</p>
        <p className="storyDesc">{desc}</p>
       </div>
      </div>
    </div>
  )
}

export default Story
