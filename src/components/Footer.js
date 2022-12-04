import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterBox = styled((props) => (
    <Box component="footer" {...props} />
))(({ theme }) => ({
    position: "absolute",
    bottom: theme.spacing(1),
    left: theme.spacing(3),
    backgroundColor: "transparent",
    fontSize: "1.1rem",
}));

export default function Footer(props) {
    return (
        <FooterBox>
            © Run Huang. Last Updated: Dec. 4, 2022
        </FooterBox>
    );
};