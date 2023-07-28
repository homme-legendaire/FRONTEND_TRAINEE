import { useEffect, useState, useRef } from "react";
import { FormattedMessage } from "react-intl";
import styles from "./Profit.module.css";
import Chart from "./AreaChart";

const Profit = () => {
  const [profit, setProfit] = useState(95.15);
  const [accum, setAccum] = useState("1D");
  const profitRef = useRef(null);
  const [chartWidth, setChartWidth] = useState(0);
  const [chartHeight, setChartHeight] = useState(0);
  const [chartData, setChartData] = useState([
    { name: "31", profit: 10 },
    { name: "01", profit: 8 },
    { name: "02", profit: 27 },
    { name: "03", profit: 29 },
    { name: "04", profit: 36 },
    { name: "05", profit: 55 },
    { name: "06", profit: 65 },
    { name: "07", profit: 80 },
  ]);
  const xTicks = ["31", "01", "02", "03", "04", "05", "06", "07"]; // x축의 눈금 값 배열
  const yTicks = [0, 25, 50, 75, 100]; // y축의 눈금 값 배열

  const accumChangeHandler = (e) => {
    setAccum(e.target.id);
  };

  const getParentWidth = () => {
    if (profitRef.current) {
      const parentWidth = profitRef.current.clientWidth * 0.99;
      return parentWidth;
    }
    return 0;
  };

  useEffect(() => {
    // 컴포넌트가 마운트될 때마다 차트의 너비를 업데이트
    const handleResize = () => {
      const parentWidth = getParentWidth();
      setChartWidth(parentWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.mainContainer} ref={profitRef}>
      <label className={styles.title}>{profit}%</label>
      <div className={styles.accumBox}>
        <label className={styles.accumLabel}>
          <FormattedMessage id="Profit (USDT)" />
        </label>
        <div className={styles.accumSelect}>
          <div
            className={
              accum === "1D"
                ? styles.accumButtonBoxSelected
                : styles.accumButtonBox
            }
          >
            <label id="1D" onClick={accumChangeHandler}>
              <FormattedMessage id="1D" />
            </label>
          </div>
          <div
            className={
              accum === "1W"
                ? styles.accumButtonBoxSelected
                : styles.accumButtonBox
            }
          >
            <label id="1W" onClick={accumChangeHandler}>
              <FormattedMessage id="1W" />
            </label>
          </div>
          <div
            className={
              accum === "1M"
                ? styles.accumButtonBoxSelected
                : styles.accumButtonBox
            }
          >
            <label id="1M" onClick={accumChangeHandler}>
              <FormattedMessage id="1M" />
            </label>
          </div>
          <div
            className={
              accum === "1Y"
                ? styles.accumButtonBoxSelected
                : styles.accumButtonBox
            }
          >
            <label id="1Y" onClick={accumChangeHandler}>
              <FormattedMessage id="1Y" />
            </label>
          </div>
        </div>
      </div>
      <Chart
        data={chartData}
        xTicks={xTicks}
        yTicks={yTicks}
        width={chartWidth}
      />
    </div>
  );
};

export default Profit;
