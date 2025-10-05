import React from "react";
import styled from "styled-components";
import { lightTheme } from "../styles/theme";
import FairyLabLogo from "../assets/images/FairyLabLogo.svg";
import SearchIcon from "@mui/icons-material/Search";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();
  return (
    <span>
      <Container>
        <HeaderBorder>
          <Logo
            onClick={() => navigate("/")}
            src={FairyLabLogo}
            alt="FairyLab Logo"
          />
          <Menu style={{ width: "340px", marginRight: "30px" }}>
            <MenuItem onClick={() => navigate("/story")}>STORY</MenuItem>
            <MenuItem onClick={() => navigate("/shop")}>SHOP</MenuItem>
            <MenuItem onClick={() => navigate("/archive")}>ARCHIVE</MenuItem>
          </Menu>
          <Menu style={{ width: "170px", marginRight: "40px" }}>
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
          </Menu>
        </HeaderBorder>
      </Container>
    </span>
  );
}

export default Header;

const Container = styled.div`
  display: flex;
  border: 2px solid red;
  width: 100%;
`;

const HeaderBorder = styled.div`
  display: flex;
  /* border: 2px solid gold; */
  padding: 20px;
  width: 100%;
  justify-content: space-between;
  height: 150px;
`;

const Logo = styled.img`
  display: flex;
  padding: 10px;
  padding-right: 0;
  /* border: 2px solid black; */
  object-fit: contain;
  cursor: pointer;
`;

const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: black;
  font-size: 20px;
`;
const MenuItem = styled.div`
  display: flex;
  font-family: "Pretendard";
  font-weight: 500;
  cursor: pointer;
  transition: color 0.1s ease;
  color: ${({ theme }) => lightTheme.colors.black};

  &:hover {
    color: ${({ theme }) => lightTheme.colors.secondary};
  }
`;
