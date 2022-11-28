import { Box } from "@mui/material";

export default function Background(props) {
    return (
        <Box sx={{ position: "relative", zIndex: -1 }}>
            <Box sx={{
                backgroundImage: `url(${process.env.PUBLIC_URL}/bg.gif)`,
                backgroundPosition: "0px 0px",
                opacity: 0.04,
                position: "fixed",
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                zIndex: -1,
            }} />
        </Box>
    );
};