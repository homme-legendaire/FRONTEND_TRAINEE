import { Link } from "react-router-dom";

// material-ui
import { ButtonBase } from "@mui/material";

import theme from "../themes";

// ==============================|| MAIN LOGO ||============================== //

const LogoSection = () => {
  return (
    <ButtonBase disableRipple component={Link} to={"/dashboard"}>
      <svg
        width="117"
        height="65"
        viewBox="0 0 117 65"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.03409 24H0.761364L8.79545 0.727272H15.1364L23.1591 24H17.8864L12.0568 6.04545H11.875L6.03409 24ZM5.70455 14.8523H18.1591V18.6932H5.70455V14.8523ZM33.6506 15.9091H37.8324L39.9347 18.6136L42.0028 21.0227L45.9006 25.9091H41.3097L38.6278 22.6136L37.2528 20.6591L33.6506 15.9091ZM46.2528 12.3636C46.2528 14.9015 45.7718 17.0606 44.8097 18.8409C43.8551 20.6212 42.5521 21.9811 40.9006 22.9205C39.2566 23.8523 37.4081 24.3182 35.3551 24.3182C33.2869 24.3182 31.4309 23.8485 29.7869 22.9091C28.143 21.9697 26.8438 20.6098 25.8892 18.8295C24.9347 17.0492 24.4574 14.8939 24.4574 12.3636C24.4574 9.82576 24.9347 7.66667 25.8892 5.88636C26.8438 4.10606 28.143 2.75 29.7869 1.81818C31.4309 0.878787 33.2869 0.40909 35.3551 0.40909C37.4081 0.40909 39.2566 0.878787 40.9006 1.81818C42.5521 2.75 43.8551 4.10606 44.8097 5.88636C45.7718 7.66667 46.2528 9.82576 46.2528 12.3636ZM41.2642 12.3636C41.2642 10.7197 41.018 9.33333 40.5256 8.20455C40.0407 7.07576 39.3551 6.2197 38.4688 5.63636C37.5824 5.05303 36.5445 4.76136 35.3551 4.76136C34.1657 4.76136 33.1278 5.05303 32.2415 5.63636C31.3551 6.2197 30.6657 7.07576 30.1733 8.20455C29.6884 9.33333 29.446 10.7197 29.446 12.3636C29.446 14.0076 29.6884 15.3939 30.1733 16.5227C30.6657 17.6515 31.3551 18.5076 32.2415 19.0909C33.1278 19.6742 34.1657 19.9659 35.3551 19.9659C36.5445 19.9659 37.5824 19.6742 38.4688 19.0909C39.3551 18.5076 40.0407 17.6515 40.5256 16.5227C41.018 15.3939 41.2642 14.0076 41.2642 12.3636ZM64.2727 0.727272H69.1932V15.8409C69.1932 17.5379 68.7879 19.0227 67.9773 20.2955C67.1742 21.5682 66.0492 22.5606 64.6023 23.2727C63.1553 23.9773 61.4697 24.3295 59.5455 24.3295C57.6136 24.3295 55.9242 23.9773 54.4773 23.2727C53.0303 22.5606 51.9053 21.5682 51.1023 20.2955C50.2992 19.0227 49.8977 17.5379 49.8977 15.8409V0.727272H54.8182V15.4205C54.8182 16.3068 55.0114 17.0947 55.3977 17.7841C55.7917 18.4735 56.3447 19.0152 57.0568 19.4091C57.7689 19.803 58.5985 20 59.5455 20C60.5 20 61.3295 19.803 62.0341 19.4091C62.7462 19.0152 63.2955 18.4735 63.6818 17.7841C64.0758 17.0947 64.2727 16.3068 64.2727 15.4205V0.727272ZM77.2528 24H71.9801L80.0142 0.727272H86.3551L94.3778 24H89.1051L83.2756 6.04545H83.0938L77.2528 24ZM76.9233 14.8523H89.3778V18.6932H76.9233V14.8523ZM10.8068 54.9091H14.9886L17.0909 57.6136L19.1591 60.0227L23.0568 64.9091H18.4659L15.7841 61.6136L14.4091 59.6591L10.8068 54.9091ZM23.4091 51.3636C23.4091 53.9015 22.928 56.0606 21.9659 57.8409C21.0114 59.6212 19.7083 60.9811 18.0568 61.9205C16.4129 62.8523 14.5644 63.3182 12.5114 63.3182C10.4432 63.3182 8.58712 62.8485 6.94318 61.9091C5.29924 60.9697 4 59.6098 3.04545 57.8295C2.09091 56.0492 1.61364 53.8939 1.61364 51.3636C1.61364 48.8258 2.09091 46.6667 3.04545 44.8864C4 43.1061 5.29924 41.75 6.94318 40.8182C8.58712 39.8788 10.4432 39.4091 12.5114 39.4091C14.5644 39.4091 16.4129 39.8788 18.0568 40.8182C19.7083 41.75 21.0114 43.1061 21.9659 44.8864C22.928 46.6667 23.4091 48.8258 23.4091 51.3636ZM18.4205 51.3636C18.4205 49.7197 18.1742 48.3333 17.6818 47.2045C17.197 46.0758 16.5114 45.2197 15.625 44.6364C14.7386 44.053 13.7008 43.7614 12.5114 43.7614C11.322 43.7614 10.2841 44.053 9.39773 44.6364C8.51136 45.2197 7.82197 46.0758 7.32955 47.2045C6.8447 48.3333 6.60227 49.7197 6.60227 51.3636C6.60227 53.0076 6.8447 54.3939 7.32955 55.5227C7.82197 56.6515 8.51136 57.5076 9.39773 58.0909C10.2841 58.6742 11.322 58.9659 12.5114 58.9659C13.7008 58.9659 14.7386 58.6742 15.625 58.0909C16.5114 57.5076 17.197 56.6515 17.6818 55.5227C18.1742 54.3939 18.4205 53.0076 18.4205 51.3636ZM41.429 39.7273H46.3494V54.8409C46.3494 56.5379 45.9441 58.0227 45.1335 59.2955C44.3305 60.5682 43.2055 61.5606 41.7585 62.2727C40.3116 62.9773 38.6259 63.3295 36.7017 63.3295C34.7699 63.3295 33.0805 62.9773 31.6335 62.2727C30.1866 61.5606 29.0616 60.5682 28.2585 59.2955C27.4555 58.0227 27.054 56.5379 27.054 54.8409V39.7273H31.9744V54.4205C31.9744 55.3068 32.1676 56.0947 32.554 56.7841C32.9479 57.4735 33.5009 58.0152 34.2131 58.4091C34.9252 58.803 35.7547 59 36.7017 59C37.6563 59 38.4858 58.803 39.1903 58.4091C39.9025 58.0152 40.4517 57.4735 40.8381 56.7841C41.232 56.0947 41.429 55.3068 41.429 54.4205V39.7273ZM54.4091 63H49.1364L57.1705 39.7273H63.5114L71.5341 63H66.2614L60.4318 45.0455H60.25L54.4091 63ZM54.0795 53.8523H66.5341V57.6932H54.0795V53.8523ZM93.8011 39.7273V63H89.5511L79.4261 48.3523H79.2557V63H74.3352V39.7273H78.6534L88.6989 54.3636H88.9034V39.7273H93.8011ZM96.9801 43.7841V39.7273H116.094V43.7841H108.969V63H104.105V43.7841H96.9801Z"
          fill="url(#paint0_linear_591_34)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_591_34"
            x1="118.5"
            y1="31"
            x2="3"
            y2="31"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#4073F2" />
            <stop offset="1" stopColor="#5A61FF" />
          </linearGradient>
        </defs>
      </svg>
    </ButtonBase>
  );
};

export default LogoSection;
