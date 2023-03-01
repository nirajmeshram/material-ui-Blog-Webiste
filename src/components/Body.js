import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import { Container, Toolbar, Card, CardActionArea, CardActions, Button, CardMedia, CardContent, Typography } from '@mui/material';

export default function Body() {
    return (

        <Container maxWidth="sm" sx={{ mt: 2 }} >
            <Toolbar>
                <Card sx={{ minWidth:400 }}>
                    <CardActionArea>
                        <Toolbar>
                            <CardContent>
                                <Typography variant="h6" gutterBottom >Pizza</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardMedia component="img" height="" image="https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.webp?s=1024x1024&w=is&k=20&c=jFhiloPJDC_NMMEfaMxhaRiqF_53AAnFfMQyOayVz_Y=" />
                        </Toolbar>
                    </CardActionArea>
                    <CardActions >
                        <Button color="primary">test</Button>
                    </CardActions>
                </Card>
                <Card sx={{ minWidth:400 }}>
                    <CardActionArea>
                        <Toolbar>
                            <CardContent>
                                <Typography variant="h6" gutterBottom >Pizza</Typography>
                                <Typography variant="body2" color="text.secondary">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000
                                    species, ranging across all continents except Antarctica
                                </Typography>
                            </CardContent>
                            <CardMedia component="img"  image="https://media.istockphoto.com/id/1349560847/photo/sausage-and-vegetable-pizza-on-dark-background.webp?s=1024x1024&w=is&k=20&c=jFhiloPJDC_NMMEfaMxhaRiqF_53AAnFfMQyOayVz_Y=" />
                        </Toolbar>
                    </CardActionArea>
                    <CardActions >
                        <Button color="primary">test</Button>
                    </CardActions>
                </Card>
            </Toolbar>
        </Container>
    );
}