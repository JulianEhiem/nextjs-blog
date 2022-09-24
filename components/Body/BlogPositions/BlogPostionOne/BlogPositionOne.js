import styles from "./blogPositionOne.module.css";
import reader from "../../../../public/reader.jpg"
import BlockContent from '@sanity/block-content-to-react';
import {Box, Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";
import {useRouter} from "next/router";

export default function BlogPositionOne(props) {
    const router = useRouter();

    return (
        <>
            <Box sx={{display: "flex"}} justifyContent="center">
                <Card
                    elevation={1}
                    sx={{
                        maxWidth: 345,
                        background: "transparent"
                }}

                    onClick = {() => router.push(`/post/${props.post.slug.current}`)}>
                    <CardMedia
                        component="img"
                        alt="green iguana"
                        height="140"
                        image={props.post.mainImage}
                    />
                    <CardContent>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{
                                fontFamily: "Abril Fatface, serif",
                            }}
                        >
                            {props.post.title}
                        </Typography>
                        <Typography
                            sx={{
                                display: {xs: '-webkit-box', md:'-webkit-box'},
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: 2,
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