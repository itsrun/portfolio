import { Box } from "@mui/material";
import TypeTitle from "components/TypeText";
import { Fragment } from "react";

export default function Resume(props) {
    return (
        <Fragment>
            <TypeTitle title="my up-to-date cv" id="cv" />
            <Box sx={{
                marginTop: 3,
                marginBottom: 9,
                height: "min(calc(118vw + 12rem), 150rem)",
                position: "relative",
                borderRadius: "1.6rem",
                overflow: "hidden",
            }}>
                <iframe
                    width="100%"
                    height="100%"
                    frameBorder={0}
                    title="run's cv"
                    src="https://www.figma.com/embed?embed_host=https://itshuang.run&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FiRWdgZemqOGDJjkncpqxYp%2FCV-Single-Column%3Fnode-id%3D0%253A1%26t%3DRL4rJUFFGKh2tvjh-1"
                    allowFullScreen
                />
            </Box>
        </Fragment>
    );
};