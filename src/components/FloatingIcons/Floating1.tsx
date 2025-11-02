// Floating1.tsx
import { FloatingBase } from "./FloatingBase";
import Deco1 from "../../assets/images/obje_bluestar.svg";

export default function Floating1(props: React.ComponentProps<"img">) {
  return <FloatingBase src={Deco1} {...props} />;
}
