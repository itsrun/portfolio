import React from "react";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";
import { Link, Typography } from "@mui/material";
import { titleFont } from "theme";

// Word wrapper
const Wrapper = (props) => {
    return <span style={{ whiteSpace: "nowrap", textAlign: "center" }}>{props.children}</span>;
};

const heading = styled((props) => (
    <Typography variant="h1" {...props} />
))(({ theme }) => ({
    fontSize: "3.2rem",
    fontFamily: titleFont,
    whiteSpace: "nowrap",
    fontWeight: 800,
    lineHeight: 1.25,
    [theme.breakpoints.up("sm")]: {
        fontSize: "4.8rem",
    },
}));

const heading2 = styled((props) => (
    <Link variant="h2" {...props} />
))(({ theme }) => ({
    fontFamily: titleFont,
    fontSize: "1.5rem",
    color: "#aaa",
    fontWeight: 500,
}));

const tagMap = {
    heading1: heading,
    heading2: heading2
};

const HeroTitle = ({ href, ...props }) => {
    const item = {
        hidden: {
            y: "200%",
            color: "inherit",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.85 }
        },
        visible: {
            y: 0,
            color: "inherit",
            transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.75 }
        }
    };

    const splitWords = props.text.split(" ");
    const words = [];

    for (const [, item] of splitWords.entries()) {
        words.push(item.split(""));
    }

    words.map((word) => {
        return word.push("\u00A0");
    });

    const Tag = tagMap[props.type];

    return (
        <Tag href={href}>
            {words.map((word, index) => {
                return (
                    <Wrapper key={index}>
                        {words[index].flat().map((element, index) => {
                            return (
                                <span
                                    style={{
                                        overflow: "hidden",
                                        display: "inline-block"
                                    }}
                                    key={index}
                                >
                                    <motion.span
                                        style={{ display: "inline-block" }}
                                        variants={item}
                                    >
                                        {element}
                                    </motion.span>
                                </span>
                            );
                        })}
                    </Wrapper>
                );
            })}
        </Tag>
    );
};

export default HeroTitle;
