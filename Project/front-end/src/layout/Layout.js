import React from "react";
import { useLocation } from "react-router-dom";
import ChatBox from "../components/AI-Chatbot/Chatbox.js";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Routers from "../routes/Routers";
import Scroll from "../components/Hero-Section/Scroll/Scroll.js";

const Layout = () => {
  const location = useLocation();

  const excludedRoutes = ["/login", "/signup"];

  const isHomeScreen = location.pathname === "/";

  const shouldRenderHeaderFooterChatbox = !excludedRoutes.includes(
    location.pathname
  );

  return (
    <>
      {shouldRenderHeaderFooterChatbox && <Header />}
      <main>
        <Routers />
      </main>
      {shouldRenderHeaderFooterChatbox && <Footer />}
      {isHomeScreen && <Scroll />}
      {shouldRenderHeaderFooterChatbox && <ChatBox />}{" "}
    </>
  );
};

export default Layout;
