// FloatingManager.tsx
import styled, { keyframes } from "styled-components";
import Floating1 from "./Floating1.tsx";
import Floating2 from "./Floating2.tsx";
import Floating3 from "./Floating3.tsx";
import Floating4 from "./Floating4.tsx";
interface DecoPosition {
  type: 1 | 2 | 3 | 4; // 어떤 SVG를 쓸지
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
  // 뽀 - 별
  {
    type: 1,
    top: "-20px",
    left: "120px",
    size: 136,
    duration: 4.5,
    delay: 0.3,
    angle: 0,
  },
  {
    type: 1,
    top: "620px",
    left: "150px",
    size: 177,
    duration: 5,
    delay: 0.7,
    angle: -90,
  },
  {
    type: 1,
    top: "200px",
    right: "900px",
    size: 177,
    duration: 5,
    delay: 0.7,
    angle: -12,
  },

  //뽀 - 날개
  {
    type: 2,
    top: "410px",
    left: "170px",
    size: 44,
    duration: 3,
    delay: 0.7,
    angle: 1,
  },
  {
    type: 2,
    top: "150px",
    right: "770px",
    size: 44,
    duration: 5.2,
    delay: 0.8,
    angle: 1,
  },
  // 뽀 - 컨페티
  {
    type: 3,
    top: "170px",
    left: "20px",
    size: 230,
    duration: 4.5,
    delay: 1.5,
    angle: 0,
  },
  {
    type: 3,
    top: "320px",
    right: "800px",
    size: 178,
    duration: 3,
    delay: 1.5,
    angle: 70,
  },
  // 뽀 - 하트
  {
    type: 4,
    top: "200px",
    left: "250px",
    size: 66,
    duration: 4,
    delay: 0,
    angle: -155,
  },
  {
    type: 4,
    top: "260px",
    right: "660px",
    size: 66,
    duration: 4,
    delay: 0,
    angle: 170,
  },

  /* 퐁실 */
  // 퐁실- 별
  {
    type: 1,
    top: "950px",
    right: "920px",
    size: 136,
    duration: 4.5,
    delay: 0.3,
    angle: 1.2,
  },
  {
    type: 1,
    top: "975px",
    right: "965px",
    size: 177,
    duration: 5,
    delay: 0.7,
    angle: 30,
  },
  {
    type: 1,
    top: "1460px",
    right: "415px",
    size: 177,
    duration: 5,
    delay: 0.7,
    angle: -12,
  },

  //퐁실 - 날개
  {
    type: 2,
    top: "1060px",
    right: "810px",
    size: 44,
    duration: 3,
    delay: 0.7,
    angle: 1,
  },
  {
    type: 2,
    top: "1325px",
    right: "310px",
    size: 44,
    duration: 5.2,
    delay: 0.8,
    angle: 0,
  },
  // 퐁실 - 컨페티
  {
    type: 3,
    top: "1040px",
    right: "1100px",
    size: 178,
    duration: 3,
    delay: 1.5,
    angle: 40,
  },
  {
    type: 3,
    top: "970px",
    right: "240px",
    size: 230,
    duration: 4.5,
    delay: 1.5,
    angle: 34,
  },

  // 퐁실 - 하트

  {
    type: 4,
    top: "1320px",
    right: "990px",
    size: 66,
    duration: 4,
    delay: 0,
    angle: 170,
  },
  {
    type: 4,
    top: "1570px",
    right: "450px",
    size: 66,
    duration: 4,
    delay: 0,
    angle: -155,
  },

  /* 쵸니 */
  // 쵸니 - 별
  {
    type: 1,
    top: "1930px",
    left: "1000px",
    size: 177,
    duration: 4.5,
    delay: 0.3,
    angle: 70,
  },
  {
    type: 1,
    top: "2420px",
    left: "850px",
    size: 177,
    duration: 5,
    delay: 0.7,
    angle: -14,
  },
  {
    type: 1,
    top: "2620px",
    left: "270px",
    size: 136,
    duration: 5,
    delay: 0.7,
    angle: -1,
  },

  //쵸니 - 날개
  {
    type: 2,
    top: "1960px",
    left: "870px",
    size: 44,
    duration: 3,
    delay: 0.7,
    angle: 1,
  },
  {
    type: 2,
    top: "2455px",
    left: "250px",
    size: 44,
    duration: 5.2,
    delay: 0.8,
    angle: 0,
  },
  // 쵸니 - 컨페티
  {
    type: 3,
    top: "1870px",
    left: "690px",
    size: 178,
    duration: 3,
    delay: 1.5,
    angle: -22,
  },
  {
    type: 3,
    top: "2460px",
    left: "410px",
    size: 235,
    duration: 4.5,
    delay: 1.5,
    angle: 90,
  },

  // 쵸니 - 하트

  {
    type: 4,
    top: "2350px",
    left: "270px",
    size: 66,
    duration: 4,
    delay: 0,
    angle: -179,
  },
  {
    type: 4,
    top: "2460px",
    left: "1080px",
    size: 66,
    duration: 4,
    delay: 0,
    angle: 170,
  },

  /* 또링 */
  // 또링 - 별
  {
    type: 1,
    top: "2930px",
    left: "1190px",
    size: 136,
    duration: 4.5,
    delay: 0.3,
    angle: 70,
  },
  {
    type: 1,
    top: "3180px",
    left: "1500px",
    size: 177,
    duration: 5,
    delay: 0.7,
    angle: -14,
  },
  {
    type: 1,
    top: "3350px",
    left: "1460px",
    size: 177,
    duration: 5,
    delay: 0.7,
    angle: -1,
  },

  //또링 - 날개

  {
    type: 2,
    top: "3020px",
    left: "880px",
    size: 44,
    duration: 5.2,
    delay: 0.8,
    angle: 0,
  },
  {
    type: 2,
    top: "3480px",
    left: "1440px",
    size: 44,
    duration: 3,
    delay: 0.7,
    angle: 1,
  },
  // 또링 - 컨페티
  {
    type: 3,
    top: "2840px",
    left: "890px",
    size: 235,
    duration: 3,
    delay: 1.5,
    angle: -30,
  },
  {
    type: 3,
    top: "3270px",
    left: "1740px",

    size: 178,
    duration: 4.5,
    delay: 1.5,
    angle: 70,
  },

  // 쵸니 - 하트

  {
    type: 4,
    top: "3240px",
    left: "1735px",
    size: 66,
    duration: 4,
    delay: 0,
    angle: 170,
  },
  {
    type: 4,
    top: "3050px",
    left: "1050px",
    size: 66,
    duration: 4,
    delay: 0,
    angle: 138,
  },
];

const components = [Floating1, Floating2, Floating3, Floating4];

export default function FloatingManager() {
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
              // width: `${pos.size || 80}px`,
              // height: "auto",
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

// export default function FloatingManager() {
//   return (
//     <>
//       {decoPositions.map((pos, i) => {
//         const Deco = components[pos.type - 1];
//         return (
//           <Deco
//             key={i}
//             style={{
//               position: "absolute",
//               top: pos.top,
//               left: pos.left,
//               right: pos.right,
//               bottom: pos.bottom,
//               width: `${pos.size || 80}px`,
//               height: "auto",
//               transform: `rotate(${pos.angle || 0}deg)`, // 🌀 회전 추가
//               transformOrigin: "center center",
//             }}
//             duration={pos.duration}
//             delay={pos.delay}
//           />
//         );
//       })}
//     </>
//   );
// }

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  position: relative;
  border: 2px solid red;
`;

const floatY = keyframes`
  0% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
  100% { transform: translateY(0px); }
`;

export const FloatWrapper = styled.div<{ duration?: number; delay?: number }>`
  /* animation: ${floatY} ${({ duration }) =>
    duration || 5}s ease-in-out infinite;
  animation-delay: ${({ delay }) => delay || 0}s; */
  will-change: transform;
`;

// ✅ rotation은 여기서만 관리 (부모의 translateY와 독립적)
export const DecoWrapper = styled.div<{ angle?: number }>`
  display: inline-block;
  transform: ${({ angle }) => `rotate(${angle || 0}deg)`};
  transform-origin: center center;
`;
