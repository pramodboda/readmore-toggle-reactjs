import { useState } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import Link from "@mui/material/Link";
import Box from "@mui/material/Box";

const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

const Tour = ({ id, image, info, name, price }) => {
  const [readMore, setReadMore] = useState(false);
  // Single tour component
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ color: "#ff7300" }}
        >
          {price}/-
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <Box onClick={preventDefault}>
            <Link
              href="#"
              underline="none"
              onClick={() => {
                setReadMore(!readMore);
              }}
            >
              {readMore ? "show less" : "read more"}
            </Link>
          </Box>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Not interested</Button>
      </CardActions>
    </Card>
  );
};

export default Tour;
