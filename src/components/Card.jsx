import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import MMMUT_IMG from '../Images/image.png'

export default function MediaCard() {
  return (
    <Card sx={{ maxWidth: 700 }} className='mt-9'>
      <CardMedia
        sx={{ height: 250 }}
        image={MMMUT_IMG}
        title="MMMUT"
      />
              <style>
            @import url('https://fonts.googleapis.com/css2?family=Baskervville+SC&family=Bodoni+Moda+SC:ital,opsz,wght@0,6..96,400..900;1,6..96,400..900&family=Bungee+Tint&family=Space+Grotesk:wght@300..700&display=swap');
        </style>
      <CardContent className='bg-[#eee0e0] font-para '>
        <Typography variant="body2" sx={{ color: 'text.secondary', fontFamily: 'para', fontSize: 18, textAlign: 'center'}}>
        With a legacy of excellence since 1962, you are part 
                        of a vibrant community that blends tradition with modern 
                        education and is dedicated to support your academic and professional journey.
        </Typography>
      </CardContent>

    </Card>
  );
}
