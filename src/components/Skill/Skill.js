import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "components/Tooltip";
import TypeTitle from "components/TypeText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SkillBox = styled(Box)(({ theme }) => ({
    height: "min(82vw, 100rem)",
    width: "100%",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    "& > *": {
        gridColumn: 1,
        gridRow: 1,
    },
}));

const SkillItemBox = styled(motion.div, {
    shouldForwardProp: (prop) => prop !== "radius"
})(({ theme, radius }) => ({
    width: `calc(${radius} * min(82vw, 100rem))`,
    margin: "0 auto",
    height: "fit-content",
}));

const SkillImg = styled("img")(({ theme }) => ({
    height: "3.6rem",
    maxHeight: "8.8vw",
    [theme.breakpoints.up("sm")]: {
        height: "7.2vw",
    },
    [theme.breakpoints.up("md")]: {
        height: "min(6.4vw, 8rem)",
    },
}));

const SkillItem = ({ scrollYProgress, name, idx, src, total, direction = 1, radius = 1 }) => {
    const angle = 360 / total;
    const rotate = useTransform(scrollYProgress, [0, 1], [0 + idx * angle, 360 * direction + idx * angle])

    return (
        <SkillItemBox style={{ rotate }} radius={radius} >
            <Tooltip title={name} arrow>
                <SkillImg
                    alt={idx}
                    name={name}
                    src={src}
                    margin={64}
                    trim={2}
                />
            </Tooltip>
        </SkillItemBox>
    );
};

const outerSkill = [
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/mrtk-min_jpIh3KP8Az.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487699", name: "mixed reality toolkit" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/3js-min_6TfyWVDGuR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487728", name: "three.js" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/unity-min_JEkumdb-Y3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627488972", name: "unity 3d" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/d3-min_Ggghkrxl9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487562", name: "d3.js" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/react-min_EVSbGJb04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627772956", name: "react.js" },
];

const innerSkill = [
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/PyTorch_logo_icon_yOUL2Y0by.svg?updatedAt=1710387473982", name: "pytorch" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/js-min_GQ-21RlIeD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487735", name: "javascript" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/cpp-min_JwwQHM0U7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627488790", name: "c plus plus" },
];

export default function Skill(props) {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    return (
        <SkillBox ref={containerRef}>
            <TypeTitle
                title="some of the stuff i've been using"
                id="skill"
                sx={(theme) => ({
                    paddingX: "30vw",
                    fontSize: "3.2vw",
                    [theme.breakpoints.up("lg")]: {
                        paddingX: "33rem",
                        fontSize: "4rem",
                    },
                })}
            />
            {outerSkill.map((props, idx) => (
                <SkillItem
                    key={`outer-${idx}`}
                    scrollYProgress={scrollYProgress}
                    idx={idx}
                    total={outerSkill.length}
                    {...props}
                />
            ))}
            {innerSkill.map((props, idx) => (
                <SkillItem
                    key={`inner-${idx}`}
                    scrollYProgress={scrollYProgress}
                    idx={idx}
                    total={innerSkill.length}
                    direction={-1}
                    radius={0.64}
                    {...props}
                />
            ))}
        </SkillBox>
    );
};