import { useState } from "react";
import "./App.css";
import ResumeForm from "./pages/ResumeForm";
import Resume from "./pages/Resume";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";

function App() {
  const [data, setdata] = useState(null);
  return (
    <>
      <div className="w-full h-screen flex">
        <PanelGroup direction="horizontal">
          {/* Left - Resume Form */}
          <Panel defaultSize={50} minSize={20} maxSize={80}>
            <div className="h-full overflow-auto">
              <ResumeForm setdata={setdata} />
            </div>
          </Panel>
          {/* Resizable Handle */}
          <PanelResizeHandle className="w-2 bg-gray-400 cursor-ew-resize" />

          {/* Right - Resume Preview */}
          <Panel defaultSize={50} minSize={20} maxSize={80}>
            <div className="h-full overflow-auto">
              <Resume data={data} />
            </div>
          </Panel>
        </PanelGroup>
      </div>
    </>
  );
}

export default App;
