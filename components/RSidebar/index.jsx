import React from "react";
import { PingEventsProvider } from "../../contexts/PingEventsProvider";
import NetworkPoinsDetails from "../NetworkPointDetails";
import styles from "./rSideBar.module.css";

function RSidebar({ children }) {
  return (
    <div className={styles.rsidebar}>
      {/* <PingEventsProvider> */}
        <NetworkPoinsDetails />
      {/* </PingEventsProvider> */}
    </div>
  );
}

export default RSidebar;
