import React from 'react'
import { AppBar, Toolbar, Typography, Divider, Badge, Box } from '@mui/material'
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import Notifications from '@mui/icons-material/Notifications';




const Header = () => {
    return (
        <div>
            <Toolbar>
                <IconButton sx={{ ml: 3 }} color="inherit">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6"  >
                    Bloging Website test
                </Typography>
                <Box sx={{ marginLeft: 'auto' }}>
                    <IconButton color="inherit" sx={{ marginLeft: 'auto' }}>
                        <Badge badgeContent={4} color="error">
                            <Notifications />
                        </Badge>
                    </IconButton>
                    <IconButton color="inherit" sx={{ marginLeft: 'auto' }} >
                        <AccountCircleIcon />
                    </IconButton>
                </Box>
            </Toolbar>
            <Divider />
            <Toolbar sx={{textTransform:'uppercase'}} >
                Express your emotions through your words
            </Toolbar>
        </div>
    )
}

export default Header
