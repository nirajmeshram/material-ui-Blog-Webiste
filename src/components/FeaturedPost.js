import { Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material'
import React from 'react'

function FeaturedPost() {
    return (
        <Container>
            <Card sx={{padding: "20px" }} >
                <CardContent sx={{fontFamily:"Montserrat"}}>
                    <Typography variant="h4" sx={{textTransform:'uppercase'}}>A Doorstep solution of your windows and doors </Typography>
                    <Typography variant="p">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="outlined" color="inherit">Read More...</Button>
                </CardActions>
            </Card>
        </Container>
    )
}

export default FeaturedPost
