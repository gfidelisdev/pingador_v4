import React from 'react'

import styles from './expandTest.module.css'
function expandTest() {
    function expandir(){
        let el = document.getElementById("teste")
        el.classList.add(styles.crescido)
    }
  return (
    <div>
        <div className={styles.normal} id="teste">

        </div>
        <button onClick={expandir}>ok</button>
    </div>
  )
}

export default expandTest