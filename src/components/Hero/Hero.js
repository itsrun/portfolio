import { styled } from "@mui/material/styles";
import { Avatar, Box } from "@mui/material";
import data from "./HeroData.json"
import HeroChip from "./HeroChip";
import HeroTitle from "./HeroTitle";
import { motion } from "framer-motion";
import HeroTerminal from "./HeroTerminal";

const HeroBox = styled((props) => (
    <Box component="section" {...props} />
))(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: theme.spacing(12),
    [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(16),
    }
}));

const HeroAvatarComp = styled(({ img, ...props }) => (
    <motion.div
        whileHover={{
            scale: 1.1,
            rotateZ: -6,
        }}
    >
        <Avatar
            src={`${process.env.PUBLIC_URL}/favicon.ico`}
            alt="profile"
            {...props}
        />
    </motion.div>
))(({ theme }) => ({
    width: "15.6rem",
    height: "15.6rem",
    position: "relative",
    boxShadow: "0 0 64px 0px hsl(0deg 0% 100% / 15%)",
    [theme.breakpoints.up("md")]: {
        width: "18rem",
        height: "18rem",
    },
}));

const HeroTitleBox = styled((props) => (
    <motion.div
        initial="hidden"
        animate="visible"
        whileHover={{
            y: "-1.2rem",
        }}
        variants={{
            visible: {
                transition: {
                    staggerChildren: 0.025,
                },
            },
        }}
        {...props}
    />
))(({ theme }) => ({
    marginTop: theme.spacing(12),
    textAlign: "center",
    cursor: "default",
    padding: theme.spacing(2, 0, 3),
    [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(15),
    },
}));

export default function Hero() {
    return (
        <HeroBox>
            <HeroAvatarComp />
            <HeroTitleBox>
                <HeroTitle type="heading1" text="hi there, i'm run ;)" />
                <HeroTitle type="heading2" href="mailto:runhuang@usc.edu" text="to seek, to seed | runhuang [at] usc [dot] edu" />
            </HeroTitleBox>
            <HeroTerminal commands={data.commands} />
            {data.interest.map(({ name, ...props }) => (
                <HeroChip {...props} key={name}>{name}</HeroChip>
            ))}
        </HeroBox>
    );
};