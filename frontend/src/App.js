import React from "react";
import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/ui/sonner";
import Landing from "@/pages/Landing";

function App() {
  return (
    <div className="App font-sans antialiased">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "#1A1A1A",
            color: "#FAF9F6",
            borderRadius: 0,
            border: "1px solid #1A1A1A",
            fontFamily: "Manrope, sans-serif",
          },
        }}
      />
    </div>
  );
}

export default App;
