import * as React from 'react';
import styles from "./blogBody.module.css";
import BlogRight from "./BlogRight/BlogRight";
import BlogLeft from "./BlogLeft/BlogLeft";
import BlogMain from "./BlogMain/BlogMain";
import {useContext, useEffect} from "react";
import { PostContext } from "../PostContext";
import { useRouter } from "next/router"
import {Box, Container, Grid, Typography} from "@mui/material";
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


      <Container maxWidth="xl" >
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
              <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
              <BlogCard post={post[0]} />
              </Grid>
              <Grid item xs={12} sm={6}>
              <BlogCard post={post[1]} />
              </Grid>
              <Grid item xs={12} sm={6}>
              <BlogCard post={post[2]} />
              </Grid>
              <Grid item xs={12} sm={6}>
              <BlogCard post={post[3]} />
              </Grid>
              <Grid item xs={12} sm={6}>
              <BlogCard post={post[4]} />
              </Grid>
              <Grid item xs={12} sm={6}>
              <BlogCard post={post[5]} />
              </Grid>
              <Grid item xs={12}>
              <BlogCard post={post[6]} />
              </Grid>
              </Grid>
          }
      </Container>
    </>
  );
}
