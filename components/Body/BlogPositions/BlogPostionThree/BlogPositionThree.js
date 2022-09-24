import styles from "./blogPositionThree.module.css";
import {Box, Card, CardContent, CardMedia, Typography} from "@mui/material";
import BlockContent from "@sanity/block-content-to-react";
import {useRouter} from "next/router";

export default function BlogPositionThree(props) {
    const router = useRouter();

    return (
        <>
            <Box sx={{display: "flex"}} justifyContent="center">
                <Card
                    sx={{
                        maxWidth: 345
                    }}

                    onClick = {() => router.push(`/post/${props.post.slug.current}`)}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={props.post.mainImage}
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.post.title}
                        </Typography>
                        <Typography
                            sx={{
                                display: '-webkit-box',
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 1,
                            }}
                            variant="body2"
                            color="text.secondary">
                            <BlockContent blocks={props.post.body} />
                        </Typography>
                    </CardContent>
                </Card>
            </Box>
        </>
    );
}