import React from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import DroppableArea from "./components/DroppableArea";
import Button from "./components/Button";

const App = () => {
    return (
        <DndProvider backend={HTML5Backend}>
            <div className="p-5 bg-gray-100 min-h-screen flex flex-col items-center">
                <h1 className="text-2xl font-bold mb-4">Calculator Builder</h1>
                <div className="flex gap-5">
                    <div className="p-4 bg-white shadow-md">
                        <h2 className="text-lg font-semibold">Drag Components</h2>
                        <Button label="1" />
                        <Button label="2" />
                        <Button label="+" />
                    </div>
                    <DroppableArea />
                </div>
            </div>
        </DndProvider>
    );
};

export default App;
