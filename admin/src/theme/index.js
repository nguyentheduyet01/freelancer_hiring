import PropTypes from "prop-types";
import { useMemo } from "react";
// @mui
import { CssBaseline } from "@mui/material";
import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from "@mui/material/styles";
//
import palette from "./palette";
import shadows from "./shadows";
import typography from "./typography";
import GlobalStyles from "./globalStyles";
import customShadows from "./customShadows";
import componentsOverride from "./overrides";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

// ----------------------------------------------------------------------

ThemeProvider.propTypes = {
  children: PropTypes.node,
};

export default function ThemeProvider({ children }) {
  const { account } = useSelector((state) => state.account);
  const navigate = useNavigate();
  useEffect(() => {
    if (account?.isSuccess !== true) {
      navigate("/login");
    }
  }, [account, navigate]);
  const themeOptions = useMemo(
    () => ({
      palette,
      shape: { borderRadius: 6 },
      typography,
      shadows: shadows(),
      customShadows: customShadows(),
    }),
    [],
  );

  const theme = createTheme(themeOptions);
  theme.components = componentsOverride(theme);

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  );
}
