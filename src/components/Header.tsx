import React from "react";
import styled from "styled-components";
import { lightTheme } from "../styles/theme";
import FairyLabLogo from "../assets/images/FairyLabLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <Container>
      <HeaderBorder>
        <LeftSection>
          <Logo
            onClick={() => navigate("/")}
            src={FairyLabLogo}
            alt="FairyLab Logo"
          />
        </LeftSection>
        <CenterSection>
          <Menu>
            <MenuItem
              $active={location.pathname === "/story"}
              onClick={() => navigate("/story")}
            >
              STORY
            </MenuItem>
            <MenuItem
              $active={location.pathname === "/shop"}
              onClick={() => navigate("/shop")}
            >
              SHOP
            </MenuItem>
            <MenuItem
              $active={location.pathname === "/archive"}
              onClick={() => navigate("/archive")}
            >
              ARCHIVE
            </MenuItem>
          </Menu>
        </CenterSection>
        <RightSection>
          <IconMenu>
            <MenuItem>
              <SearchIcon fontSize="large" />
            </MenuItem>
            <MenuItem>
              <PersonIcon fontSize="large" />
            </MenuItem>
            <MenuItem>
              <FavoriteIcon fontSize="large" />
            </MenuItem>
            <MenuItem>
              <ShoppingCartIcon fontSize="large" />
            </MenuItem>
          </IconMenu>
        </RightSection>
      </HeaderBorder>
    </Container>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 10;
`;

const HeaderBorder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 60px;
  height: 150px;
`;

const LeftSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

const CenterSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const Logo = styled.img`
  height: 150px;
  object-fit: contain;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 50px;
  font-size: 22px;
  font-weight: 500;
`;

const IconMenu = styled(Menu)`
  gap: 15px;
`;

const MenuItem = styled.div<{ $active?: boolean }>`
  font-family: "Pretendard";
  cursor: pointer;
  color: ${({ $active }) =>
    $active ? lightTheme.colors.secondary : lightTheme.colors.black};
  transition: color 0.1s ease;

  &:hover {
    color: ${lightTheme.colors.secondary};
  }
`;

// import React from "react";
// import styled from "styled-components";
// import { lightTheme } from "../styles/theme";
// import FairyLabLogo from "../assets/images/FairyLabLogo.svg";
// import SearchIcon from "@mui/icons-material/Search";
// import PersonIcon from "@mui/icons-material/Person";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import { useLocation, useNavigate } from "react-router-dom";

// function Header() {
//   const navigate = useNavigate();
//   const location = useLocation();
//   return (
//     <span>
//       <Container>
//         <HeaderBorder>
//           <Logo
//             onClick={() => navigate("/")}
//             src={FairyLabLogo}
//             alt="FairyLab Logo"
//           />
//           <Menu style={{ width: "340px", marginRight: "30px" }}>
//             <MenuItem
//               $active={location.pathname === "/story"}
//               onClick={() => navigate("/story")}
//             >
//               STORY
//             </MenuItem>
//             <MenuItem
//               $active={location.pathname === "/shop"}
//               onClick={() => navigate("/shop")}
//             >
//               SHOP
//             </MenuItem>
//             <MenuItem
//               $active={location.pathname === "/archive"}
//               onClick={() => navigate("/archive")}
//             >
//               ARCHIVE
//             </MenuItem>
//           </Menu>
//           <Menu style={{ width: "170px", marginRight: "40px" }}>
//             <MenuItem>
//               <SearchIcon fontSize="large" />
//             </MenuItem>
//             <MenuItem>
//               <PersonIcon fontSize="large" />
//             </MenuItem>
//             <MenuItem>
//               <FavoriteIcon fontSize="large" />
//             </MenuItem>
//             <MenuItem>
//               <ShoppingCartIcon fontSize="large" />
//             </MenuItem>
//           </Menu>
//         </HeaderBorder>
//       </Container>
//     </span>
//   );
// }

// export default Header;

// const Container = styled.div`
//   display: flex;
//   /* border: 2px solid red; */
//   width: 100%;
//   position: relative;
//   z-index: 10;
// `;

// const HeaderBorder = styled.div`
//   display: flex;
//   /* border: 2px solid gold; */
//   padding: 20px;
//   width: 100%;
//   justify-content: space-between;
//   height: 150px;
// `;

// const Logo = styled.img`
//   display: flex;
//   padding: 10px;
//   padding-right: 0;
//   /* border: 2px solid black; */
//   object-fit: contain;
//   cursor: pointer;
// `;

// const Menu = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-between;
//   color: black;
//   font-size: 20px;
// `;
// const MenuItem = styled.div<{ $active?: boolean }>`
//   display: flex;
//   font-family: "Pretendard";
//   font-weight: 500;
//   cursor: pointer;
//   transition: color 0.1s ease;
//   color: ${({ $active, theme }) =>
//     $active ? lightTheme.colors.secondary : lightTheme.colors.black};

//   &:hover {
//     color: ${({ theme }) => lightTheme.colors.secondary};
//   }
// `;
