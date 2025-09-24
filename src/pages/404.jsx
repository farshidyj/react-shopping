import React from 'react'
import cat from "../img/cat.png"
import styles from "../pages/404.module.css"
function PageNotFound() {
  return (
                  <div className={styles.notFound}>
                    <img src={cat} alt="cat" />
                    <p> ... پشمااام ! پیدا نشد </p>
                  </div>
  )
}

export default PageNotFound