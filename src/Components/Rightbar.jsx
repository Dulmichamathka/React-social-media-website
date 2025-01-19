import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import React from "react";

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" width={300}>
        <Typography variant="p" sx={{ fontWeight: 300, color: "gray" }}>
          Online Friends
        </Typography>
        <AvatarGroup
          max={7}
          sx={{
            marginTop: 1,
            marginBottom: 1,
            "& .MuiAvatarGroup-avatar": {
              marginLeft: "-4px", // Applies the spacing override
            },
          }}
        >
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

        <Typography variant="p" mt={2} sx={{ fontWeight: 300, color: "gray" }}>
          Latest Photoes
        </Typography>

        <ImageList
          cols={3}
          rowHeight={100}
          gap={5}
          sx={{ marginTop: 1, marginBottom: 1 }}
        >
          <ImageListItem sx={{ borderRadius: 3 }}>
            <img
              src="/girl.jpg"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover", // Correct style for covering the image proportionally
              }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="/girll2.jpg"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover", // Correct style for covering the image proportionally
              }}
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src="/bmwc1.jpg"
              style={{
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                objectFit: "cover", // Correct style for covering the image proportionally
              }}
            />
          </ImageListItem>
        </ImageList>

        <Typography variant="p" mt={2} sx={{ fontWeight: 300, color: "gray" }}>
          Latest Conversations
        </Typography>
      </Box>
    </Box>
  );
};

export default Rightbar;
