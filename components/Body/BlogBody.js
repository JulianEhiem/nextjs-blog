import * as React from 'react';
import styles from "./blogBody.module.css";
import BlogRight from "./BlogRight/BlogRight";
import BlogLeft from "./BlogLeft/BlogLeft";
import BlogMain from "./BlogMain/BlogMain";
import {useContext, useEffect} from "react";
import { PostContext } from "../PostContext";
import { useRouter } from "next/router"
import {Box, Container, Grid, styled, Typography} from "@mui/material";
import BlogPageOne from "./BlogMain/BlogPageOne";
import BlogPositionOne from "./BlogPositions/BlogPostionOne/BlogPositionOne";
import BlogPositionTwo from "./BlogPositions/BlogPostionTwo/BlogPositionTwo";
import BlogPositionThree from "./BlogPositions/BlogPostionThree/BlogPositionThree";
import BlogPositionFour from "./BlogPositions/BlogPostionFour/BlogPositionFour";
import BlogPositionFive from "./BlogPositions/BlogPostionFive/BlogPositionFive";
import BlogPositionSix from "./BlogPositions/BlogPostionSix/BlogPositionSix";
import BlogPositionSeven from "./BlogPositions/BlogPostionSeven/BlogPositionSeven";
import BlogCard from "./BlogCard";
// import BlockContent from '@sanity/block-content-to-react';
// import dummyFallBack from '../../DummyFallBack'

const StyledBox = styled(Box)(({theme}) => ({
    height: 'unset',
    background: "lightblue"
}))

export default function BlogBody() {
    // const [windowSize, setWindowSize] = React.useState(window.innerWidth);
    // useEffect(() => {
    //     window.addEventListener('resize', setWindowSize(window.innerWidth))
    // })
  const router = useRouter();
  const posts = useContext(PostContext)
  const post = posts.mappedPosts.reverse()
// const post = [1,2]
  // const title = post.length === 0 ? "Loading" : post[0].title;
  // const image = post.length === 0 ? "Loading" : post[0].mainImage;
  // const body = post.length === 0 ? dummyFallBack : post[0].body;

  return (
    <>
    {/*  <div className={styles.blogBodyContainer}>*/}
    {/*    <BlogMain />*/}
    {/*    <BlogLeft />*/}
    {/*    <BlogRight />*/}
    {/*  </div>*/}
    {/*  <div className={styles.titleContainer}>*/}
    {/*  <h2>Older posts</h2>*/}
    {/*</div>*/}
    {/*  <div className={styles.additionalPosts}>*/}
    {/*    {post.length < 7 ? <h2>Nothing here</h2> :*/}
    {/*    post.slice(6).map((p, index) => (*/}
    {/*      <div onClick = {() => router.push(`/post/${p.slug.current}`)} key = {index} className={styles.additionalPostsContainer}>*/}
    {/*        <div className={styles.additionalPostsImage}>*/}
    {/*          <img src={p.mainImage} width="100%"/>*/}
    {/*        </div>*/}
    {/*        <div className={styles.additionalPostsTitle}>*/}
    {/*          <h1>{p.title}</h1>*/}
    {/*        </div>*/}
    {/*        /!* <div className={styles.additionalPostsBody}>*/}
    {/*          <p>*/}
    {/*          <BlockContent blocks={p.body} className={styles.postsBody}/>*/}
    {/*          </p>*/}
    {/*        </div> *!/*/}
    {/*      </div>*/}
    {/*    ))*/}
    {/*    }*/}
    {/*  </div>*/}


      <Container id="main" maxWidth="xl" sx={{height: '100vh'}}>
          <Box  my={4}>
              <Typography
                  variant="h6"
                  noWrap
                  sx={{
                      display: "block",
                      fontFamily: "Abril Fatface",
                      borderBottom: "1px solid #000",
                      width: "min-content",
                      margin: "auto",
                  }}
              >
                  Latest Posts
              </Typography>
          </Box>

          {post.length === 0 ?
              <h2>nothing</h2> :
  //             <Box
  //                 sx={{
  //                     display: 'grid',
  //                     gridTemplateColumns: 'repeat(4, 1fr)',
  //                     gap: 1,
  //                     gridTemplateRows: 'auto',
  //                     gridTemplateAreas: `"header header header header"
  // "main main . sidebar"
  // "footer footer footer footer"`,
  //                 }}
  //             >
  //                 <Box sx={{ gridArea: 'header', bgcolor: 'primary.main' }} >Header</Box>
  //                 <Box sx={{ gridArea: 'main', bgcolor: 'secondary.main' }}>Main</Box>
  //                 <Box sx={{ gridArea: 'sidebar', bgcolor: 'error.main' }}>Sidebar</Box>
  //                 <Box sx={{ gridArea: 'footer', bgcolor: 'warning.dark' }}>Footer</Box>
  //             </Box>
  //             <Grid container spacing={2} className={styles.gridLayout}>
  //             <Grid item xs={12} sm={6} md={3}>
  //             <BlogCard id="postA" post={post[0]} />
  //             </Grid>
  //             <Grid item xs={12} sm={6} md={4}>
  //             <BlogCard id="postB" post={post[1]} />
  //             </Grid>
  //             <Grid item xs={12} sm={6} md={2}>
  //             <BlogCard id="postC" post={post[2]} />
  //             </Grid>
  //             <Grid item xs={12} sm={6} md={3}>
  //             <BlogCard id="postD" post={post[3]} />
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //             <BlogCard id="postE" post={post[4]} />
  //             </Grid>
  //             <Grid item xs={12} sm={6}>
  //             <BlogCard id="postF" post={post[5]} />
  //             </Grid>
  //             <Grid item xs={12}>
  //             <BlogCard id="postG" post={post[6]} />
  //             </Grid>
  //             </Grid>
              <StyledBox container spacing={2} className={styles.gridLayout}>
                    <BlogCard id="postA" post={post[0]} format={50} />
                    <BlogCard id="postB" post={post[1]} format={100} />
                    <BlogCard id="postC" post={post[2]} format={75} />
                    <BlogCard id="postD" post={post[3]} format={50} />
                    <BlogCard id="postE" post={post[4]} format={50} />
                    <BlogCard id="postF" post={post[5]} format={75} />
                    <BlogCard id="postG" post={post[6]} format={50} />
              </StyledBox>
          }
      </Container>
    </>
  );
}
