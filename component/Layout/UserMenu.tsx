import { Avatar, AvatarProps, Button, Box, Tooltip, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";

const UserAvatar = () => {
    const [loginState, setLoginState] = useState(false);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const handleLogin = () => {
        setLoginState(true);
    };
    const handleLogout = () => {
        setLoginState(false);
        setAnchorElUser(null);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElUser(event.currentTarget);
    }
    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    const handleGo2UserProfile = () => {
        handleCloseUserMenu();
    }
    if(loginState) {
        const avatarSize = {
            width: 24,
            height: 24,
        };
        return (
            <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="用户设置">
                    <IconButton onClick={handleOpenUserMenu}>
                        <Avatar
                            alt="user_avatar" 
                            src="avatar-demo.jpg" 
                            sx={avatarSize} 
                        />
                    </IconButton>
                </Tooltip>
                <Menu 
                    sx={{ mt: '45px' }}
                    id="user-menu"
                    anchorEl={anchorElUser}
                    anchorOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    open={Boolean(anchorElUser)}
                    onClose={handleCloseUserMenu}
                >
                    <MenuItem key='profile' onClick={handleGo2UserProfile}>
                        <Typography textAlign='center'>用户主页</Typography>
                    </MenuItem>
                    <MenuItem key='logout' onClick={handleLogout}>
                        <Typography textAlign='center'>登出</Typography>
                    </MenuItem>
                </Menu>
            </Box>
        )
    }
    else {
        return (
            <Button color="inherit" onClick={handleLogin} >登录</Button>
        )
    }
}

export default UserAvatar;