import {useRouter} from "next/router";
import {Box, Card, CardContent, CardMedia, Typography, styled} from "@mui/material";
import BlockContent from "@sanity/block-content-to-react";
import * as React from "react";
import {useEffect} from "react";

const screenSizes = {'sm': 600, 'md': 900, 'lg': 1200, 'xl': 1536}

export default function BlogCard(props) {
    const router = useRouter();

    return (
        <>
            <Box sx={{display: "flex"}} justifyContent="center">
                <Card
                    elevation={window.innerWidth > screenSizes.md ? 0 : 2}
                    sx={{
                        maxWidth: {xs: 345, md: 450},
                        background: "transparent"
                    }}

                    onClick = {() => router.push(`/post/${props.post.slug.current}`)}>
                    {props.format < 75 ? <></> :
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            height={window.innerWidth < screenSizes.md ? 140: 220}
                            image={props.post.mainImage.toString()}
                        />
                    }

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
                                display: {xs: '-webkit-box', md: `${props.format === 75 ? 'none' : '-webkit-box'}`},
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                WebkitLineClamp: props.format === 100 || props.format === 50 ? 13 : 1,
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