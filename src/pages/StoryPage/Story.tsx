import React from "react";
import styled, { keyframes } from "styled-components";
import { lightTheme } from "../../styles/theme";
import LogoWhite from "../../assets/images/FairyLabLogoWhite.svg";
import ThreeStar from "../../assets/images/stars.svg";
import LeftDeco from "../../assets/images/storyPage/leftDeco.svg";
import RightDeco from "../../assets/images/storyPage/rightDeco.svg";
import CloudImg from "../../assets/images/cloud.svg";

function Story() {
  return (
    <Container>
      <Logo src={LogoWhite} />
      <Stars src={ThreeStar} />
      <LeftDecoration src={LeftDeco} />
      <RightDecoration src={RightDeco} />
      <Clouds
        src={CloudImg}
        $size={200}
        $top="150px"
        $left="100px"
        $delay={0}
        $duration={6}
      />
      <Clouds
        src={CloudImg}
        $size={250}
        $top="-20px"
        $left="1240px"
        $delay={2}
        $duration={8}
      />
      <StoryText>
        <span className="title">실종된 요정을 찾습니다!</span>
        <span className="text">
          Fairy Lab은 다양한 일상의 재미를 ‘요정’이라는 캐릭터로 시각화한 문구
          굿즈 브랜드로, 무감한 일상 속 어딘가에 숨어 있는 요정을 찾아 작지만
          분명한 ‘재미’를 다시 꺼내 보여주는 것을 지향합니다.
        </span>
        <span className="text">
          각 요정은 커피, 음악, 날씨, 쇼핑처럼 일상의 소소한 즐거움을 상징하며,
          이들의 이야기와 성격은 이후 Fairy Lab의 문구 캐릭터와 제품 디자인으로
          확장하여, 브랜드의 세계관을 시각적으로 경험하고 이해하는 경험을
          제공하고자 합니다.
        </span>
      </StoryText>
      <Divider />
    </Container>
  );
}

export default Story;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  height: 950px;
  /* background-color: ${({ theme }) => lightTheme.colors.primary}; */
  padding-top: 110px;
  /* z-index: 11; */
  &::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 1400px;
    background-color: ${({ theme }) => lightTheme.colors.primary};
    border-radius: 49% 49% 0 0;
    z-index: -1; /* 뒤로 */
  }
`;

const Logo = styled.img`
  display: flex;
  height: 330px;
  margin-bottom: 50px;
`;
const Stars = styled.img`
  display: flex;
  height: 20px;
  /* border: 2px solid black; */
  margin-bottom: 80px;
`;
const LeftDecoration = styled.img`
  display: flex;
  position: absolute;
  height: 450px;
  left: 0px;
  top: 285px;
  /* border: 2px solid gold; */
`;
const RightDecoration = styled.img`
  display: flex;
  position: absolute;
  height: 420px;
  right: 0;
  top: 190px;
`;
const StoryText = styled.div`
  display: flex;
  width: 760px;
  /* border: 2px solid green; */
  flex-direction: column;
  justify-content: start;
  color: ${({ theme }) => lightTheme.colors.secondary};
  .title {
    font-family: "PeoplefirstNeatLoud";
    font-size: 60px;
    padding: 20px 10px 20px 0;
  }
  .text {
    font-family: "Pretendard";
    font-size: medium;
    font-weight: 300;
    padding: 10px 0px 10px 0;
    line-height: 1.2;
  }
`;
const Divider = styled.div`
  display: flex;
  width: 90%;
  margin: 100px;
  background-color: ${({ theme }) => lightTheme.colors.secondary};
  height: 1px;
`;

const float = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-55px);
  }

  100% {
    transform: translateY(0);
  }
`;

const Clouds = styled.img<{
  $size?: number;
  $top?: string;
  $left?: string;
  $delay?: number;
  $duration?: number;
}>`
  position: absolute;
  top: ${({ $top }) => $top || "0"};
  left: ${({ $left }) => $left || "0"};
  height: ${({ $size }) => ($size ? `${$size}px` : "200px")};
  animation: ${float} ${({ $duration }) => $duration || 6}s ease-in-out infinite;
  animation-delay: ${({ $delay }) => $delay || 0}s;
  pointer-events: none;
  z-index: 2;
`;
