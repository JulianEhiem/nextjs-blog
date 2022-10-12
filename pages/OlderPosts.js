import {useContext} from "react";
import {PostContext} from "../components/PostContext";
import {Box, Container} from "@mui/material";
import {Responsive, WidthProvider} from "react-grid-layout";
import styles from "../components/Body/blogBody.module.css";
import BlogCard from "../components/Body/BlogCard";

const ResponsiveGridLayout = WidthProvider(Responsive)

export default function OlderPosts() {
    const posts = useContext(PostContext)
    const post = posts.mappedPosts
    return (
        <>
            <Container maxWidth="xl" disableGutters sx={{minHeight: "100vh", background: "pink"}}>
                <Box my={4} >
                    I am the older posts list
                    {posts.length === 0 ? <h2>Nothing here</h2>:
                        <Box sx={{display: "flex", gap: "1.3rem", flexWrap: "wrap", justifyContent: "center"}}>
                            {post.map(post=>(
                                <BlogCard post={post} format={75} />
                                ))}
                        </Box>
                    }
                </Box>
            </Container>

        </>
    );
}