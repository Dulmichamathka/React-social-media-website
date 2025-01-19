import {
  Avatar,
  AvatarGroup,
  Box,
  ImageList,
  ImageListItem,
  Typography,
  List,
} from "@mui/material";
import React from "react";

import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";

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
            marginTop: 2,
            marginBottom: 2,
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
          sx={{ marginTop: 2, marginBottom: 2 }}
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

        <List
          sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
        >
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Remy Sharp" src="/boy1.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Chamilka Hewawasam"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to shanulka bandarage
                  </Typography>
                  {" — I'll be there at 3.00 a.m "}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Travis Howard" src="/girl5.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Dilmi Dilthara"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    to Dulmi Chamathka
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant="inset" component="li" />
          <ListItem alignItems="flex-start">
            <ListItemAvatar>
              <Avatar alt="Cindy Baker" src="/girl3.jpeg" />
            </ListItemAvatar>
            <ListItemText
              primary="Lakshima Madurangi"
              secondary={
                <React.Fragment>
                  <Typography
                    component="span"
                    variant="body2"
                    sx={{ color: "text.primary", display: "inline" }}
                  >
                    Dulmi Chamathka
                  </Typography>
                  {" — Hey what's up ,what do you hope to do today morning…"}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
