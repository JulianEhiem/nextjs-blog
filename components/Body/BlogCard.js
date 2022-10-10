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
            <Box sx={{display: "flex", marginX: "0.5rem"}} justifyContent="center">
                <Card
                    elevation={window.innerWidth > screenSizes.md ? 0 : 2}
                    sx={{
                        maxWidth: {xs: 345, lg: 450},
                        // maxWidth: {xs: 345},
                        background: "transparent",
                        borderRadius: 0,
                        cursor: "pointer"
                    }}

                    onClick = {() => router.push(`/post/${props.post.slug.current}`)}>
                    {(props.format < 75 && window.innerWidth > screenSizes.lg) ? <></> :
                        <CardMedia
                            component="img"
                            alt="green iguana"
                            // height={window.innerWidth < screenSizes.md ? 160: 180}
                            // height={{xs: "160px", lg: "50px"}}
                            // height= "50"
                            sx={{
                                height: props.format === 75 ? 250 : "unset",
                                maxHeight: {xs: 160, lg: 350},
                                marginBottom: {lg:"1rem"}
                                // borderRadius: 0
                            }
                            }
                            image={props.post.mainImage.toString()}
                        />
                    }

                    <CardContent sx={{padding: {lg:"0 0 24px"}}}>
                        <Typography
                            variant="h5"
                            component="div"
                            sx={{
                                fontFamily: "Abril Fatface, serif",

                            }}
                        >
                            {props.post.title}
                            {/*A really really really really really long title that seemingly has no end but will end soon enough*/}
                        </Typography>
                        <Typography
                            sx={{
                                display: {xs: '-webkit-box', md: `${(props.format === 75 && window.innerWidth >= screenSizes.lg) ? 'none' : '-webkit-box'}`},
                                overflow: 'hidden',
                                WebkitBoxOrient: 'vertical',
                                // WebkitLineClamp: (props.format === 100 && window.innerWidth >= screenSizes.lg) || (props.format === 50 && window.innerWidth >= screenSizes.lg) ? 13 : 1,
                                WebkitLineClamp: (window.innerWidth >= screenSizes.lg) ? () => {
                                    switch(props.format){
                                        case 100: return 12;
                                        case 75: return 1;
                                        case 60: return 14
                                        case 50: return 12;
                                        case 40: return 8

                            }
                                }: 1,
                                lineHeight: 1.6,
                                textAlign: "justify"
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