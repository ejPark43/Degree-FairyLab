import styled from "styled-components";
import { lightTheme } from "../../styles/theme";

function OptionSelector({ title, options, selected, setSelected, icon }) {
  return (
    <Section>
      <OptionTitle>{title}</OptionTitle>
      <OptionList>
        {options.map((opt) => (
          <OptionItem key={opt} onClick={() => setSelected(opt)}>
            <ColorBox $active={selected === opt}>
              {selected === opt && <WingIcon src={icon} alt="wing" />}
            </ColorBox>
            <OptionLabel $active={selected === opt}>{opt}</OptionLabel>
          </OptionItem>
        ))}
      </OptionList>
    </Section>
  );
}

export default OptionSelector;

const Section = styled.div`
  margin-bottom: 15px;
`;
const OptionTitle = styled.div`
  font-weight: 700;
  font-size: 20px;
  margin-bottom: 10px;
`;
const OptionList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
const OptionItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  cursor: pointer;
`;
const ColorBox = styled.div<{ $active?: boolean }>`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid
    ${({ $active }) => ($active ? lightTheme.colors.secondary : "#000")};
`;
const WingIcon = styled.img`
  width: 12px;
  height: 12px;
`;
const OptionLabel = styled.div<{ $active?: boolean }>`
  font-size: 18px;
  color: ${({ $active }) => ($active ? lightTheme.colors.secondary : "#000")};
`;
