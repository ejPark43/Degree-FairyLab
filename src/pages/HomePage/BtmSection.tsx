import React from "react";
import styled from "styled-components";
import PinkLogo from "../../assets/images/mainPage/FairyLabPink.png";
import StackedConfirm from "../../assets/images/mainPage/stackedAlert.png";
import Playlist from "../../assets/images/mainPage/playlist.png";
import MainTexts from "../../assets/images/mainPage/MainTexts.png";
function BtmSection() {
  return (
    <Container>
      <TextBoxes src={MainTexts} />
      <LogoWrapper>
        <Logo src={PinkLogo} alt="fairylab" />
      </LogoWrapper>
      <ColDivide>
        <Left>
          <ImgComp
            style={{ width: "655px" }}
            src={StackedConfirm}
            alt="confirmStacked"
          />
        </Left>
        <Right>
          <ImgComp
            style={{ width: "543px", marginRight: "98px" }}
            src={Playlist}
            alt="confirmStacked"
          />
        </Right>
      </ColDivide>
    </Container>
  );
}

export default BtmSection;
const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
`;
const TextBoxes = styled.img`
  position: absolute;
  width: 894px;
  height: 374px;
  top: -435px;
  left: 85px;
`;
const LogoWrapper = styled.div`
  margin-top: 240px;
  display: flex;
  justify-content: center;

  align-items: center;
  width: 100%;
  padding: auto;
`;
const Logo = styled.img`
  display: flex;
  width: 1211px;
`;

const ColDivide = styled.div`
  display: flex;
  width: 100%;
  height: 626px;
  flex-direction: row;
  margin-top: 173px;
  margin-bottom: 279px;
`;

const ImgComp = styled.img`
  display: flex;
  /* border: 2px solid red; */
`;
const Left = styled.div`
  display: flex;
  align-items: start;
  height: 100%;
  width: 950px;
  padding-left: 292px;
`;

const Right = styled.div`
  display: flex;
  /* border: 2px solid green; */
  width: 100%;
  align-items: end;
  justify-content: end;
  height: 100%;
`;
