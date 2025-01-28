import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./MediaCard.css";

type CardProps = {
  children?: React.ReactNode;
  header: React.ReactElement;
  body: React.ReactElement;
  image: any;
};

export const MediaCard = ({header, body, image}: CardProps) => {
  return (
    <Card sx={{ width: 370, backgroundColor: "Grey", marginBottom: 5 }}>
      {image &&
        <CardMedia
          sx={{ height: 240 }}
          image={image}
          title="green iguana"
        />
      }
      <CardContent>
        {header}
        {body}
      </CardContent>
    </Card>
  );
}

export default MediaCard