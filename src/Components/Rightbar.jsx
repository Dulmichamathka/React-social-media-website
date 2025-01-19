import { Avatar, AvatarGroup, Box, Typography } from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed">
        <Typography variant="p" sx={{ fontWeight: 300, color: "gray" }}>
          Online Friends
        </Typography>
        <AvatarGroup max={7} sx={{ marginTop: 1 }}>
          <Avatar alt="Remy Sharp" src="/girl5.jpeg" />
          <Avatar alt="Travis Howard" src="/girl3.jpeg" />
          <Avatar alt="Cindy Baker" src="/boy1.jpeg" />
          <Avatar alt="Agnes Walker" src="" />
          <Avatar alt="Trevor Henderson" src="/girl4.jpeg" />
          <Avatar alt="Trevor Henderson" src="/boy2.jpeg" />
          <Avatar alt="Trevor Henderson" src="/girl5.jpeg" />
          <Avatar alt="Trevor Henderson" src="/boy3.jpeg" />
          <Avatar alt="Trevor Henderson" src="/girl6.jpeg" />
        </AvatarGroup>
      </Box>
    </Box>
  );
};

export default Rightbar;
