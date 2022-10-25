import React from 'react'
import styles from '../styles/About.module.css'

function about() {
  return (
    <div> 
      <div className={styles.container}>
        <h2 className={styles.head}>About Us</h2>
        <p>A meme (/miːm/ MEEM) is an idea, behavior, or style that spreads from person to person within a culture—often with the aim of conveying a particular phenomenon, theme, or meaning represented by the meme.
          We at Memes believe that the cultural representation of our time will be expressed through the memes we’ve shared. As we look to the cave paintings or the hieroglyphics of ancient Egypt to understand the past, we will one day look to the memes of now to understand what our culture was today.
          Memes are how we express ourselves. Our ideas. Our passions. Our beliefs.<br />
          We’re extremely lucky to have the opportunity to serve the largest meme community in the world.<br />
          With ❤️<br />
          - Memes Team<br />
          Owned and Operated by Memes Apps LLC.</p><hr />
      </div>
    </div>
  )
}
export default about
