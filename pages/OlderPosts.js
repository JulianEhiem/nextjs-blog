import {useContext} from "react";
import {PostContext} from "../components/PostContext";
import {Box, Container} from "@mui/material";
import BlogCard from "../components/Body/BlogCard";



export default function OlderPosts() {
    const posts = useContext(PostContext)
    const post = posts.mappedPosts
    return (
        <>
            <Container maxWidth="xl" disableGutters sx={{minHeight: "90vh", width: "100vw", background: "transparent"}}>
                <Box my={4} >
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