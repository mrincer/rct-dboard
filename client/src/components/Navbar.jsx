import React from 'react';
import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined } from '@mui/icons-material';
import FlexBetween from './FlexBetween';
import { useDispatch } from 'react-redux';
import { setMode } from '../state';
import profileImage from '../assets/profile.jpg'
import { useTheme } from '@emotion/react';
import { AppBar } from '@mui/material';
const Navbar = () => {
    const dispatch = useDispatch();
    const theme = useTheme();
    return <AppBar
    sx={{
        position: "static",
        bacground:"none",
        boxShadow:"none"
    }}
    >
        <Toolbar sx={{justifyContent:"space-between"}}>
            
        </Toolbar>
    </AppBar>
}

export default Navbar