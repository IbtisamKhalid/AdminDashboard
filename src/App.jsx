import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
import { lime, purple, red } from '@mui/material/colors';
import Topbar from "./scenes/global/Topbar";
import Sidebar from "./scenes/global/Sidebar";
import Dashboard from "./scenes/dashboard";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Bar from "./scenes/bar";
import Form from "./scenes/form";
import Line from "./scenes/line";
import Pie from "./scenes/pie";
import FAQ from "./scenes/faq";
import Geography from "./scenes/geography";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Calendar from "./scenes/calendar/calendar.jsx";

function App() {
  const [theme, colorMode] = useMode();
  const [SidebarNavlinksarray] = useState([
    { path: "/Dashboard", element: <Dashboard /> },
    { path: "/Team", element: <Team /> },
    { path: "/Invoices", element: <Invoices /> },
    { path: "/Contacts", element: <Contacts /> },
    { path: "/Bar", element: <Bar /> },
    { path: "/Form", element: <Form /> },
    { path: "/Line", element: <Line /> },
    { path: "/Pie", element: <Pie /> },
    { path: "/FAQ", element: <FAQ /> },
    { path: "/Geography", element: <Geography /> },
    { path: "/Calendar", element: <Calendar /> },
  ]);

  return (
    <>
      <ColorModeContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                {SidebarNavlinksarray.map((item) => {
                  return (
                    <>
                      <Route path={item.path} element={item.element} />
                    </>
                  );
                })}
              </Routes>
            </main>
          </div>
        </ThemeProvider>
      </ColorModeContext.Provider>
    </>
  );
}

export default App;
