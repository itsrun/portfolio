import { Box, Link, Stack } from "@mui/material";
import TypeTitle from "components/TypeText";
import data from "./WorkData.json"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { styled } from "@mui/material/styles";

const WorkImg = styled("img")(({ theme }) => ({
    maxWidth: "36%",
    height: "100%",
    [theme.breakpoints.up("md")]: {
        width: "16rem",
    },
    [theme.breakpoints.up("lg")]: {
        width: "18rem",
    },
}));

const TextBox = styled(Box)(({ theme }) => ({
    fontSize: "1.2rem",
    display: "block",
    width: "100%",
    paddingLeft: "3vw",
    textAlign: "right",
    textTransform: "lowercase",
    [theme.breakpoints.up("sm")]: {
        fontSize: "1.36rem",
    },
    [theme.breakpoints.up("md")]: {
        fontSize: "1.44rem",
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "1.6rem",
    },
}));

const NoWrapSpan = styled("span")({
    whiteSpace: "nowrap",
});

const WorkItem = ({ title, image, company, time, href }) => {
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
            <Stack direction="row" spacing={2} ref={targetRef} justifyContent="space-between" alignItems="center" paddingLeft="1.5vw" paddingRight="1.5vw">
                <WorkImg src={image} alt={`${title}-logo`} />
                <TextBox>
                    <NoWrapSpan>{title}</NoWrapSpan>, <Link color="secondary" href={href} variant="span" sx={{ paddingLeft: "0.16rem", whiteSpace: "nowrap" }}>{company}</Link>, <NoWrapSpan>{time}</NoWrapSpan>
                </TextBox>
            </Stack>
        </motion.div>
    );
};

export default function Work(props) {
    return (
        <Stack spacing={8} id="projects">
            <TypeTitle id="industry" title="industrial experience" />
            {
                data.map((props, idx) => (
                    <WorkItem key={idx} {...props} idx={idx} />
                ))
            }
        </Stack>
    );
};