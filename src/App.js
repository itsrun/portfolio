import { ThemeProvider, createTheme } from "@mui/material/styles"
import { Container, CssBaseline } from "@mui/material"
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Hero from "components/Hero/Hero";
import Background from "components/Background";
import LazySection from "components/Lazy/LazySection";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
    typography: {
        fontFamily: [
            "Source Sans Pro",
            "-apple-system",
            "BlinkMacSystemFont",
            "'Segoe UI'",
            "Roboto",
            "'Helvetica Neue'",
            "Arial",
            "sans-serif",
        ].join(","),
    },
});

const sections = [
    "Work/Work",
    "Honor/Honor",
    "Skill/Skill",
];

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline enableColorScheme />
            <Background />
            <Container maxWidth="lg" disableGutters sx={{ paddingX: "8vw" }}>
                <Navbar />
                <Hero />
                <LazySection sections={sections} />
                <Footer />
            </Container>
        </ThemeProvider>
    );
}

export default App;
