import { FormattedMessage } from "react-intl";
import Asset from "./Asset";
import styles from "./Overview.module.css";
import Profit from "./Profit";

const Overview = () => {
  return (
    <div className={styles.mainContainer}>
      <label className={styles.title}>
        <FormattedMessage id="Overview" />
      </label>
      <div className={styles.overviewContainer}>
        <Profit />
        <div className={styles.divider} />
        <Asset />
      </div>
    </div>
  );
};

export default Overview;
