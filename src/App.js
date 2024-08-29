import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Website/Home";
import SignUp from "./Pages/Website/Auth/SignUp";
import LogIn from "./Pages/Website/Auth/LogIn";
import Articales from "./Pages/Articles/Articles";
import WriteArticles from "./Pages/Articles/WriteArticle";
import RequierAuth from "./Pages/Website/Auth/RequierAuth";
import PersistLogin from "./Pages/Website/Auth/PresistLogin";
export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/register" element={<SignUp />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route element={<PersistLogin />}>
          <Route element={<RequierAuth />} >
            <Route path="/articles" element={<Articales />}></Route>
            <Route path="/writeArticles" element={<WriteArticles />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

