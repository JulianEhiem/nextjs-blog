import * as React from 'react';
import styles from "./nav.module.css";
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu';
import {
    alpha,
    AppBar,
    Box,
    Button,
    Container, Grid,
    IconButton,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import InputBase from '@mui/material/InputBase';
import {Search, Adb} from "@mui/icons-material";
import {useEffect} from "react";

// Creating custom styled components
const SearchBox = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.black, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.black, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, theme.breakpoints.up('sm')? 1 : 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(3)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));

export default function Nav() {// Creating a component state for Menu open status
const [anchorElNav, setAnchorElNav] = React.useState(null);
const router = useRouter();
const pages = [
    {name: "Home", route: '/'},
    {name: "Portfolio", route: 'https://julianehiem.dev/'},
    {name: "Github", route: 'https://github.com/JulianEhiem'}];

const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
}
const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
}
const handleResize = () => {
    if (window.innerWidth > 600){
        handleCloseNavMenu()
    }
}
useEffect(() => {
    window.addEventListener("resize", handleResize)
})

  return (
      <AppBar position="static" className={styles.appContainer}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
                <Grid container spacing={4} justifyContent="space-between" alignItems={"center"}>
                    <Grid item sx={{display: {xs: 'flex', sm: 'none'}, order: -1}}>
                        <IconButton
                            size="large"
                            aria-label="menu options"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                    </Grid>
                    <Grid item sx={{ display: { xs: 'none', sm: 'flex' }, order: 2}}>
                        <Box sx={{ flexGrow: 1, display: 'flex'}}>
                            {pages.map((page) => (
                                <Button
                                    key={page.name}
                                    onClick={handleCloseNavMenu}
                                    href={page.route}
                                    target={page.name !== "Home" ? "_blank" : ""}
                                    className={styles.menuButtons}
                                    sx={{ my: 2, mx: {sm: 1, md: 2, lg: 5}, color: 'white', display: 'block' }}
                                >
                                    {page.name}
                                </Button>
                            ))}
                        </Box>
                    </Grid>
                    <Grid item  sx={{order: {xs: 2, sm: 1}}}>
                        <IconButton
                            href="/"
                        >
                            {/*TODO: add personal icon*/}
                            <Adb />
                        </IconButton>
                        <Typography
                            variant="h5"
                            noWrap
                            sx={{
                                display:  {xs: "none", md: "inline-flex"},
                                fontFamily: "Abril Fatface",
                                cursor: "pointer",
                            }}
                        >
                            Parsing the&nbsp;<span className={styles.mark}>Code</span>
                        </Typography>
                    </Grid>
                    <Grid item xs={4} sx={{ order: 3}}>
                        <SearchBox sx={{maxWidth: '400px'}}>
                            <SearchIconWrapper>
                                <Search />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder = "Search..."
                                inputProps = {{'aria-label': 'search'}}
                            />
                        </SearchBox>
                    </Grid>
                </Grid>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                    display: {xs: 'block', md: 'none'},
                    '& .MuiMenu-paper':{
                        background: 'transparent',
                        fontFamily: "Abril Fatface, serif",
                    },

                }}
                >
                    {pages.map((page) => (
                        <MenuItem key={page.name} onClick={() => {
                            if(page.name === "Home")router.push(page.route)
                            window.location.href = page.route;
                        }}>
                            <Typography textAlign="center">{page.name}</Typography>
                        </MenuItem>
                        ))}
                </Menu>
            </Toolbar>
        </Container>
      </AppBar>
  );
}