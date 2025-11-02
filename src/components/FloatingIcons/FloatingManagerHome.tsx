// FloatingManagerHome.tsx
import styled, { keyframes } from "styled-components";
import Floating1 from "./Floating1";
import Floating2 from "./Floating8";
import Floating3 from "./Floating3";
import Floating4 from "./Floating4";
import Floating5 from "./Floating5";
import Floating6 from "./Floating6";
import Floating7 from "./Floating7";

interface DecoPosition {
  type: 1 | 2 | 3 | 4 | 5 | 6 | 7;
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size?: number;
  duration?: number;
  delay?: number;
  angle?: number;
}

const decoPositions: DecoPosition[] = [
  // 별
  { type: 1, top: "100px", left: "1700px", size: 388, duration: 4.5, angle: 5 },
  {
    type: 1,
    top: "1500px",
    left: "1440px",
    size: 388,
    duration: 4.5,
    angle: 5,
  },
  //컨페티
  {
    type: 3,
    top: "530px",
    left: "1750px",
    size: 548,
    duration: 6,
    delay: 1,
    angle: 85,
  },
  {
    type: 3,
    top: "1000px",
    left: "30px",
    size: 492,
    duration: 6,
    delay: 1,
    angle: 30,
  },
  // 각진하트 - 뒤집힌거
  {
    type: 2,
    top: "-270px",
    left: "1450px",
    size: 103,
    duration: 4.2,
    angle: 0,
  },
  {
    type: 4,
    top: "1670px",
    left: "230px",
    size: 103,
    duration: 4.2,
    angle: 180,
  },
  // 유리하트
  {
    type: 5,
    top: "310px",
    left: "1690px",
    size: 285,
    duration: 4.8,
    angle: 64,
  },
  { type: 5, top: "1180px", left: "1290px", size: 340, duration: 4.8 },

  // 구름
  { type: 7, top: "250px", left: "-120px", size: 350, duration: 3.8 },
  { type: 7, top: "1780px", left: "70px", size: 350, duration: 3.8 },
  { type: 7, top: "1450px", left: "1730px", size: 290, duration: 3.8 },
];

const components = [
  Floating1,
  Floating2,
  Floating3,
  Floating4,
  Floating5,
  Floating6,
  Floating7,
];

export default function FloatingManagerHome() {
  return (
    <>
      {decoPositions.map((pos, i) => {
        const Deco = components[pos.type - 1];
        return (
          <FloatWrapper
            key={i}
            duration={pos.duration}
            delay={pos.delay}
            style={{
              position: "absolute",
              top: pos.top,
              left: pos.left,
              right: pos.right,
              bottom: pos.bottom,
            }}
          >
            <DecoWrapper angle={pos.angle}>
              <Deco style={{ width: `${pos.size || 80}px`, height: "auto" }} />
            </DecoWrapper>
          </FloatWrapper>
        );
      })}
    </>
  );
}

const floatY = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-35px); }
  100% { transform: translateY(0px); }
`;

export const FloatWrapper = styled.div<{ duration?: number; delay?: number }>`
  animation: ${floatY} ${({ duration }) => duration || 5}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || 0}s;
  will-change: transform;
`;
export const DecoWrapper = styled.div<{ angle?: number }>`
  display: inline-block;
  transform: ${({ angle }) => `rotate(${angle || 0}deg)`};
  transform-origin: center center;
`;
