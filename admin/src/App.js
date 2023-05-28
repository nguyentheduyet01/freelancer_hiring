import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";
// routes
import Router from "./routes";
// theme
import ThemeProvider from "./theme";
// components
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { StyledChart } from "./components/chart";
import ScrollToTop from "./components/scroll-to-top";
import { useNavigate } from "react-router-dom";
// ----------------------------------------------------------------------

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <ScrollToTop />
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  );
}
