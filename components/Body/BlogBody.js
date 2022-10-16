import * as React from 'react';
import { useContext, useEffect, useState } from 'react';
import { Responsive, WidthProvider } from 'react-grid-layout';
import sizeMe from 'react-sizeme';
import { useRouter } from 'next/router';
import {
  Box, Button, Container, Typography,
} from '@mui/material';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import BlogCard from './BlogCard';
import { PostContext } from '../PostContext';

const ResponsiveGridLayout = WidthProvider(Responsive);

function BlogBody(props) {
  // eslint-disable-next-line react/destructuring-assignment,react/prop-types
  const { height } = props.size;
  const layout1 = [
    {
      i: 'postA', x: 0.2, y: 0, w: 2.8, h: 3,
    },
    {
      i: 'postB', x: 3, y: 0, w: 4, h: 5,
    },
    {
      i: 'postC', x: 7, y: 0, w: 2, h: 2.5,
    },
    {
      i: 'postD', x: 9, y: 0, w: 2.8, h: 2.5,
    },
    {
      i: 'postE', x: 0.2, y: 4, w: 2.8, h: 2,
    },
    {
      i: 'postF', x: 7, y: 3, w: 2, h: 2.5,
    },
    {
      i: 'postG', x: 9, y: 3, w: 2.8, h: 2.5,
    },
  ];
  const layout2 = [
    {
      i: 'postA', x: 0, y: 0, w: 5, h: 2.1,
    },
    {
      i: 'postB', x: 6, y: 0, w: 5, h: 2.1,
    },
    {
      i: 'postC', x: 0, y: 3, w: 5, h: 2.1,
    },
    {
      i: 'postD', x: 6, y: 3, w: 5, h: 2.1,
    },
    {
      i: 'postE', x: 0, y: 6, w: 5, h: 2.1,
    },
    {
      i: 'postF', x: 6, y: 6, w: 5, h: 2.1,
    },
    {
      i: 'postG', x: 0, y: 9, w: 10, h: 2.1,
    },
  ];
  const layout3 = [
    {
      i: 'postA', x: 0, y: 0, w: 12, h: 2,
    },
    {
      i: 'postB', x: 0, y: 4, w: 12, h: 2,
    },
    {
      i: 'postC', x: 0, y: 8, w: 12, h: 2,
    },
    {
      i: 'postD', x: 0, y: 12, w: 12, h: 2,
    },
    {
      i: 'postE', x: 0, y: 16, w: 12, h: 2,
    },
    {
      i: 'postF', x: 0, y: 20, w: 12, h: 2,
    },
    {
      i: 'postG', x: 0, y: 24, w: 12, h: 2,
    },
  ];

  const layouts = { lg: layout1, md: layout2, sm: layout3 };

  const getLayouts = () => {
    let layout;
    switch (height) {
      case height < 601:
        layout = layout3;
        break;
      case height > 600 && height <= 900:
        layout = layout2;
        break;
      case height > 900:
        layout = layout1;
        break;
      default:
        layout = layout3;
        break;
    }
    return layout;
  };
  // eslint-disable-next-line no-use-before-define
  const [layout = getLayouts(), setLayout] = React.useState(layout);
  const [display, setDisplay] = useState(false);

  useEffect(() => {
    window.addEventListener('resize', setLayout(getLayouts()));
  });
  useRouter();
  const posts = useContext(PostContext);
  const post = posts.mappedPosts;
  const latestPosts = post.slice(-7);
  const oldPosts = post.slice(0, -7);

  return (
    <Container id="main" maxWidth="xl" disableGutters sx={{ height: 'unset', margin: 'auto', boxSizing: 'border-box' }}>
      <Box my={4} id="latestPosts">
        <Typography
          variant="h6"
          noWrap
          sx={{
            display: 'block',
            fontFamily: 'Abril Fatface',
            borderBottom: '1px solid #000',
            width: 'min-content',
            margin: 'auto',
          }}
        >
          Latest Posts
        </Typography>
      </Box>

      {post.length === 0
        ? <h2>nothing</h2>
        : (
          <ResponsiveGridLayout
            isDraggable={false}
            isResizable={false}
            layouts={layouts}
            breakpoints={{ lg: 1199, md: 900, sm: 600 }}
          >

            <Box key="postA" style={{ background: 'none' }}>
              <BlogCard id="postA" post={latestPosts[0]} format={60} />
            </Box>
            <Box key="postB" style={{ background: 'none' }}>
              <BlogCard id="postB" post={latestPosts[1]} format={100} />
            </Box>
            <div key="postC" style={{ background: 'none' }}>
              <BlogCard id="postC" post={latestPosts[2]} format={75} />
            </div>
            <div key="postD" style={{ background: 'none' }}>
              <BlogCard id="postD" post={latestPosts[3]} format={50} />
            </div>
            <div key="postE" style={{ background: 'none' }}>
              <BlogCard id="postE" post={latestPosts[4]} format={40} />
            </div>
            <div key="postF" style={{ background: 'none' }}>
              <BlogCard id="postF" post={latestPosts[5]} format={75} />
            </div>
            <div key="postG" style={{ background: 'none' }}>
              <BlogCard id="postG" post={latestPosts[6]} format={50} />
            </div>
          </ResponsiveGridLayout>
        )}
      <Box display={display ? 'none' : 'flex'} justifyContent="end">
        <Button variant="text" sx={{ color: 'purple', justifySelf: 'end' }} onClick={() => setDisplay(!display)} href={!display ? '#latestPosts' : '#olderPosts'}>
          {display ? 'Latest' : 'Older'}
          {' '}
          posts
          {display
            ? <KeyboardArrowUp fontSize="small" />
            : <KeyboardArrowDown fontSize="small" />}
        </Button>
      </Box>
      <Box my={4} sx={{ display: display === true ? 'block' : 'none' }}>
        {display
          ? (
            <>
              <Box
                id="olderPosts"
                sx={{
                  display: 'flex', gap: '1.3rem', flexWrap: 'wrap', justifyContent: 'center',
                }}
              >
                {oldPosts.map(() => (
                  <BlogCard post={post} key={post.id} format={75} />
                ))}
              </Box>
              <Box display="flex" justifyContent="end">
                <Button variant="text" sx={{ color: 'purple', justifySelf: 'end' }} onClick={() => setDisplay(!display)} href="#latestPosts">
                  Latest posts
                  {' '}
                  <KeyboardArrowUp fontSize="small" />
                </Button>
              </Box>
            </>
        // eslint-disable-next-line react/jsx-no-useless-fragment
          ) : <></>}
      </Box>
    </Container>
  );
}
export default sizeMe({ monitorHeight: true })(BlogBody);
