interface Colors {
  primary: string;
  secondary: string;
  text: string;

  background: string;
}

interface Theme {
  mode: "light" | "dark"; // 라이트/다크 모드
  colors: Colors;
}

export const lightTheme: Theme = {
  mode: "light",
  colors: {
    background: "#ffffff",
    primary: "#CDF1FF", // 가장 많이 쓰이는 색
    secondary: "#00ACFF", // 두번째로 많이 쓰이는 색
    text: "#2E9DFB", // 세 번째로 많이 쓰이는 색
  },
};

export const darkTheme: Theme = {
  mode: "dark",
  colors: {
    background: "#1b191fff",
    primary: "#CDF1FF",
    secondary: "#B979FE",
    text: "#ECEBFB",
  },
};
