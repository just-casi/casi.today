import CatSpinComponent from '../components/CatSpinComponent';
import CatHappiComponent from "@/components/CatHappiComponent";
import Head from "next/head";
import styles from "@/styles/Home.module.css";
import CatMaxwellComponent from "@/components/CatMaxwellComponent";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hi Casi!!!</title>
      </Head>
      <div className={styles.relaxingGradient}></div>
      <div style={{display: "flex", flexDirection: 'column'}}>
        <div style={{display: "flex", flexWrap: 'wrap'}}>
          <p style={{minWidth: '25em'}}>u, e e a, e e u e e e a, e e</p>
          <CatSpinComponent/>
        </div>
        <div style={{display: "flex", flexWrap: 'wrap-reverse'}}>
          <CatHappiComponent/>
          <p style={{minWidth: '25em'}}>happi happi haappi</p>
        </div>
        <div style={{display: "flex", flexWrap: 'wrap'}}>
          <p style={{minWidth: '25em'}}>dudududu du du, dudududu du du</p>
          <CatMaxwellComponent/>
        </div>
      </div>
    </div>
  )
}
