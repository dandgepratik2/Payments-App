import {
  BrowserRouter,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import { Signup } from "./pages/Signup";
import { Signin } from "./pages/Signin";
import { Dashboard } from "./pages/Dashboard";
import { SendMoney } from "./pages/SendMoney";
import { CursorSpotlight } from "./components/CursorSpotlight";

function App() {
  return (
    <>
      <CursorSpotlight />
      <BrowserRouter>
        <Routes>
          {/* 2. Add this line: Redirects "/" to "/signup" */}
          <Route path="/" element={<Navigate to="/signup" replace />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App