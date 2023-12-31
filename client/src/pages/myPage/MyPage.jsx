import React, { useEffect } from "react";
import styled from "styled-components";
import profile_img from "../../image/profile_for_my.png";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { loginDataRecoil } from "../../recoil/atom";
import axios from "axios";

function MyPage(props) {
    // 네비게이트
    const navigate = useNavigate();

    // 로그인한 유저 정보 (세션에 저장된 데이터)
    const [loginTrue, setLoginTrue] = useRecoilState(loginDataRecoil);

    // 유저의 핸드폰번호에 '-' 기호 붙이기 위해 자르는 작업
    const userId = loginTrue?.sessionId;
    const phoneStart = userId?.substring(0, 3);
    const phoneMiddle = userId?.substring(3, 7);
    const phoneLast = userId?.substring(7, 11);

    // 회원번호
    const userNum = loginTrue.sessionNum;
    // 수정하기 클릭시 수정폼으로 이동 (회원번호 가지고감)
    const mypageUpdateFormOnClick = () => {
        navigate("/mypage/update/" + userNum);
    };

    return (
        <Body>
            <div className="wrapper">
                {/* 프사 영역 */}
                <ImgBorder>
                    {/* 회원이 프사 수정하면 수정 필요 */}
                    <ProfileImg src={profile_img}></ProfileImg>
                </ImgBorder>

                {/* 회원 휴대폰번호(아이디) */}
                <UserArea>
                    <span>
                        {phoneStart}-{phoneMiddle}-{phoneLast}
                    </span>
                    {/* <span>{loginTrue.sessionId}</span> */}
                    <span>님</span>
                </UserArea>

                {/* 정보 보여질 곳 */}
                <UserInfoArea>
                    <p className="user-info-txt">회원정보</p>
                    {/* 이름 */}
                    <UserInfoArticle>
                        <span>이름</span>
                        {/* 데이터 받아서 넣을 곳 */}
                        <span className="user-name input">
                            {loginTrue.sessionName}
                        </span>
                    </UserInfoArticle>

                    {/* 생일 */}
                    <UserInfoArticle>
                        <span>생일</span>
                        {/* 데이터 받아서 넣을 곳 */}
                        <span className="user-birth input">
                            {loginTrue.sessionBirth}
                        </span>
                    </UserInfoArticle>

                    {/* 이메일 */}
                    <UserInfoArticle>
                        <span>이메일</span>
                        {/* 데이터 받아서 넣을 곳 */}
                        <span className="user-email input">
                            {loginTrue.sessionEmail}
                        </span>
                    </UserInfoArticle>
                    <input type="hidden" defaultValue={userNum}></input>
                </UserInfoArea>

                {/* 버튼 */}
                <BtnArea>
                    {/* 추후 MEMBER_NUM 넘기도록 할 것?? */}
                    {/* <Link to={`/mypage/update/${loginTrue.sessionNum}`} key={loginTrue.sessionNum}>
                        수정하기
                    </Link> */}
                    <GotoUpdateFormBtn
                        onClick={() => mypageUpdateFormOnClick({ userNum })}
                    >
                        수정하기
                    </GotoUpdateFormBtn>
                </BtnArea>
            </div>
        </Body>
    );
}

export default MyPage;

const Body = styled.div`
    max-width: 430px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    margin-top: -70px;

    .wrapper {
        width: 100%;
        padding-top: 100px;
        padding-bottom: 50px;
    }
`;
// 프사 영역
// 겉 테두리
const ImgBorder = styled.div`
    width: 140px;
    height: 140px;
    border-radius: 100%;
    border: 2px solid #432c20;
    position: relative;
    margin: 0 auto;
`;
// 프사
const ProfileImg = styled.img`
    position: absolute;
    width: 100px;
    height: 100px;
    top: 17px;
    left: 18px;
`;

const UserArea = styled.div`
    padding-top: 30px;
    text-align: center;
    font-size: 20px;
    width: 100%;
`;

const UserInfoArea = styled.div`
    padding-top: 70px;
    padding-left: 20px;

    .user-info-txt {
        font-weight: 700;
        font-size: 16px;
        padding-left: 2px;
    }
`;

const UserInfoArticle = styled.div`
    font-size: 14px;
    font-weight: 700;
    margin-top: 14px;
    padding-left: 10px;
    width: 95%;
    height: 55px;
    line-height: 55px;
    border: 1px solid #432c20;
    border-radius: 5px;

    .input {
        padding-left: 80px;
        font-weight: 700;
    }

    .user-email {
        padding-left: 67px;
    }
`;

const BtnArea = styled.div`
    text-align: center;
`;

const GotoUpdateFormBtn = styled.button`
    margin-top: 55px;
    border: none;
    width: 60%;
    padding: 16px 0 16px 0;
    background-color: #432c20;
    color: #f6f290;
    font-size: 16px;
    border-radius: 30px;
    cursor: pointer;
`;
