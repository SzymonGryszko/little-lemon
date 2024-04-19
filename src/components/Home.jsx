import React from 'react';
import { Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import dish1 from '../images/dish1.jpg';
import dish2 from '../images/dish2.jpg';
import dish3 from '../images/dish3.jpg';

function Home() {
    const dishes = [
      { name: 'Salad', description: 'Fresh salad with assorted greens and homemade dressing.', image: dish1 },
      { name: 'Pasta', description: 'Delicious pasta with your choice of sauce and toppings.', image: dish2 },
      { name: 'Fish', description: 'Grilled fish served with seasonal vegetables and lemon butter sauce.', image: dish3 }
    ];
  
    return (
      <Container>
        <Typography variant="h2" align="center" gutterBottom>
          Welcome to Little Lemon Restaurant
        </Typography>
        <Typography variant="body1" align="center" paragraph>
          We pride ourselves on offering the finest dining experience with a touch of elegance and charm.
        </Typography>
        <Grid container spacing={3}>
          {dishes.map((dish, index) => (
            <Grid item key={index} xs={12} sm={4}>
              <Card>
                <CardMedia
                  component="img"
                  image={dish.image}
                  alt={dish.name}
                />
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    {dish.name}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {dish.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    );
  }
  
  export default Home;