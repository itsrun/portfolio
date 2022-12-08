import { Box, CircularProgress, Typography } from "@mui/material";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState, Component } from "react";
import { styled } from "@mui/material/styles";
import { Alert, AlertTitle } from "@mui/material";

const ErrorContainer = styled((props) => (
    <Alert severity="error" {...props} />
))(({ theme }) => ({
    borderRadius: "1.2rem",
    marginBottom: theme.spacing(3),
}));

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { error: "" };
    }

    componentDidCatch(error) {
        this.setState({ error: `${error.name}: ${error.message}` });
    }

    render() {
        const { error } = this.state;
        if (error) {
            return (
                <ErrorContainer>
                    <AlertTitle>Check Your Network Connection</AlertTitle>
                    {error}
                </ErrorContainer>
            );
        }
        return this.props.children;
    }
};

const LazyFallback = ({ error, height }) => {
    return (
        <Box sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            height,
        }}>
            <CircularProgress />
            <Typography sx={{
                fontSize: "1.6rem",
                marginY: 3,
                textTransform: "lowercase",
            }} color={error && "error"}>
                {error || "loading..."}
            </Typography>
        </Box>
    );
};

const loadComponent = async (path, cb, handler) => {
    const comp = await import(`../${path}.js`).catch((err) => handler(err.toString()));
    comp && cb(comp);
};

export default function LazySection({ sections, children, ...props }) {
    const ref = useRef(null);
    const [component, setComponent] = useState(null);
    const [error, setError] = useState(null);
    const isInView = useInView(ref, {
        once: true,
        margin: "0px 0px 64px 0px",
    });
    const { path, id, height } = sections[0];
    path.split("/").pop();

    useEffect(() => {
        isInView && loadComponent(path, setComponent, setError);
    }, [isInView, path]);

    return (
        <ErrorBoundary>
            <Box component="section" id={id} ref={ref} {...props} sx={{ marginTop: { xs: 9, lg: 12 } }}>
                {component ? <component.default /> : <LazyFallback error={error} height={height} />}
            </Box>
            {sections.length > 1 && <LazySection sections={sections.slice(1,)} />}
        </ErrorBoundary>
    );
};