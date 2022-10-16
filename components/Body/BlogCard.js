import { useRouter } from 'next/router';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import BlockContent from '@sanity/block-content-to-react';
import * as React from 'react';

const screenSizes = {
  sm: 600, md: 900, lg: 1200, xl: 1536,
};

// eslint-disable-next-line react/prop-types
export default function BlogCard({
  // eslint-disable-next-line react/prop-types
  format, post: {
  // eslint-disable-next-line react/prop-types
    body, mainImage, slug, title,
  },
}) {
  const router = useRouter();
  return (
    <Box sx={{ display: 'flex', marginX: '0.6rem' }} justifyContent="center">
      <Card
        elevation={window.innerWidth > screenSizes.md ? 0 : 2}
        sx={{
          maxWidth: { xs: 345, lg: 450 },
          // maxWidth: {xs: 345},
          background: 'transparent',
          borderRadius: 0,
          cursor: 'pointer',
          ':hover': {
            transform: 'scale(1.01, 1.01)',
          },
        }}
        /* eslint-disable-next-line react/prop-types */
        onClick={() => router.push(`/post/${slug.current}`)}
      >
        {/* eslint-disable-next-line react/jsx-no-useless-fragment */}
        {(format < 75 && window.innerWidth > screenSizes.lg) ? <></>
          : (
            <CardMedia
              component="img"
              alt="green iguana"
                            // height={window.innerWidth < screenSizes.md ? 160: 180}
                            // height={{xs: "160px", lg: "50px"}}
                            // height= "50"
              sx={{
                height: format === 75 ? 250 : 'unset',
                maxHeight: { xs: 160, lg: 350 },
                marginBottom: { lg: '1rem' },
                // borderRadius: 0
              }}
                // eslint-disable-next-line react/destructuring-assignment,react/prop-types
              image={mainImage.toString()}
            />
          )}

        <CardContent sx={{ padding: { lg: '0 0 24px' } }}>
          <Typography
            variant="h5"
            component="div"
            sx={{
              fontFamily: 'Abril Fatface, serif',
              fontSize: '1.65rem',

            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              display: { xs: '-webkit-box', md: `${(format === 75 && window.innerWidth >= screenSizes.lg) ? 'none' : '-webkit-box'}` },
              overflow: 'hidden',
              fontFamily: 'Roboto, Helvetica, Arial',
              fontWeight: 400,
              // fontSize: "0.875rem",
              fontSize: '1rem',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: (window.innerWidth >= screenSizes.lg) ? () => {
                switch (format) {
                  case 100: return 10;
                  case 75: return 1;
                  case 60: return 11;
                  case 50: return 9;
                  case 40: return 6;
                  default: return 1;
                }
              } : 1,
              lineHeight: 1.9,
              textAlign: 'justify',
            }}
                            // variant="body2"
            variant="string"
            color="text.secondary"
          >
            <BlockContent blocks={body} />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
