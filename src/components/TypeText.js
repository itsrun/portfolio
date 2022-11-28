import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useEffect } from "react";

const TitleBox = styled(({ id, sx, ...props }) => (
    <Box {...props}>
        <Typography
            variant="h2"
            id={id}
            sx={{
                display: "inline",
                fontSize: "inherit",
                ...sx
            }}
        />
    </Box>
))(({ theme }) => ({
    fontSize: "3.6rem",
    lineHeight: 1.2,
    textAlign: "center",
    "& .typed-cursor": {
        fontSize: "inherit",
    },
}));

export default function TypeTitle({ title, id, sx }) {
    useEffect(() => {
        const typingTitle = new window.Typed(`#${id}`, {
            strings: [title],
            typeSpeed: 36,
            cursorChar: "_",
            startDelay: 640,
        });

        return () => typingTitle.destroy();
    }, [title, id]);

    return (
        <TitleBox id={id} sx={sx} />
    );
};