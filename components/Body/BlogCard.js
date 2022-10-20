import { useRouter } from 'next/router';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import BlockContent from '@sanity/block-content-to-react';
import * as React from 'react';
import Image from 'next/image';
import imageUrlBuilder from '@sanity/image-url';

const screenSizes = {
  sm: 600, md: 900, lg: 1200, xl: 1536,
};

export default function BlogCard({
  // eslint-disable-next-line react/prop-types
  format, post: {
    // eslint-disable-next-line react/prop-types
    body, mainImage, slug, title,
  },
}) {
  const router = useRouter();

  const inSafari = navigator.userAgent.match(/AppleWebKit/) && !navigator.userAgent.match(/Chrome/);

  const largeScreen = inSafari ? false : window.innerWidth >= screenSizes.lg;

  const widthProvider = () => {
    if (window.innerWidth > 1200) {
      if (format === 75) return 225;
      return 450;
    }
    return 345;
  };

  const heightProvider = () => {
    if (window.innerWidth > 1200) {
      if (format === 75) return 250;
      return inSafari ? 250 : 335;
    }
    return 250;
  };

  const imgBuilder = imageUrlBuilder({
    projectId: 'nttcyj7x',
    dataset: 'production',
  });

  // const imageURL = `${mainImage.toString()}&w=${widthProvider()}&h=${heightProvider()}`;
  // eslint-disable-next-line max-len
  const imageURL = imgBuilder.image(mainImage).width(widthProvider()).height(heightProvider()).toString();
  // console.log(imageURL);
  // console.log(imageURL);

  return (
    <Box sx={{ display: 'flex', marginX: '0.5rem' }} justifyContent="center">
      <Card
        elevation={window.innerWidth > screenSizes.md ? 0 : 2}
        sx={{
          maxWidth: { xs: 345, lg: 'unset' },
          background: 'transparent',
          borderRadius: 0,
          cursor: 'pointer',
          width: '100%',
          ':hover': {
            transform: 'scale(1.01, 1.01)',
          },
        }}
        /* eslint-disable-next-line react/prop-types */
        onClick={() => router.push(`/post/${slug.current}`)}
      >
        {!(format < 75 && largeScreen) ? (
          <CardMedia
            sx={{
              position: 'relative',
              height: (format === 75 && largeScreen) ? 250 : 'unset',
              maxHeight: { xs: 'unset', lg: 350 },
              marginBottom: { lg: '1.2rem' },
              overflowY: { xs: 'hidden', lg: 'hidden' },
              width: '100%',
            }}
          >
            <Image
              src={imageURL}
              alt={slug}
              layout="responsive"
              width={widthProvider()}
              height={heightProvider()}
              priority={format >= 75}
            />
          </CardMedia>
        ) : <div />}

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
            // className={styles.blogBody}
            sx={{
              display: { xs: '-webkit-inline-box', md: `${((format === 75 && largeScreen) || inSafari) ? 'none' : '-webkit-inline-box'}` },
              overflow: 'hidden',
              fontFamily: 'Roboto, Helvetica, Arial',
              fontWeight: 400,
              fontSize: '1rem',
              WebkitBoxOrient: 'vertical',
              // eslint-disable-next-line consistent-return
              WebkitLineClamp: (largeScreen) ? () => {
                switch (format) {
                  case 100: return 10;
                  case 75: return 1;
                  case 60: return 11;
                  case 50: return 9;
                  case 40: return 6;
                  default:
                    break;
                }
              } : 1,
              lineHeight: 1.9,
              textAlign: 'justify',
              marginBottom: 0,
            }}
            variant="string"
            color="text.secondary"
          >
            { navigator.userAgent.match(/AppleWebKit/) && !navigator.userAgent.match(/Chrome/)
              ? 'this is safari brower and only safari brower' : ''}
            <BlockContent blocks={body} />
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
}
