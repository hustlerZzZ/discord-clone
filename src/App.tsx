import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout.tsx";
import Home from "./pages/Home/Home.tsx";
import Dashboard from "./pages/Dashboard/Dashboard.tsx";
import Login from "./pages/Login/Login.tsx";
import Signup from "./pages/Signup/Signup.tsx";
import Server from "./pages/Server/Server.tsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/server" element={<Server />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
