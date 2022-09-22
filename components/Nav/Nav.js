import * as React from 'react';
import styles from "./nav.module.css";
import { useRouter } from 'next/router'
import MenuIcon from '@mui/icons-material/Menu';
import {
    alpha,
    AppBar,
    Box,
    Button,
    Container,
    IconButton,
    Menu,
    MenuItem,
    styled,
    Toolbar,
    Typography
} from "@mui/material";
import InputBase from '@mui/material/InputBase';
import {Search, Adb} from "@mui/icons-material";

const SearchBox = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
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
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
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

export default function Nav() {
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

  return (
    // <div className={styles.navContainer}>
    //   <div onClick={() => router.push('/')}> <h3>Home</h3> </div>
    //   <div target ="_blank" onClick={() => window.location.href = 'https://julianehiem.dev/'}> <h3>Portfolio</h3> </div>
    //   <div onClick={() => window.location.href = 'https://github.com/JulianEhiem'}> <h3>Github</h3> </div>
    // </div>
      <AppBar position="static" className={styles.appContainer}>
        <Container maxWidth="xl">
            <Toolbar disableGutters>
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
                <IconButton>
                    {/*TODO: add personal icon*/}
                    <Adb />
                </IconButton>
                <Typography
                    variant="h6"
                    noWrap
                    href="/"
                    sx={{
                        display:  {xs: "none", md: "flex"},
                    }}
                >
                    Parse the Text
                </Typography>
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
                {/*<Button variant="text" className={styles.menuButtons}>*/}
                {/*    Hello*/}
                {/*</Button>*/}
                <SearchBox>
                    <SearchIconWrapper>
                        <Search />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder = "Search..."
                        inputProps = {{'aria-label': 'search'}}
                    />
                </SearchBox>

            </Toolbar>
        </Container>
      </AppBar>
  );
}
