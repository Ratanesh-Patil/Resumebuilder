import { useState } from "react";
import "./App.css";
import ResumeForm from "./pages/ResumeForm";
import Resume from "./pages/Resume";

function App() {
  return (
    <>
      <div className="w-full flex flex-row ">
        <ResumeForm />
        <Resume />
      </div>
    </>
  );
}

export default App;
