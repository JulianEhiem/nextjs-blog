import imageUrlBuilder from '@sanity/image-url';
import BlockContent from '@sanity/block-content-to-react';
import { useState, useEffect } from 'react';
import {
  Box, Container, styled, Typography,
} from '@mui/material';
import * as React from 'react';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';

// eslint-disable-next-line react/prop-types
function Post({ title, body, image }) {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: 'nttcyj7x',
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  const Offset = styled('div')(({ theme }) => theme.mixins.toolbar);
  return (
    <>
      <Box sx={{
        display: 'flex', width: '100vw', minHeight: '100vh', padding: '2rem', justifyContent: 'center',
      }}
      >
        <Nav />
        <Offset />
        <Box sx={{ display: 'block', maxWidth: 900, marginTop: '3rem' }}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              display: 'flex',
              fontFamily: 'Abril Fatface, serif',
              // fontSize: "1.65rem",
              justifyContent: 'center',
            }}
          >
            {title}
          </Typography>
          <Container maxWidth="xl">
            {imageUrl
                && (
                <Box sx={{
                  display: 'flex', justifyContent: 'center', minWidth: 300, maxWidth: 900, maxHeight: 450, margin: '2rem auto',
                }}
                >
                  <img style={{ width: '100%', objectFit: 'cover' }} src={imageUrl} alt="blog" />
                </Box>
                )}
            <Typography
              sx={{
                overflow: 'hidden',
                fontFamily: 'Roboto, Helvetica, Arial',
                fontWeight: 400,
                fontSize: '1rem',
                WebkitBoxOrient: 'vertical',
                lineHeight: 1.9,
                textAlign: 'justify',
              }}
              variant="string"
            >
              <BlockContent blocks={body} />
            </Typography>
          </Container>

        </Box>
      </Box>
      <Footer />
    </>
  );
}

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query = encodeURIComponent(`*[ _type == "post" && slug.current == "${pageSlug}" ]`);
  const url = `https://nttcyj7x.api.sanity.io/v1/data/query/production?query=${query}`;

  const result = await fetch(url).then((res) => res.json());

  const post = result.result[0];

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      title: post.title,
      body: post.body,
      image: post.mainImage,
    },
  };
};

export default Post;
