import { Stack } from "@mui/material";
import TypeTitle from "components/TypeText";
import data from "./WorkData.json"
import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import { styled } from "@mui/material/styles";

const WorkImg = styled("img")(({ theme }) => ({
    maxWidth: "36%",
    [theme.breakpoints.up("md")]: {
        width: "16rem",
    },
    [theme.breakpoints.up("lg")]: {
        width: "20rem",
    },
}));

const WorkItem = ({ title, image, time }) => {
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
            <Stack direction="row" spacing={2} ref={targetRef} justifyContent="space-between">
                <WorkImg src={image} alt={`${title}-logo`} />
                <div>{title}</div>
                <div>{time}</div>
            </Stack>
        </motion.div>
    );
};

export default function Work(props) {
    return (
        <Stack spacing={8} id="projects">
            <TypeTitle id="industry" title="work experience" />
            {
                data.map((props, idx) => (
                    <WorkItem key={idx} {...props} idx={idx} />
                ))
            }
        </Stack>
    );
};