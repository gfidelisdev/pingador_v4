import React, { useState } from "react";
import NetworkPoinsDetails from "../NetworkPointDetails";
import styles from "./rSideBar.module.css";

function RSidebar({ children }) {

  const [icon, setIcon] = useState(<>&#9665;</>)
  const [detailed, setDetailed] = useState(false)
  function expand(){

    let thisSideBar = document.getElementById("rsidebar")
    // let testo = document.getElementById("segunda")
    if (detailed){
      thisSideBar.classList.remove(styles.expanded)
      setDetailed(false)
      setIcon(<>&#9665;</>)
      // testo.classList.remove(styles.normal)
      // testo.classList.add(styles.grande)

    }
    else {
      thisSideBar.classList.add(styles.expanded)
      setDetailed(true)
      setIcon(<>&#9655;</>)
      // testo.classList.remove(styles.grande)
      // testo.classList.add(styles.normal)
    }


  }

  return (
    <div>
        {/* <div className={styles.normal} id="segunda">ok</div> */}
        <div className={`${styles.rsidebar}`} id="rsidebar">
          <div className={styles.rsidebarbutton} onClick={()=>expand()}>{icon}</div>
          <NetworkPoinsDetails />
        </div>
    </div>
  );
}

export default RSidebar;
