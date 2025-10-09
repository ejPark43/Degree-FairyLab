import React from "react";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
import ThreeStar from "../../assets/images/stars.svg";
import ContactUsDeco from "../../assets/images/storyPage/contactDeco.svg";
function ContactUs() {
  return (
    <Container>
      <Panels>
        <LeftPanel>
          <span className="title">CONTACT US</span>
          <span className="text">
            <span>함께하고 싶거나 궁금한 점이 있다면 이메일을 보내주세요.</span>
            <span>
              페어리랩은 모든 분께 열려 있으며 어떠한 이야기든 환영입니다!
            </span>
          </span>
          <Stars src={ThreeStar} />
        </LeftPanel>
        <RightPanel>
          <CardDeco src={ContactUsDeco} />
          <span className="input">
            <input
              className="input-field"
              type="text"
              placeholder="이름/업체명"
            ></input>
            <input
              className="input-field"
              type="text"
              placeholder="연락처"
            ></input>{" "}
            <input
              className="input-field"
              type="text"
              placeholder="이메일"
            ></input>
            <textarea
              className="input-field textarea"
              placeholder="내용"
            ></textarea>
            <button className="input-field button">작성</button>
          </span>
        </RightPanel>
      </Panels>
    </Container>
  );
}

export default ContactUs;

const Container = styled.div`
  display: flex;
  top: -300px;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => lightTheme.colors.primary};
  padding-bottom: 280px;
`;
const Panels = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 555px;
  /* border: 2px solid green; */
`;
const PanelBase = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  width: 470px;
  margin: 0 10px 0 10px;
  height: 100%;
  box-sizing: border-box;
`;
const LeftPanel = styled(PanelBase)`
  color: ${({ theme }) => lightTheme.colors.secondary};
  .title {
    font-size: 40px;
    font-weight: 600;
    margin-bottom: 35px;
  }
  .text {
    display: flex;
    flex-direction: column;
    font-size: 18px;
    font-weight: 400;
    line-height: 129%;
    margin-bottom: 115px;
  }
`;
const RightPanel = styled(PanelBase)`
  background-color: ${({ theme }) => lightTheme.colors.white};
  border-radius: 20px;
  position: relative;
  .input {
    display: flex;
    flex-direction: column;
    gap: 29px;
    height: 100%;
    margin: 43px 32px 0 32px;
  }
  .input-field {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 20px;
    border: 1px solid ${({ theme }) => lightTheme.colors.secondary};
    height: 56px;
    width: 405px;
    font-size: 20px;
    font-weight: 400;
    padding-left: 26px;
    box-sizing: border-box; // 패딩 포함해서 너비 고정하는 코드!!!!!!!!!!
    color: ${({ theme }) => lightTheme.colors.secondary};
    &::placeholder {
      color: ${({ theme }) => lightTheme.colors.secondary};
    }
  }
  .textarea {
    padding-top: 16px;
    height: 144px;
    resize: none;
  }
  .button {
    display: flex;
    justify-self: end;
    align-self: end;
    text-align: center;
    height: 46px;
    width: 150px;
    padding: 0;
    color: ${({ theme }) => lightTheme.colors.secondary};
    background-color: ${({ theme }) => lightTheme.colors.primary};
    cursor: pointer;
  }
`;

const Stars = styled.img`
  display: flex;
  align-self: center;
  height: 21px;
  margin-bottom: 80px;
`;
const CardDeco = styled.img`
  display: flex;
  position: absolute;
  top: -58px;
  right: -95px;
  height: 200px;
`;
