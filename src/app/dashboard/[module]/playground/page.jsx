import React from "react";
import ModuleSidebar from "../sidebar";
import FigmaComponent from "../component/Figma";

const FigmaPage = () => {
  return (
    // <ModuleSidebar>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-0 overflow-hidden">
        {/* Quiz */}
        {/* top */}
        <div className="gap-4 w-full">
          <div className="rounded-xl bg-muted/50">
            {/* <TestPlayer /> */}
            {/* <Quiz/> */}
            <FigmaComponent/>
          </div>
        </div>
      </div>
    // </ModuleSidebar>
  );
};

export default FigmaPage;
