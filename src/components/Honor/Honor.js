import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import TypeTitle from "../TypeText";
import data from "./HonorData.json";
import { motion } from "framer-motion";
import { Fragment } from "react";

const HonorGrid = styled((props) => (
    <Grid
        component={motion.ul}
        container
        columnSpacing={{ xs: "6vw", sm: "2.5vw", md: "3vw", lg: "3.6rem" }}
        rowSpacing={3}
        {...props}
    />
))(({ theme }) => ({
    marginTop: theme.spacing(1),
    padding: 0,
}));

const HonorItem = styled((props) => (
    <Grid
        component={motion.li}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
            visible: (i) => ({ opacity: 1, scale: 1, transition: { type: "spring", delay: 0.2 * i } }),
            hidden: { opacity: 0, scale: 0 }
        }}
        item
        xs={6} sm={3}
        {...props}
    />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    cursor: "default",
}));

const HonorImg = styled((props) => (
    <motion.img whileHover={{ y: "-1.2rem" }} {...props} />
))(({ theme }) => ({
    borderRadius: "2rem",
    width: "100%",
    aspectRatio: "1 / 1",
    backgroundColor: "#90caf9",
}));

const HonorText = styled(Box)(({ theme }) => ({
    fontSize: "1.25rem",
    paddingLeft: "1vw",
    lineHeight: 1.25,
    marginTop: theme.spacing(1),
    textTransform: "lowercase",
    [theme.breakpoints.up("md")]: {
        fontSize: "1.5rem",
    },
}));

export default function Honor(props) {
    return (
        <Fragment>
            <TypeTitle title="awards / honors" id="honor" />
            <HonorGrid>
                {data.map(({ venue, src, award }, idx) => (
                    <HonorItem key={venue} custom={idx}>
                        <HonorImg src={src} alt={`img-for-${venue}`} />
                        <HonorText>
                            <Typography color="primary" variant="span">{award}</Typography>{award && ", "} {venue}
                        </HonorText>
                    </HonorItem>
                ))}
            </HonorGrid>
        </Fragment>
    );
};