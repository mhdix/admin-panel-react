import "./App.css";
import Main from "./components/Main";
import Sidebar from "./components/SideBar";
import HomeDashboard from "./pages/HomeDashboard";
import BlogPage from "./pages/BlogPage";
import { Route, Routes } from "react-router-dom";
import BlogForm from "./pages/BlogForm";

function App() {
  return (
    <div className="flex">
      {/* <HomeDashboard /> */}
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/blogs" element={<BlogPage />} />
        <Route path="/blogs/new" element={<BlogForm />} />
        {/* <Route path="/users" element={<UserList />} /> */}
        {/* <Route path="/users/new" element={<UserForm />} /> */}
        <Route
          path="*"
          element={<div className="p-8 text-center">صفحه یافت نشد!</div>}
        />
      </Routes>

      <Main>
        <Sidebar />
      </Main>
    </div>
  );
}

export default App;
