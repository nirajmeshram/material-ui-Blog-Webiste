import * as React from 'react';
import Grid from '@mui/material/Grid';
import { Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Hidden, Typography } from '@mui/material';
import { featuredPosts } from './data/Data';
import { Container } from '@mui/system';


export default function PostCard() {
    return (
        <Container>
            <Grid container spacing={2}>
                {
                    featuredPosts.map((post) => (
                        <Grid item md={6} sm={12} xs={12} key={post.title}>
                            <Card >
                                <CardActionArea style={{ display: "flex", height: "100%" }}>
                                    <CardContent style={{ flex: 1 }}>
                                        <Typography variant='h6'>{post.title}</Typography>
                                        <Typography variant='p'>{post.description}</Typography>
                                    </CardContent>
                                    <CardMedia
                                        sx={{ display: { xs: "none", md: "block", sm: "block" } }}
                                        component="img"
                                        image="https://source.unsplash.com/random/200x200"
                                        style={{ width: 200 }}
                                    />
                                </CardActionArea>
                                <CardActions>
                                    <Button variant="outlined" color="secondary">Read Post</Button>

                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>

        </Container>
    );
}
