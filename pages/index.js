import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import socketClient from "socket.io-client";
import LSideBar from "../components/LSidebar";
import RSideBar from "../components/RSidebar";
import Dashboard from "../components/Dashboard";
import { NetworkPointsProvider } from "../contexts/NetworkPointsProvider";
import NetworkPoints from "../components/NetworkPoints";
export default function Home() {
  var socket = socketClient("http://10.4.7.61:8080");
  socket.on("msg", (msg) => {
    console.log(msg);
  });

  return (
    <NetworkPointsProvider>
      <div className={styles.container}>
        <Head>
          <title>Pingador V4</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={`container-fluid`}>
          <div>
            <Navbar />
          </div>
          <div className="grid grid-cols-6">
            <div className="col-span-1">
              <LSideBar />
            </div>
            <div className="col-span-4">
              <Dashboard>
                <div>
                  <NetworkPoints />
                </div>
              </Dashboard>
            </div>
            <div className="col-span-1">
              <RSideBar />
            </div>
          </div>
        </main>
      </div>
    </NetworkPointsProvider>
  );
}
