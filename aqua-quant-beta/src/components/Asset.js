import { useState } from "react";
import styles from "./Asset.module.css";
import { FormattedMessage } from "react-intl";
import Chart from "./PieChart";

const Asset = () => {
  const [usdtAsset, setUsdtAsset] = useState(4875.58);
  const [krwAsset, setKrwAsset] = useState(6310560);
  return (
    <div className={styles.mainContainer}>
      <div>
        <label className={styles.title}>
          {usdtAsset.toLocaleString()} USDT
        </label>
        <label className={styles.subTitle}>
          {krwAsset.toLocaleString()} KRW
        </label>
      </div>
      <div className={styles.updateBox}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M1 6C1 7.19347 1.47411 8.33807 2.31802 9.18198C3.16193 10.0259 4.30653 10.5 5.5 10.5C6.695 10.5 7.84 10.03 8.7 9.2L7.95 8.45C7.63511 8.78322 7.25522 9.04832 6.83382 9.22892C6.41242 9.40952 5.95846 9.50178 5.5 9.5C2.38 9.5 0.82 5.73 3.025 3.525C5.23 1.32 9 2.885 9 6H7.5L9.5 8H9.55L11.5 6H10C10 4.80653 9.52589 3.66193 8.68198 2.81802C7.83807 1.97411 6.69347 1.5 5.5 1.5C4.30653 1.5 3.16193 1.97411 2.31802 2.81802C1.47411 3.66193 1 4.80653 1 6Z"
            fill="#4073F2"
          />
        </svg>
        <label>
          <FormattedMessage id="Update asset data" />
        </label>
      </div>
      <Chart />
    </div>
  );
};

export default Asset;
