import {
  AppBar,
  Avatar,
  Badge,
  Icon,
  InputBase,
  styled,
  Toolbar,
  Typography,
} from "@mui/material";

import VideoCameraBackIcon from "@mui/icons-material/VideoCameraBack";
import MailIcon from "@mui/icons-material/Mail";
import NotificationsIcon from "@mui/icons-material/Notifications";
import React from "react";

const StyledToobar = styled(Toolbar)({
  display: "flex",
  background: "#3A6073",
  justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));
const Icons = styled("Box")(({ theme }) => ({
  display: "none",
  alignItems: "center",
  gap: "20px",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled("Box")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  cursor: "pointer",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const Navbar = () => {
  return (
    <AppBar position="sticky">
      <StyledToobar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          Snapzio.
        </Typography>
        <VideoCameraBackIcon sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder="search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <MailIcon />
          </Badge>
          <Badge badgeContent={23} color="error">
            <NotificationsIcon />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src="profile.jpg" />
        </Icons>

        <UserBox>
          <Avatar sx={{ width: 30, height: 30 }} src="profile.jpg" />
          <Typography variant="span">Chamathka</Typography>
        </UserBox>
      </StyledToobar>
    </AppBar>
  );
};

export default Navbar;
