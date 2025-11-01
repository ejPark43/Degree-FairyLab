// CharacterCardsSection.tsx
import { motion } from "framer-motion";
import styled from "styled-components";
import ThreeStar from "../../assets/images/stars_blue.svg";
import { lightTheme } from "../../styles/theme";

export default function CharacterCardsSection() {
  const cards = [
    { src: "images/char_ppo.png", name: "뽀" },
    { src: "images/char_pongsil.png", name: "퐁실" },
    { src: "images/char_choni.png", name: "초니" },
    { src: "images/char_ttoring.png", name: "또링" },
  ];

  return (
    <Container>
      <Stars src={ThreeStar} />

      <Section>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <UserName>페어리랩 🧚</UserName>
          <SpeechBubble>
            {`당신의 바쁘고 지루한 일상 곳곳에 \n숨어 있는 요정들을 소개해 드릴게요 :)`}
          </SpeechBubble>
        </motion.div>

        <CardGrid>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 + i * 0.1 }}
            >
              <Card>
                <CardImageWrapper>
                  <CardImage
                    className={`char-${i}`}
                    src={card.src}
                    alt={card.name}
                  />
                </CardImageWrapper>
                <CardName>{card.name}</CardName>
              </Card>
            </motion.div>
          ))}
        </CardGrid>
      </Section>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  max-width: 1920px;
  flex-direction: column;
  align-items: start;
  /* width: 100%; */
  height: 100%;
  padding: 45px 0px;
  margin: auto;
`;

const Stars = styled.img`
  display: flex;
  height: 43px;
  margin-left: 10px;
  margin-bottom: 80px;
`;
const UserName = styled.div`
  margin-left: 20px;
  margin-bottom: 15px;
  font-size: 20px;
  color: #8a898e;
`;
const Section = styled.section`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: start;

  /* border: 2px solid red; */
`;

/* 💬 공통 버블 베이스 */
const SpeechBubble = styled.p`
  max-width: 700px;
  min-height: 25px;
  word-wrap: break-word;
  margin-bottom: 12px;
  line-height: 36px;
  position: relative;
  padding: 20px 30px;
  border-radius: 25px;
  font-size: 34px;

  color: white;
  background: #0b93f6;
  align-self: flex-start;
  white-space: pre-line;
  /* 꼬리 베이스 1 */
  &::before {
    content: "";
    position: absolute;
    bottom: 0;
    height: 25px;
    width: 20px;
    background-color: #0b93f6;
    left: -7px;
    border-bottom-right-radius: 16px 14px;
  }

  /* 꼬리 베이스 2 (배경색) */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    height: 25px;
    width: 26px;
    background-color: white;
    left: -26px;
    border-bottom-right-radius: 10px;
  }
`;
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 395px);
  gap: 40px;
  width: 100%;
  justify-content: start;
  margin-top: 80px;
`;

/* 개별 카드 */
const Card = styled.div`
  display: flex;
  width: 395px;
  height: 520px;
  flex-direction: column;
  align-items: center;
  justify-content: end;
  border: 2px solid ${lightTheme.colors.secondary};
  border-radius: 20px;

  background-color: #fff;
`;

/* 이미지 영역 */
const CardImageWrapper = styled.div`
  display: flex;
  width: 100%;
  /* align-items: center; */
  justify-content: center;
  overflow: hidden;

  .char-0 {
    width: 304px;
    height: 334px;
  }
  .char-1 {
    height: 286px;
  }
  .char-2 {
    height: 292px;
  }
  .char-3 {
    height: 300px;
  }
`;

const CardImage = styled.img`
  display: flex;
  align-self: flex-end;
  justify-self: flex-end;
  /* width: 100%; */
  max-height: 100%;
  object-fit: contain;
`;

/* 이름 텍스트 */
const CardName = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 192px;
  height: 53px;
  border-radius: 20px;
  border: 1px solid ${lightTheme.colors.secondary};
  font-family: "PeoplefirstNeatLoud";
  font-size: 34px;
  font-weight: 400;
  color: ${lightTheme.colors.secondary};
  background-color: ${lightTheme.colors.buttonBg};
  margin-top: 55px;
  margin-bottom: 30px;
`;
