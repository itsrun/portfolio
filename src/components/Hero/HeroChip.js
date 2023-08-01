import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import NavigationIcon from '@mui/icons-material/Navigation';
import { motion } from "framer-motion";
import Tooltip from "components/Tooltip";

const ChipContent = styled(({ description, placement, ...props }) => (
    <Tooltip sx={{
        lineHeight: 1.3,
        fontWeight: 500,
    }} title={description} placement={placement} arrow>
        <motion.div
            whileHover={{
                scale: 1.1,
            }}
            {...props}
        />
    </Tooltip>
))(({ theme }) => ({
    backgroundColor: "#2a2a2a",
    borderRadius: "10rem",
    cursor: "default",
    fontSize: "1rem",
    fontWeight: 600,
    padding: theme.spacing(0.8, 1.2),
    margin: theme.spacing(0, 0.8),
    [theme.breakpoints.up("sm")]: {
        fontSize: "1.2rem",
        padding: theme.spacing(1, 2),
        margin: theme.spacing(0, 1.5),
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: "1.3rem",
        margin: theme.spacing(0, 2),
    },
}));

const ChipContainer = styled(Box, {
    shouldForwardProp: (prop) => prop !== "reverse" && prop !== "x" && prop !== "y"
})(({ theme, reverse, x, y }) => ({
    position: "absolute",
    display: "flex",
    ...(reverse && { flexDirection: "row-reverse" }),
    left: "50%",
    transform: `translate(${x}, ${y})`,
    zIndex: theme.zIndex.tooltip,
}));

const ArrowIcon = styled(NavigationIcon, {
    shouldForwardProp: (prop) => prop !== "vertical" && prop !== "angle"
})(({ theme, vertical, angle }) => ({
    alignSelf: vertical,
    transform: `scale(1.15) rotateZ(${angle}deg)`,
    fill: "#777",
    [theme.breakpoints.up("lg")]: {
        transform: `scale(1.3) rotateZ(${angle}deg)`,
    },
}));

export default function HeroChip({
    x, y,
    vertical,
    reverse,
    angle,
    ...props
}) {
    return (
        <ChipContainer reverse={reverse} x={x} y={y}>
            <ChipContent {...props} />
            <ArrowIcon vertical={vertical} angle={angle} />
        </ChipContainer>
    );
};