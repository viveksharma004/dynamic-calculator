import React, { useState } from 'react'
import ArithematicCalculator from './Components/ArithematicCalculator'
import { Routes, Route } from "react-router-dom"
import Home from "./Pages/Home"
import EmiCalculator from './Components/EmiCalculator'
const App = () => {
  const [theme, setTheme] = useState('light'); // 'light' or 'dark'

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };
  return (

    <div className={`flex justify-center items-center w-[100vw] h-[100vh] ${theme==="light"?"bg-gray-700":"bg-gray-200"} `}>
      <button
          onClick={toggleTheme}
          className={`fixed top-4 right-4  ${theme==="light"?"dark:hover:bg-gray-700 dark:text-gray-700 bg-gray-300 hover:text-gray-50":"text-gray-50 hover:text-black hover:bg-gray-200 dark:bg-gray-600"}    py-2 px-4 rounded  hover:border-gray-900 `}
        >
          Toggle Theme
        </button>
      <Routes>
        <Route path="/" element={<Home theme={theme}/>} />
        <Route path="/arithematic-calculator" element={<ArithematicCalculator theme={theme} />} />
        <Route path="/emi-calculator" element={<EmiCalculator theme={theme}/>} />
      </Routes>
      </div>
  )
}

export default App