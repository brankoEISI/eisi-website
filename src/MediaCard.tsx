import * as React from 'react';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import "./MediaCard.css";

type CardProps = {
  children?: React.ReactNode;
  header: React.ReactElement;
  body: React.ReactElement;
  image: any;
};

export const MediaCard = ({header, body, image}: CardProps) => {
  return (
    <Card className="Card" sx={{ width: 870, backgroundColor: "rgba(99, 95, 85, 0.4)", marginBottom: 5 }}>
      <CardContent className="CardContent">
        {header}
        {body}
      </CardContent>
    </Card>
  );
}

export default MediaCard