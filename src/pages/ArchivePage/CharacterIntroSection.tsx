import { motion } from "framer-motion";
import styled from "styled-components";
import { lightTheme } from "../../styles/theme";
export default function CharacterIntroSection() {
  const characters = [
    {
      src: "images/3D_ppo.png",
      name: "뽀",
      userName: "뽀🐰",
      speech: "오늘은 제가 DJ예요. 당신 마음, 선곡 완료!",
      desc: `보물 1호인 초록색 헤드셋을 쓰고 언제나 넘치는 흥을 주체하지 못하는 토끼 요정.\n분홍빛 귀 속에서 음악이 새어 나와 잠 못 드는 사람들의 귀를 간지럽힙니다.\n세상에 들려줄 노래가 많았지만,\n너무 신나서 스스로의 플레이리스트를 날려버렸습니다.\n\n그 후로 뽀는 사람들의 이어폰과 헤드셋 속을 떠돌며\n자신의 잃어버린 트랙을 찾는 중입니다.\n오늘도 누군가의 재생 버튼 근처에서 들려오는 미묘한 멜로디는\n아마 뽀가 흘린 노래일지도 모릅니다.`,
      iconImg: "/images/char_ppo.png",
    },
    {
      src: "images/3D_pongsil.png",
      name: "퐁실",
      userName: "퐁실🐻",
      speech: `음… 오늘은, 구름이 좀 수다스러운데요?\n\n일기 예보를 확인하세요!`,
      desc: `하루에도 수십 번 하늘을 올려다보는 곰돌이 요정, 퐁실.\n비가 올 것 같으면 우산을 펴고, 맑을 것 같으면 또 우산을 듭니다.\n‘괜히 한 번 더 확인해야 안심이 된다’는 게 퐁실의 모토죠.\n\n구름이 춤추고 바람이 속삭이는 순간마다\n작은 우산 끝에서 날씨의 기분이 피어납니다.\n오늘도 퐁실은 누구보다 성실하게, 하늘의 표정을 기록하고 있습니다.`,
      iconImg: "/images/char_pongsil.png",
    },
    {
      src: "images/3D_choni.png",
      name: "쵸니",
      userName: "쵸니🐱",
      speech: "지금이야. 인생이 달콤해질 타이밍.",
      desc: `별빛 안경을 쓰고 언제나 커피 향을 쫓는 새침한 고양이 요정.\n한때 ‘우주 최고의 바리스타’를 꿈꾸며 별나라까지 커피콩을 구하러 갔다가,\n카페인을 과하게 섭취해 3일 동안 잠을 못 자는 바람에 지구로 강제 귀환했습니다.\n\n쵸니의 하루 일과는 바쁜 인간들의 책상 위를 떠돌며,\n딱 한 잔의 ‘기적의 커피 타이밍’을 찾아 헤매는 것.\n오늘도 쵸니는 낮 3시쯤, 피곤한 눈빛을 한 당신 곁에 살짝 앉아\n따뜻한 향기를 흘리고 있습니다.`,
      iconImg: "/images/char_choni.png",
    },
    {
      src: "images/3D_ttoring.png",
      name: "또링",
      userName: "또링🐶",
      speech: "지갑은 얇아져도 마음은 두꺼워졌어요.",
      desc: `반짝이는 지갑 속에서 태어난 강아지 요정, 또링.\n세상에 예쁜 게 너무 많아서 오늘도 통장을 설레게 만듭니다.\n자신은 ‘소확행 전문가’라 주장하지만 카드 명세서를 보면 늘 고개를 돌립니다.\n\n작은 간식 하나, 귀여운 소품 하나로\n사람들의 기분을 반짝이게 만드는 게 또링의 특기예요.\n오늘도 또링은 쇼윈도 앞에서 반짝이는 행복의 순간을 고르고 있습니다.\n`,
      iconImg: "/images/char_ttoring.png",
    },
  ];
  return (
    <Wrapper>
      {characters.map((c, i) => {
        const isRight = i % 2 === 0; // 짝수 인덱스 = 오른쪽 배치
        return (
          <CharacterBox key={i} isRight={isRight}>
            {/* 설명 */}
            <span>
              <CharacterName isRight={isRight}>
                <CharacterImg
                  style={{ width: "77px" }}
                  src={c.iconImg}
                  alt={c.name}
                />
                {c.name}
              </CharacterName>
              <Description isRight={isRight}>{c.desc}</Description>
            </span>

            {/* 캐릭터 + 말풍선 묶음 */}
            <CharacterGroup isRight={isRight}>
              {isRight ? (
                <>
                  <span
                    style={{
                      marginTop: "150px",
                      marginRight: "70px",
                    }}
                  >
                    <UserName>{c.userName}</UserName>
                    <SpeechBubble isRight={isRight}>{c.speech}</SpeechBubble>
                  </span>
                  <CharacterImg
                    style={{ width: "420px" }}
                    src={c.src}
                    alt={c.name}
                  />
                </>
              ) : (
                <>
                  <CharacterImg
                    style={{ width: "420px" }}
                    src={c.src}
                    alt={c.name}
                  />
                  <span
                    style={{
                      // border: "2px solid blue",
                      marginTop: "220px",
                      // marginLeft: "50px",
                    }}
                  >
                    <UserName>{c.userName}</UserName>
                    <SpeechBubble isRight={isRight}>{c.speech}</SpeechBubble>
                  </span>
                </>
              )}
            </CharacterGroup>
          </CharacterBox>
        );
      })}
    </Wrapper>
  );
}

/* --- styled-components --- */
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 500px;
  /* padding: 200px; */
  /* border: 2px solid blue; */
  padding-bottom: 400px;
  margin: 200px 0;
`;

const CharacterBox = styled.div<{ isRight?: boolean }>`
  /* border: 2px solid gold; */
  display: flex;
  flex-direction: ${({ isRight }) => (isRight ? "row" : "row-reverse")};
  align-items: flex-end;
  justify-content: space-between;
  /* width: 100%; */
  position: relative;
  font-family: "PeoplefirstNeatLoud", "Pretendard";
  margin-left: ${({ isRight }) => (isRight ? "315px" : "220px")};
  margin-right: ${({ isRight }) => (isRight ? "215px" : "340px")};
`;

const CharacterName = styled.div<{ isRight?: boolean }>`
  display: flex;
  flex-direction: ${({ isRight }) => (isRight ? "row-reverse" : "row")};
  align-items: center;
  justify-content: ${({ isRight }) => (isRight ? "start" : "end")};
  height: 135px;
  gap: 23px;
  font-size: 128px;
  font-weight: 400;
  color: ${lightTheme.colors.secondary};

  /* border: 2px solid blue; */
`;
const Description = styled.p<{ isRight?: boolean }>`
  ${({ isRight }) => (isRight ? `text-align: left;` : `text-align: right;`)}

  font-size: 34px;
  font-weight: 400;
  color: ${lightTheme.colors.secondary};
  line-height: 1.29;
  width: 100%;
  white-space: pre-line; /* ← 중요! */
  z-index: 1;
`;

const CharacterGroup = styled.div<{ isRight?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: ${({ isRight }) => (isRight ? "end" : "start")};
  gap: 24px;
  position: absolute;
  z-index: 2;
  top: ${({ isRight }) => (isRight ? "330px" : "200px")};
  /* border: 2px solid red; */
  width: 100%;
`;

const CharacterImg = styled.img`
  height: auto;
`;

const UserName = styled.div`
  display: flex;

  font-family: "Pretendard";
  margin-left: 20px;
  margin-bottom: 3px;
  font-size: 20px;
  color: #8a898e;
`;
const SpeechBubble = styled.p<{ isRight?: boolean }>`
  display: flex;
  align-items: center;
  max-width: 600px;
  font-family: "Pretendard";
  font-weight: 300;
  word-wrap: break-word;
  line-height: 22px;
  position: relative;
  padding: 24px 28px;
  border-radius: 25px;
  font-size: 30px;
  color: white;
  background: #0b93f6;
  white-space: pre-line;
  margin-bottom: 13%;
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 25px;
    width: 20px;
    background-color: #0b93f6;
    ${({ isRight }) =>
      isRight
        ? `
        right: -7px;
        border-bottom-left-radius: 16px 14px;
      `
        : `
        left: -7px;
        border-bottom-right-radius: 16px 14px;
      `}
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 25px;
    width: 26px;
    background-color: white;
    ${({ isRight }) =>
      isRight
        ? `
        right: -26px;
        border-bottom-left-radius: 10px;
      `
        : `
        left: -26px;
        border-bottom-right-radius: 10px;
      `}
  }
`;
