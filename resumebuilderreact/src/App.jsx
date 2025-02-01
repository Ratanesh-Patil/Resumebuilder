import { useState } from "react";
import "./App.css";
import ResumeForm from "./pages/ResumeForm";
import Resume from "./pages/Resume";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {
  const [data, setdata] = useState(null);
  return (
    <>
      <div className="w-full  flex">
        <PanelGroup direction="horizontal">
          {/* Left - Resume Form */}
          <Panel defaultSize={50} minSize={20} maxSize={80}>
            <ResumeForm setdata={setdata} />
          </Panel>
          {/* Resizable Handle */}
          <PanelResizeHandle className="w-2 bg-gray-400 cursor-ew-resize" />

          {/* Right - Resume Preview */}
          <Panel defaultSize={50} minSize={20} maxSize={80}>
            <Resume data={data} />
          </Panel>
        </PanelGroup>
      </div>
    </>
  );
}

export default App;
