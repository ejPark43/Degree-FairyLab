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
              $active={
                location.pathname === "/shop" ||
                location.pathname.startsWith("/detail/")
              }
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
              <SearchIcon fontSize="inherit" />
            </MenuItem>
            <MenuItem>
              <PersonIcon fontSize="inherit" />
            </MenuItem>
            <MenuItem>
              <FavoriteIcon fontSize="inherit" />
            </MenuItem>
            <MenuItem>
              <ShoppingCartIcon fontSize="inherit" />
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

  box-sizing: border-box;
  padding: 41px 75px 41px 35px;
  height: 219px;
`;

const LeftSection = styled.div`
  /* flex: 1; */
  display: flex;
  width: 748px;
  justify-content: flex-start;
`;

const CenterSection = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RightSection = styled.div`
  display: flex;
  width: 682px;
  justify-content: flex-end;
`;

const Logo = styled.img`
  height: 163px;
  object-fit: contain;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 67px;
  font-size: 24px;
  font-weight: 500;
`;

const IconMenu = styled(Menu)`
  gap: 15px;
  font-size: 45px;
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
