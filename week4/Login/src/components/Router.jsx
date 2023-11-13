import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import SignUpPage from "./SignUpPage";
import MyPage from "./MyPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/mypage/:useId" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
