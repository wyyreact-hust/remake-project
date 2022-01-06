import React from "react";
import { AppBar, Toolbar, Box, Typography, Button, IconButton, Menu, Drawer } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import PAGES from "../../constants/pages";
import UserMenu from "./UserMenu";
import SearchBar from "../SearchBar";
import ResponsiveDrawer from "./Drawer"

const HeaderBar = () => {
    const loginState = false;
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{backgroundColor: "#ec4141"}}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        sx={{ mr: 2 }}
                        onClick={() => }
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >发现</Typography>
                    <SearchBar />
                    <UserMenu />
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default HeaderBar;