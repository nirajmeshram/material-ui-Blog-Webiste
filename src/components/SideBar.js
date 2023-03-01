import { Card, CardActionArea, CardContent, Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'
import { sidebar } from './data/Data'

const SideBar = ({ title, description, archives }) => {
    return (
        <div>
            <Card gutterBottom>
                <CardActionArea>
                    <CardContent>
                        <Typography variant='h5'>
                            {title}
                        </Typography>
                        <Typography variant='body1'>
                            {description}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
            <Grid item md={4}>
                <Typography>Archives</Typography>
                {
                    archives.map(archive => (
                        <Link key={archive.title} href='#' variant='body2'>
                            {archive.title}
                        </Link>
                    ))
                }
            </Grid>
        </div>
    )
}

export default SideBar
