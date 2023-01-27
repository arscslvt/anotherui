import { Route, Routes } from "react-router";
import { Index } from "./pages/Index";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />} />
      </Routes>
    </div>
  );
}

export default App;
