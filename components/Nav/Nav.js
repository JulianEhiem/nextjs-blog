import * as React from 'react';
import {
  SvgIcon,
  alpha,
  AppBar,
  Box,
  Button,
  Container, Grid,
  IconButton,
  Menu,
  MenuItem, styled,
  Toolbar,
  Typography, useScrollTrigger, Icon,
} from '@mui/material';
import { useRouter } from 'next/router';
import MenuIcon from '@mui/icons-material/Menu';
import InputBase from '@mui/material/InputBase';
import { Search, Adb } from '@mui/icons-material';
import { useEffect } from 'react';
import { Logo } from '../../public/vercel.svg';
// import { Logo } from '../../public/BlogLogo-01.svg';
// import { ReactComponent as Logo } from '../../public/BlogLogo-01.svg';
import styles from './nav.module.css';
import BrandLogo from './BrandLogo';
import BrandLogo2 from './BrandLogo2';

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
  padding: theme.spacing(0, theme.breakpoints.up('sm') ? 1 : 2),
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

const ElevationScroll = (props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 20,
  });
  return React.cloneElement(children, {
    // elevation: trigger ? 4 : 0,
    style: { background: trigger ? '#f9f4ec' : 'transparent', boxShadow: trigger ? '0 5px 5px  -3px rgb(0 0 0 /20%)' : 'none' },
  });
};

// ElevationScroll.propTypes = {children: PropTypes.element.isRequired}
// const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
function HomeIcon(props) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

function LogoIcon(props) {
  return (
  // eslint-disable-next-line react/jsx-props-no-spreading
    <SvgIcon {...props}>
      <path d="M141.04 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.46 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM248.72 16c-11.04 0-19 7.2-19 18s8.96 18 20 18c6.67 0 12.55-2.64 16.19-7.09l-7.65-4.42c-2.02 2.21-5.09 3.5-8.54 3.5-4.79 0-8.86-2.5-10.37-6.5h28.02c.22-1.12.35-2.28.35-3.5 0-10.79-7.96-17.99-19-17.99zm-9.45 14.5c1.25-3.99 4.67-6.5 9.45-6.5 4.79 0 8.21 2.51 9.45 6.5h-18.9zM200.24 34c0 6 3.92 10 10 10 4.12 0 7.21-1.87 8.8-4.92l7.68 4.43c-3.18 5.3-9.14 8.49-16.48 8.49-11.05 0-19-7.2-19-18s7.96-18 19-18c7.34 0 13.29 3.19 16.48 8.49l-7.68 4.43c-1.59-3.05-4.68-4.92-8.8-4.92-6.07 0-10 4-10 10zm82.48-29v46h-9V5h9zM36.95 0L73.9 64H0L36.95 0zm92.38 5l-27.71 48L73.91 5H84.3l17.32 30 17.32-30h10.39zm58.91 12v9.69c-1-.29-2.06-.49-3.2-.49-5.81 0-10 4-10 10V51h-9V17h9v9.2c0-5.08 5.91-9.2 13.2-9.2z" fill="#000" />
    </SvgIcon>
  );
}

export default function Nav() { // Creating a component state for Menu open status
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const router = useRouter();
  const pages = [
    { name: 'Home', route: '/' },
    { name: 'Portfolio', route: 'https://julianehiem.dev/' },
    { name: 'Github', route: 'https://github.com/JulianEhiem' }];

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleResize = () => {
    if (window.innerWidth > 600) {
      handleCloseNavMenu();
    }
  };
  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  return (
    <ElevationScroll props>

      <AppBar id="appBar" position="fixed" className={styles.appContainer} sx={{ top: 0, background: 'transparent' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Grid container spacing={4} justifyContent="space-between" alignItems="center">
              <Grid item sx={{ display: { xs: 'flex', sm: 'none' }, order: -1 }}>
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
              <Grid item sx={{ display: { xs: 'none', sm: 'flex' }, order: 2 }}>
                <Box sx={{ flexGrow: 1, display: 'flex' }}>
                  {pages.map((page) => (
                    <Button
                      key={page.name}
                      onClick={handleCloseNavMenu}
                      href={page.route}
                      target={page.name !== 'Home' ? '_blank' : ''}
                      className={styles.menuButtons}
                      sx={{
                        my: 2, mx: { sm: 1, md: 1, lg: 5 }, color: '#000', display: 'block',
                      }}
                    >
                      {page.name}
                    </Button>
                  ))}
                </Box>
              </Grid>
              <Grid item sx={{ order: { xs: 2, sm: 1 } }}>
                <IconButton
                  sx={{
                    borderRadius: '15%',
                  }}
                  href="/"
                >
                  <SvgIcon sx={{ fontSize: '4rem' }} viewBox="12 8 10 15">
                    <BrandLogo2 />
                  </SvgIcon>
                  <Typography
                    variant="h5"
                    noWrap
                    sx={{
                      display: { xs: 'none', md: 'inline-flex' },
                      fontFamily: 'Abril Fatface',
                      cursor: 'pointer',
                      color: '#000',
                    }}
                  >
                    Parsing the&nbsp;
                    <span className={styles.mark}>Code</span>
                  </Typography>
                </IconButton>

              </Grid>
              <Grid item xs={4} sx={{ order: 3 }}>
                <SearchBox sx={{ maxWidth: '400px' }}>
                  <SearchIconWrapper>
                    <Search />
                  </SearchIconWrapper>
                  <StyledInputBase
                    placeholder="Search..."
                    inputProps={{ 'aria-label': 'search' }}
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
                display: { xs: 'block', md: 'none' },
                '& .MuiMenu-paper': {
                  background: 'transparent',
                  fontFamily: 'Abril Fatface, serif',
                },

              }}
            >
              {pages.map((page) => (
                <MenuItem
                  key={page.name}
                  onClick={() => {
                    if (page.name === 'Home')router.push(page.route);
                    window.location.href = page.route;
                  }}
                >
                  <Typography textAlign="center">{page.name}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Toolbar>
        </Container>

      </AppBar>

    </ElevationScroll>
  );
}
