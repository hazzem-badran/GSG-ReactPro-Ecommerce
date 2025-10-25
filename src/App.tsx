import { Routes, Route } from "react-router-dom";
import Home from "@/pages/home";
import SignUp from "./pages/sign-up";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
