import React from "react";
import styled from "styled-components";
import { lightTheme } from "../styles/theme";
import FairyLabLogo from "../assets/images/FairyLabLogo.svg";

function Footer() {
  return (
    <Container>
      <FooterBorder>
        <FooterUpper>
          <LeftItem>
            <Logo src={FairyLabLogo} alt="FairyLab Logo" />
          </LeftItem>
          <LeftItem>
            <span>
              상호: 페어리 랩 | 대표: 변지민 | 사업자등록번호: 777-77-77777 |
              통신판매: 2025-포항북구-0000
            </span>
            <span>
              주소: 경북 포항시 북구 흥해읍 한동로 558, 한동대학교 느헤미야홀
            </span>
            <span>이메일: jmb410910@gmail.com</span>
            <span>고객센터: 010-0000-0000 | 개인정보처리책임자: 변지민</span>
          </LeftItem>
        </FooterUpper>

        <FooterDowner>
          <LeftItem></LeftItem>
          <RightItem>Fairy Lab © 2025</RightItem>
          <RightItem>
            <span>DESIGNED BY 변지민</span>
            <span>DEVELOPED BY 박은주</span>
          </RightItem>
        </FooterDowner>
      </FooterBorder>
    </Container>
  );
}

export default Footer;

const Container = styled.div`
  display: flex;
  /* border: 2px solid red; */
  width: 100%;
  color: ${({ theme }) => lightTheme.colors.secondary};
  background-color: ${({ theme }) => lightTheme.colors.primary};
`;

const FooterBorder = styled.div`
  display: flex;
  flex-direction: column;
  /* border: 2px solid gold; */

  width: 100%;
  margin: 0 40px 0 40px;
`;

const FooterUpper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 30px 0 25px 0;
  border-bottom: 1px solid ${({ theme }) => lightTheme.colors.secondary};
`;

const FooterDowner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 0 20px 0;
`;

/* 공통스타일 */
const BaseItem = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  /* border: 2px solid pink; */
  padding: 10px 0px;
  > span {
    padding: 5px 0;
  }
`;

const LeftItem = styled(BaseItem)`
  text-align: start;
`;

const RightItem = styled(BaseItem)`
  text-align: end;
  font-weight: 600;
  font-size: 10px;
  > span {
    padding: 0;
  }
`;

const Logo = styled.img`
  display: flex;
  position: relative;
  left: -10px;
  height: 100px;
  /* border: 1px solid black; */
  object-fit: contain;
  cursor: pointer;
`;
