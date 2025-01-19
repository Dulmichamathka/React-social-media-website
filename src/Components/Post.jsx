import React from "react";
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import FavoriteBorder from "@mui/icons-material/FavoriteBorder";
import Favorite from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";

const Post = () => {
  return (
    <div>
      {" "}
      <Card sx={{ margin: 5 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              {" "}
              <MoreVertIcon />
            </IconButton>
          }
          title="Dulmi Chamathka"
          subheader="January 15,2025"
        />
        <CardMedia
          component="img"
          height="20%"
          image="/girl2.jpg"
          alt="Paella dish"
          sx={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
        <CardContent>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            As the evening settles in, there's a certain magic in the air. The
            soft hues of the sunset paint the sky, casting a warm glow over
            everything. It's a perfect moment to pause, reflect, and simply
            enjoy the beauty of life. The gentle breeze whispers through the
            trees, and the world feels calm and serene. These are the moments
            that remind us to slow down, cherish the present, and find joy in
            the simple pleasures of an evening well spent 🌅✨
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <Checkbox
              icon={<FavoriteBorder />}
              checkedIcon={<Favorite sx={{ color: "red" }} />}
            />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

export default Post;
