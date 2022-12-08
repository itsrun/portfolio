import { Box, Button, Link, MobileStepper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TypeTitle from "../TypeText";
import data from "./WorkData.json";
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Fragment, useRef, useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { Stack } from "@mui/system";
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from "react-swipeable-views-utils";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";

const AutoSwipe = autoPlay(SwipeableViews);

const ItemBox = styled(Box)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    [theme.breakpoints.up("sm")]: {
        flexDirection: "row",
    },
}));

const ImgSize = (theme) => ({
    width: "82vw",
    height: "50vw",
    borderRadius: "1rem",
    [theme.breakpoints.up("sm")]: {
        width: "20rem",
        height: "12rem",
        borderRadius: "0.6rem",
    },
    [theme.breakpoints.up("md")]: {
        width: "24rem",
        height: "14.4rem"
    },
    [theme.breakpoints.up("lg")]: {
        width: "27rem",
        height: "16.2rem",
        borderRadius: "0.8rem",
    },
})

const ImgBox = styled(Box, {
    shouldForwardProp: (prop) => prop !== "src"
})(({ theme, src }) => ({
    width: "100%",
    position: "relative",
    backgroundImage: `url(${src})`,
    backgroundColor: "#ce93d8",
    backgroundSize: "cover",
    backgroundPosition: "center",
    ...ImgSize(theme),
}));

const WorkImg = ({ images, idx }) => {
    const [active, setActive] = useState(0);
    const maxSteps = images.length;

    return (
        <Box sx={(theme) => ({ ...ImgSize(theme), height: "auto", flexShrink: 0 })}>
            <motion.div whileHover={{ scale: 1.15 }}>
                <AutoSwipe
                    style={{ height: "100%", marginBottom: 6 }}
                    index={active}
                    onChangeIndex={(val) => setActive(val)}
                    axis="x"
                    interval={3200 + 240 * idx}
                >
                    {images.map((src, idx) => (
                        <Fragment key={idx}>
                            {Math.abs(active - idx) < 3 ? (<ImgBox src={src} />) : null}
                        </Fragment>
                    ))}
                </AutoSwipe>
            </motion.div>
            {maxSteps > 1 && (
                <MobileStepper
                    color="secondary"
                    steps={maxSteps}
                    position="static"
                    activeStep={active}
                    sx={{ background: "transparent", padding: 0 }}
                    nextButton={
                        <Button
                            size="small"
                            onClick={() => setActive(p => p + 1)}
                            disabled={active === maxSteps - 1}
                        >
                            <KeyboardArrowRight />
                        </Button>
                    }
                    backButton={
                        <Button
                            size="small"
                            onClick={() => setActive(p => p - 1)}
                            disabled={active === 0}
                        >
                            <KeyboardArrowLeft />
                        </Button>
                    }
                />
            )}
        </Box>
    );
};

const TextBox = styled(Box)(({ theme }) => ({
    padding: theme.spacing(1.5, 0, 0, 1),
    fontSize: "1.4rem",
    color: "#e0e0e0",
    lineHeight: 1.2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-evenly",
    cursor: "default",
    [theme.breakpoints.up("sm")]: {
        padding: theme.spacing(0, 0, 0, "3vw"),
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "1.6rem",
    },
}));

const WorkItem = ({ idx, links, stacks, title, images, author, place, description, award, href }) => {
    const targetRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 0.32], [120, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.36], [0.92, 1]);
    const opacity = useTransform(scrollYProgress, [0.75, 1], [1, 0]);

    return (
        <motion.div style={{ y, opacity, scale }}>
            <ItemBox ref={targetRef}>
                <WorkImg images={images} idx={idx} />
                <TextBox>
                    <Box sx={{ marginBottom: 1.5, textAlign: "justify" }}>
                        {author.map(({ name, self }) => (
                            <span style={{
                                textDecoration: self && "underline",
                                fontSize: "1em",
                                fontWeight: self && 700,
                            }} key={name}>{name}, </span>
                        ))}
                        <Link color="secondary" sx={{
                            fontSize: "1em",
                            wordBreak: "break-word",
                            hyphens: "auto",
                        }} variant="span" href={href}>
                            {title}
                        </Link>
                        {place && (
                            <Typography sx={{
                                fontSize: "1em",
                            }} variant="span">
                                , {place}
                            </Typography>
                        )}
                    </Box>
                    {award && (
                        <Typography sx={{
                            fontSize: "1em",
                            lineHeight: 1.15,
                            marginBottom: 1,
                            display: "flex",
                            alignItems: "center",
                        }} color="gold">
                            <EmojiEventsIcon sx={{ marginRight: 0.5 }} />{award}
                        </Typography>
                    )}
                    <Typography sx={{
                        fontSize: "0.9em",
                        lineHeight: 1.1,
                        color: "#bfbfbf",
                        textAlign: "justify",
                        marginBottom: 2,
                        textTransform: "lowercase",
                    }}>
                        {description}
                    </Typography>
                    <Stack spacing={1.5} direction="row" sx={{ alignItems: "center" }}>
                        {stacks && (
                            <Typography sx={{
                                fontSize: "0.9em",
                            }}>keywords: </Typography>
                        )}
                        {(links || stacks).map(({ name, href }) => (
                            <Button
                                key={name}
                                variant="outlined"
                                size="small"
                                color="inherit"
                                href={href}
                                sx={{
                                    width: "fit-content",
                                    fontSize: "1.2rem",
                                    textTransform: "lowercase",
                                    paddingY: 0,
                                }}
                            >{name}</Button>
                        ))}
                    </Stack>
                </TextBox>
            </ItemBox>
        </motion.div>
    );
};

export default function Work(props) {
    return (
        <Stack spacing={8} id="projects">
            <TypeTitle id="pub" title="publications / projects" />
            {data.map((props, idx) => (
                <WorkItem key={idx} idx={idx} {...props} />
            ))}
        </Stack>
    );
};