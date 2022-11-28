import { styled } from "@mui/material/styles";
import { Zoom } from "@mui/material";
import MTooltip, { tooltipClasses } from '@mui/material/Tooltip';

const Tooltip = styled((({ className, ...props }) => (
    <MTooltip
        TransitionComponent={Zoom}
        enterTouchDelay={0}
        leaveTouchDelay={5000}
        {...props}
        classes={{ popper: className }}
    />
)))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: "#0055FF",
        color: "#f0f0f0",
        maxWidth: "20rem",
        fontSize: "1.3rem",
    },
}));

export default Tooltip;