import { Stack, Typography } from "@mui/material";
import MainCard from "../ui-component/cards/MainCard";
import { FormattedMessage } from "react-intl";
import theme from "../themes";

const Telegram = () => {
  return (
    <MainCard
      sx={{
        height: "267px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{ ...theme.typography.mainTitle, color: "#2BACEF", mb: 5 }}
      >
        <FormattedMessage id="Chat Room" />
      </Typography>
      <Stack direction="row" justifyContent="center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="95"
          height="95"
          viewBox="0 0 95 95"
          fill="none"
        >
          <g clipPath="url(#clip0_147_1943)">
            <path
              d="M47.5 0C34.9051 0 22.8148 5.00754 13.916 13.9123C5.008 22.8206 0.00246755 34.902 0 47.5C0 60.0927 5.00977 72.1829 13.916 81.0877C22.8148 89.9925 34.9051 95 47.5 95C60.0949 95 72.1852 89.9925 81.084 81.0877C89.9902 72.1829 95 60.0927 95 47.5C95 34.9073 89.9902 22.8171 81.084 13.9123C72.1852 5.00754 60.0949 0 47.5 0Z"
              fill="url(#paint0_linear_147_1943)"
            />
            <path
              d="M21.5012 46.9983C35.3504 40.9658 44.5832 36.9884 49.1996 35.0669C62.3957 29.5799 65.1344 28.6269 66.923 28.5946C67.3164 28.5883 68.1922 28.6856 68.7637 29.1476C69.2387 29.5372 69.3723 30.0642 69.4391 30.4342C69.4984 30.8038 69.5801 31.6461 69.5133 32.3037C68.8008 39.8147 65.7059 58.0413 64.1324 66.454C63.4719 70.0135 62.1582 71.207 60.8891 71.3235C58.1281 71.5773 56.0352 69.5007 53.3633 67.7499C49.1848 65.009 46.8246 63.3034 42.7648 60.6293C38.0742 57.5388 41.1172 55.84 43.7891 53.0642C44.4867 52.3376 56.6437 41.2827 56.8738 40.28C56.9035 40.1546 56.9332 39.687 56.6512 39.4406C56.3766 39.1934 55.9684 39.2781 55.6715 39.3449C55.2484 39.4399 48.5762 43.8544 35.6324 52.5877C33.7398 53.8895 32.0254 54.5241 30.4816 54.4907C28.7894 54.4543 25.5238 53.5318 23.0969 52.7436C20.1281 51.7765 17.7605 51.2651 17.9684 49.6227C18.0723 48.7677 19.2523 47.8926 21.5012 46.9983Z"
              fill="white"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_147_1943"
              x1="4750"
              y1="0"
              x2="4750"
              y2="9500"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#2AABEE" />
              <stop offset="1" stopColor="#229ED9" />
            </linearGradient>
            <clipPath id="clip0_147_1943">
              <rect width="95" height="95" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </Stack>
    </MainCard>
  );
};

export default Telegram;
