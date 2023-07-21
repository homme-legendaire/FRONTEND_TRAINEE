import NavBar from "./components/NavBar";
import Overview from "./components/Overview";
import styles from "./Dashboard.module.css";

const Dashboard = () => {
  return (
    <div className={styles.app}>
      <NavBar />
      <div className={styles.mainContainer}>
        <div className={styles.username}>돌아온 병든튀김</div>
        <Overview />
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
        <h1>Dashboard</h1>
      </div>
    </div>
  );
};

export default Dashboard;
