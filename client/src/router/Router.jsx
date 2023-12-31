import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menulayout from "../layout/Menulayout";
import MainPage from "../pages/mainPage/MainPage";
import MyPage from "../pages/myPage/MyPage.jsx";
import GlobalStyles from "../GlobalStyles";
import { styled } from "styled-components";
import Header from "../layout/Header";
import MyPageUpdateForm from "../pages/myPage/MyPageUpdateForm";
import Login from "../pages/login/Login";
import Loading from "../components/loading/Loading";
import Send from "../pages/send/Send";
import Scan from "../pages/send/Scan";
import SendCheck from "../pages/send/SendCheck";
import SendDone from "../pages/send/SendDone";
import Receive from "../pages/receive/Receive";
import ReceiveDone from "../pages/receive/ReceiveDone";
import MyBeans from "../pages/mainPage/MyBeans";
import Beans from "../pages/beans/Beans";
import BeansDetail from "../pages/beans/BeansDetail";
import Background from "../layout/Background";
import { useRecoilState } from "recoil";
import { loadingRecoil } from "../recoil/atom";

function Router() {
    const [loading, setLoading] = useRecoilState(loadingRecoil);

    return (
        <BrowserRouter>
            <GlobalStyles />
            <Background />

            <MobileWidthDiv>
                <>
                    <LodingStyle loading={loading ? 1 : 0}>
                        <Loading />
                    </LodingStyle>
                    <Header />
                    <Menulayout />
                </>
                <Routes>
                    <Route path="/loading" element={<Loading />} />
                    <Route path="/" element={<MainPage />} />
                    <Route path="/myPage" element={<MyPage />} />
                    <Route
                        path="/myPage/update/:num"
                        element={<MyPageUpdateForm />}
                    />
                    <Route path="/login" element={<Login />} />
                    <Route path="/mybeans" element={<MyBeans />} />
                    <Route path="/send" element={<Send />} />
                    <Route path="/scan" element={<Scan />} />
                    <Route path="/sendcheck" element={<SendCheck />} />
                    <Route path="/senddone" element={<SendDone />} />
                    <Route path="/receive" element={<Receive />} />
                    <Route path="/receivedone" element={<ReceiveDone />} />
                    <Route path="/beans" element={<Beans />} />
                    <Route
                        path="/beans/detail/:num"
                        element={<BeansDetail />}
                    />
                </Routes>
            </MobileWidthDiv>
        </BrowserRouter>
    );
}

export default Router;
const MobileWidthDiv = styled.div`
    max-width: 430px;
    overflow: hidden;
    margin: 0 auto;
    margin-left: 55%;
    background: #e4e1e0;
    /* margin-right: 20%; */
    padding-top: 70px;
    box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22);
`;
const LodingStyle = styled.div`
    display: ${(props) => (props.loading ? "block" : "none")};
`;
