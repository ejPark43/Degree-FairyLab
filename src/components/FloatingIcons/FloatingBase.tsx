// FloatingBase.tsx
import styled, { keyframes } from "styled-components";

export const FloatingBase = styled.img<{ duration?: number; delay?: number }>`
  position: absolute;
  pointer-events: none;
  user-select: none;
  z-index: 2;
`;
