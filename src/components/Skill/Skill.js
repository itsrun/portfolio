import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip from "components/Tooltip";
import TypeTitle from "components/TypeText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const SkillBox = styled(Box)(({ theme }) => ({
    height: "min(84vw, 100rem)",
    width: "100%",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    "& > *": {
        gridColumn: 1,
        gridRow: 1,
    },
    [theme.breakpoints.up("lg")]: {
        margin: theme.spacing(16, 0),
    },
}));

const SkillItemBox = styled(motion.div, {
    shouldForwardProp: (prop) => prop !== "radius"
})(({ theme, radius }) => ({
    width: `calc(${radius} * min(84vw, 100rem))`,
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
                    src={src}
                />
            </Tooltip>
        </SkillItemBox>
    );
};

const outerSkill = [
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/mrtk-min_jpIh3KP8Az.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487699", name: "mixed reality toolkit" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/3js-min_6TfyWVDGuR.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487728", name: "three.js" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/unity-min_JEkumdb-Y3.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627488972", name: "unity 3d" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/csharp-min_InfJ9IeQW.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627488931", name: "c sharp" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/mui-min_faklaqu3sU.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487702", name: "material ui" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/pptr-min_ijlHIiocQ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487444", name: "puppeteer" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/d3-min_Ggghkrxl9.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487562", name: "d3.js" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/selenium-min_v9Lrimfi5.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487523", name: "selenium" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/emotion-min_Bsr0IZt2i2.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487765", name: "emotion" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/seaborn-min_FX9k88w738.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487638", name: "seaborn" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/sklearn-min_01MHRZmvc.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487565", name: "scikit learn" },
];

const innerSkill = [
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/node-min_EJUkIwyCHv.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627488989", name: "node.js" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/python-min_tkOibNaaBZ.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627488783", name: "python" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/js-min_GQ-21RlIeD.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627487735", name: "javascript" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/cpp-min_JwwQHM0U7.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627488790", name: "c plus plus" },
    { src: "https://ik.imagekit.io/runh/webcv/image/skills/react-min_EVSbGJb04.png?ik-sdk-version=javascript-1.4.3&updatedAt=1669627772956", name: "react.js" },
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
                title="some of the stuff i've tried before"
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
                    key={idx}
                    scrollYProgress={scrollYProgress}
                    idx={idx}
                    total={outerSkill.length}
                    {...props}
                />
            ))}
            {innerSkill.map((props, idx) => (
                <SkillItem
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