import * as React from 'react';
import styles from "./blogBody.module.css";
import GridLayout, {Responsive, WidthProvider} from "react-grid-layout";
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
    // height: '800px',
    background: "lightblue"
}))

const ResponsiveGridLayout = WidthProvider(Responsive)

export default function BlogBody() {
    // const [windowSize, setWindowSize] = React.useState(window.innerWidth);
    // useEffect(() => {
    //     window.addEventListener('resize', setWindowSize(window.innerWidth))
    // })
  const router = useRouter();
  const posts = useContext(PostContext)
  const post = posts.mappedPosts.reverse()

    const layout1 = [
        {i: "postA", x: 0, y: 0, w: 3, h: 4},
        {i: "postB", x: 3, y: 0, w: 4, h: 6},
        {i: "postC", x: 7, y: 0, w: 2, h: 3},
        {i: "postD", x: 9, y: 0, w: 3, h: 3},
        {i: "postE", x: 0, y: 4, w: 3, h: 2},
        {i: "postF", x: 7, y: 3, w: 2, h: 3},
        {i: "postG", x: 9, y: 3, w: 3, h: 3},
    ]
    const layout2 = [
        {i: "postA", x: 0, y: 0, w: 6, h: 3},
        {i: "postB", x: 6, y: 0, w: 6, h: 3},
        {i: "postC", x: 0, y: 3, w: 6, h: 3},
        {i: "postD", x: 6, y: 3, w: 6, h: 3},
        {i: "postE", x: 0, y: 6, w: 6, h: 3},
        {i: "postF", x: 6, y: 6, w: 6, h: 3},
        {i: "postG", x: 0, y: 9, w: 12, h: 6},
    ]
    const layout3 = [
        {i: "postA", x: 0, y: 0, w: 12, h: 4},
        {i: "postB", x: 0, y: 4, w: 12, h: 4},
        {i: "postC", x: 0, y: 8, w: 12, h: 4},
        {i: "postD", x: 0, y: 12, w: 12, h: 4},
        {i: "postE", x: 0, y: 16, w: 12, h: 4},
        {i: "postF", x: 0, y: 20, w: 12, h: 4},
        {i: "postG", x: 0, y: 24, w: 12, h: 4},
    ]

    const layouts = {lg: layout1, md: layout2, sm: layout3}
// const post = [1,2]
  // const title = post.length === 0 ? "Loading" : post[0].title;
  // const image = post.length === 0 ? "Loading" : post[0].mainImage;
  // const body = post.length === 0 ? dummyFallBack : post[0].body;

    console.log(WidthProvider(Responsive))

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


      <Container id="main" maxWidth="xl" sx={{height: 'unset'}}>
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
              // <Grid container spacing={2}>
              //     <Grid  item xs={12} sm={6} md={3}>
              //         <BlogCard id="postA" post={post[0]}/>
              //     </Grid>
              //     <Grid item xs={12} sm={6} md={4}>
              //         <BlogCard id="postB" post={post[1]}/>
              //     </Grid>
              //     <Grid item xs={12} sm={6} md={2}>
              //         <BlogCard id="postC" post={post[2]}/>
              //     </Grid>
              //     <Grid item xs={12} sm={6} md={3}>
              //         <BlogCard id="postD" post={post[3]}/>
              //     </Grid>
              //     <Grid item xs={12} sm={6}>
              //         <BlogCard id="postE" post={post[4]}/>
              //     </Grid>
              //     <Grid item xs={12} sm={6}>
              //         <BlogCard id="postF" post={post[5]}/>
              //     </Grid>
              //     <Grid item xs={12}>
              //         <BlogCard id="postG" post={post[6]}/>
              //     </Grid>
              // </Grid>
              // <Grid container spacing={2} direction={{xs: 'row', sm: 'row', md: 'column'}} columns={{md: 4}} justifyContent={"center"}>
              //     <Grid container item id="row1" spacing={2} md={3} direction={{xs: "row", md: 'column'}}>
              //         <Grid  item xs={12} sm={6} md={12}>
              //             {/*<BlogCard id="postA" post={post[0]}/>*/}
              //             <div style={{background: "red"}}>A</div>
              //         </Grid>
              //         <Grid item xs={12} sm={6} md={12}>
              //             {/*<BlogCard id="postB" post={post[1]}/>*/}
              //             <div style={{background: "lawngreen"}}>B</div>
              //         </Grid>
              //     </Grid>
              //     <Grid container item id="row2" sm={6} direction="column">
              //         <Grid item xs={12} sm={6} md={2}>
              //             {/*<BlogCard id="postC" post={post[2]}/>*/}
              //             <div style={{background: "lightblue"}}>C</div>
              //
              //         </Grid>
              //     </Grid>
              //     <Grid container item id="row3" spacing={2} direction={{xs: "row", md: 'column'}}>
              //         <Grid item xs={12} sm={6} md={3}>
              //             {/*<BlogCard id="postD" post={post[3]}/>*/}
              //             <div style={{background: "sandybrown"}}>D</div>
              //
              //         </Grid>
              //         <Grid item xs={12} sm={6}>
              //             {/*<BlogCard id="postE" post={post[4]}/>*/}
              //             <div style={{background: "peachpuff"}}>E</div>
              //
              //         </Grid>
              //     </Grid>
              //     <Grid container item id="row4" spacing={2} direction={{xs: "row", md: 'column'}}>
              //         <Grid item xs={12} sm={6}>
              //             {/*<BlogCard id="postF" post={post[5]}/>*/}
              //             <div style={{background: "yellow"}}>F</div>
              //
              //         </Grid>
              //         <Grid item xs={12} sm={6}>
              //             {/*<BlogCard id="postG" post={post[6]}/>*/}
              //             <div style={{background: "lightgray"}}>G</div>
              //
              //         </Grid>
              //     </Grid>
              // </Grid>
                <ResponsiveGridLayout
                    className={styles.gridLayout}
                    layout={layout1}
                    breakpoints={{ lg: 1200, md: 900, sm: 600 }}
                    cols={{lg: 12, md: 2, sm: 1}}
                    width={1200}
                >
                    <div key="postA" style={{background: 'red'}}>A</div>
                    <div key="postB" style={{background: 'yellow'}}>B</div>
                    <div key="postC" style={{background: 'orange'}}>C</div>
                    <div key="postD" style={{background: 'lightblue'}}>D</div>
                    <div key="postE" style={{background: 'plum'}}>E</div>
                    <div key="postF" style={{background: 'sandybrown'}}>F</div>
                    <div key="postG" style={{background: 'darksalmon'}}>G</div>
                </ResponsiveGridLayout>

          }
      </Container>
    </>
  );
}
//
// //             <StyledBox container spacing={2} className={styles.gridLayout}>
// {/*<BlogCard id="postA" post={post[0]} format={50} />*/}
// {/*<BlogCard id="postB" post={post[1]} format={100} />*/}
// {/*<BlogCard id="postC" post={post[2]} format={75} />*/}
// {/*<BlogCard id="postD" post={post[3]} format={50} />*/}
// {/*<BlogCard id="postE" post={post[4]} format={50} />*/}
// {/*<BlogCard id="postF" post={post[5]} format={75} />*/}
// {/*<BlogCard id="postG" post={post[6]} format={50} />*/}
// {/*</StyledBox>*/}
// }
// {/*<div className={styles.gridLayout}>*/}
// {/*    <div id="postA" style={{background: 'red'}}>A</div>*/}
// {/*    <div id="postB" style={{background: 'yellow'}}>B</div>*/}
// {/*    <div id="postC" style={{background: 'orange'}}>C</div>*/}
// {/*    <div id="postD" style={{background: 'lightblue'}}>D</div>*/}
// {/*    <div id="postE" style={{background: 'plum'}}>E</div>*/}
// {/*    <div id="postF" style={{background: 'sandybrown'}}>F</div>*/}
// {/*    <div id="postG" style={{background: 'darksalmon'}}>G</div>*/}
// {/*</div>*/}
