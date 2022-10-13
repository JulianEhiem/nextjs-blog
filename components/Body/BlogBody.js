import * as React from 'react';
import {useContext, useEffect, useState} from 'react';
import styles from "./blogBody.module.css";
import {Responsive, WidthProvider} from "react-grid-layout";
import sizeMe from "react-sizeme";
import {PostContext} from "../PostContext";
import {useRouter} from "next/router"
import {Box, Button, Container, styled, Typography} from "@mui/material";
import BlogCard from "./BlogCard";
import {ArrowForwardIos, KeyboardArrowDown, KeyboardArrowUp} from "@mui/icons-material";
import Link from "next/link";
import OlderPosts from "../../pages/OlderPosts";
// import BlockContent from '@sanity/block-content-to-react';
// import dummyFallBack from '../../DummyFallBack'

const StyledBox = styled(Box)(({theme}) => ({
    // height: '800px',
    background: "lightblue"
}))

const ResponsiveGridLayout = WidthProvider(Responsive)

function BlogBody(props) {
    const getLayouts = () => {
        let layout;
        switch (height){
            case height < 601:
                layout = layout3
                break
            case height > 600 && height <= 900:
                layout = layout2
                break
            case height > 900:
                layout = layout1
                break
        }
        return layout;
    }
    const [layout = getLayouts(), setLayout] = React.useState(layout);
    const [display, setDisplay] = useState(false)

    console.log(display)


    useEffect(() => {
        window.addEventListener('resize', setLayout(getLayouts()))
    })
  const router = useRouter();
  const posts = useContext(PostContext)
  const post = posts.mappedPosts
  const latestPosts = post.slice(-7)
    const oldPosts = post.slice(0,-7)
    const {width, height} = props.size

    const layout1 = [
        {i: "postA", x: 0, y: 0, w: 3, h: 3},
        {i: "postB", x: 3, y: 0, w: 4, h: 5},
        {i: "postC", x: 7, y: 0, w: 2, h: 2.5},
        {i: "postD", x: 9, y: 0, w: 3, h: 2.5},
        {i: "postE", x: 0, y: 4, w: 3, h: 2},
        {i: "postF", x: 7, y: 3, w: 2, h: 2.5},
        {i: "postG", x: 9, y: 3, w: 3, h: 2.5},
    ]
    const layout2 = [
        {i: "postA", x: 0, y: 0, w: 5, h: 2.1},
        {i: "postB", x: 6, y: 0, w: 5, h: 2.1},
        {i: "postC", x: 0, y: 3, w: 5, h: 2.1},
        {i: "postD", x: 6, y: 3, w: 5, h: 2.1},
        {i: "postE", x: 0, y: 6, w: 5, h: 2.1},
        {i: "postF", x: 6, y: 6, w: 5, h: 2.1},
        {i: "postG", x: 0, y: 9, w: 10, h: 2.1},
    ]
    const layout3 = [
        {i: "postA", x: 0, y: 0, w: 12, h: 2},
        {i: "postB", x: 0, y: 4, w: 12, h: 2},
        {i: "postC", x: 0, y: 8, w: 12, h: 2},
        {i: "postD", x: 0, y: 12, w: 12, h: 2},
        {i: "postE", x: 0, y: 16, w: 12, h: 2},
        {i: "postF", x: 0, y: 20, w: 12, h: 2},
        {i: "postG", x: 0, y: 24, w: 12, h: 2},
    ]



    const layouts = {lg: layout1, md: layout2, sm: layout3}
    // const layouts = getLayouts();
// const post = [1,2]
  // const title = post.length === 0 ? "Loading" : post[0].title;
  // const image = post.length === 0 ? "Loading" : post[0].mainImage;
  // const body = post.length === 0 ? dummyFallBack : post[0].body;

    // console.log(WidthProvider(Responsive))

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


      <Container id="main" maxWidth="xl" disableGutters sx={{height: 'unset'}}>
          <Box  my={4} id="latestPosts">
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
                    isDraggable ={false}
                    isResizable ={false}
                    layouts={layouts}
                    breakpoints={{ lg: 1199, md: 900, sm: 600 }}
                    // cols={{lg: 12, md: 2, sm: 1}}
                    // width={1200}
                >

                    <Box key="postA" style={{background: 'none'}}>
                        <BlogCard id="postA" post={latestPosts[0]} format={60}/>
                    </Box>
                    <Box key="postB" style={{background: 'none'}}>
                      <BlogCard id="postA" post={latestPosts[1]} format={100}/>
                    </Box>
                    <div key="postC" style={{background: 'none'}}>
                        <BlogCard id="postA" post={latestPosts[2]} format={75}/>
                    </div>
                    <div key="postD" style={{background: 'none'}}>
                        <BlogCard id="postA" post={latestPosts[3]} format={50}/>
                    </div>
                    <div key="postE" style={{background: 'none'}}>
                        <BlogCard id="postA" post={latestPosts[4]} format={40}/>
                    </div>
                    <div key="postF" style={{background: 'none'}}>
                        <BlogCard id="postA" post={latestPosts[5]} format={75}/>
                    </div>
                    <div key="postG" style={{background: 'none'}}>
                        <BlogCard id="postA" post={latestPosts[6]} format={50}/>
                    </div>
                </ResponsiveGridLayout>



          }
          <Box display="flex" justifyContent="end" sx={{position: "sticky",top: 0}} >
              <Button variant="text" sx={{color: "purple", justifySelf: "end"}} onClick={() => setDisplay(!display)} href={!display ? "#latestPosts" : "#olderPosts"} >
                  {display ? "Latest" : "Older"} posts
                  {display ?
                      <KeyboardArrowUp fontSize={"small"}/>:
                      <KeyboardArrowDown fontSize={"small"}/>
                  }
              </Button>
          </Box>
          <Box my={4} s sx={{display: {display} ? "block" : "none"}}>
              {display ?
                  <React.Fragment>
                      <Box id="olderPosts" sx={{display: "flex", gap: "1.3rem", flexWrap: "wrap", justifyContent: "center"}}>
                          {oldPosts.map(post=>(
                              <BlogCard post={post} format={75} />
                          ))}
                      </Box>
                  </React.Fragment> : <></>}
          </Box>
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

export default sizeMe({monitorHeight: true})(BlogBody);