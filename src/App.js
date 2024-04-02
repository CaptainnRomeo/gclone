import React from "react";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NavRoutes from "./components/NavRoutes";

import { useState } from "react";

const App = () => {
  const [darkTheme, setDarkTheme] = useState(false);

  return (
    <div className={darkTheme ? "dark" : ""}>
      <div className="bg-gray-200 dark:bg-gray-900 dark:text-gray-200 min-h-screen">
        <Navbar darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
        <NavRoutes />
        <Footer />
      </div>
    </div>
  );
};

export default App;
