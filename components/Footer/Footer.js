import React from 'react';
import {
  AppBar, Box, Container, IconButton, Toolbar, Typography,
} from '@mui/material';
import { GitHub, LinkedIn } from '@mui/icons-material';

export default function Footer() {
  return (
    <AppBar id="appBar" position="static" elevation={8} sx={{ background: 'transparent' }}>
      <Container maxWidth="xl">
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Box flexDirection="row">
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <IconButton aria-label="linked In" href="https://www.linkedin.com/in/julianehiem" target="_blank">
                <LinkedIn />
              </IconButton>
              <IconButton aria-label="Github" href="https://github.com/JulianEhiem" target="_blank">
                <GitHub />
              </IconButton>
            </div>
            <Typography variant="body2" sx={{ color: 'black' }}>
              &copy;2022. All Rights reserved. &nbsp;
              <a
                href="https://github.com/JulianEhiem/nextjs-blog#license"
                target="_blank"
                style={{ textDecoration: 'underline', color: 'purple' }}
                rel="noreferrer"
              >
                License
              </a>
            </Typography>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
