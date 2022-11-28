import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";

const FooterBox = styled((props) => (
    <Box component="footer" {...props} />
))(({ theme }) => ({
    backgroundColor: "transparent",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(1),
    fontSize: "1.1rem",
}));

export default function Footer(props) {
    return (
        <FooterBox>
            © Run Huang. Last Updated: Dec. 1, 2022
        </FooterBox>
    );
};