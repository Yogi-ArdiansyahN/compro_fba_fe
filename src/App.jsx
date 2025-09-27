import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { BrowserRouter as Router } from "react-router";
import AppRoutes from "@/routes/AppRoutes";

function App() {
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Router>
          <div className="absolute top-4 right-4">
            <ModeToggle />
          </div>
          <AppRoutes />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
