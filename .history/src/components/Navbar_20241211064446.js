import { Avatar, Badge, IconButton, Link, Stack, Toolbar, Tooltip } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import SchoolIcon from '@mui/icons-material/School';
import { titleFont } from "../theme";

const NavBox = styled((props) => (
    <Toolbar component="nav" disableGutters {...props} />
))(({ theme }) => ({
    padding: theme.spacing(5, 0),
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    zIndex: theme.zIndex.appBar,
}));

const NavAvatar = styled((props) => (
    <Tooltip title={<span style={{ fontSize: "1rem" }}>Status: Active</span>}>
        <Badge
            overlap="circular"
            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
            variant="dot"
            component={Link}
            href="mailto:tingxi.li@utdallas.edu"
            {...props}
        >
            <Avatar sx={(theme) => ({
                backgroundColor: "#e3e3e3",
                fontSize: "1.4rem",
                fontWeight: 700,
                width: "3rem",
                height: "3rem",
                [theme.breakpoints.up("md")]: {
                    fontSize: "1.6rem",
                    width: "3.6rem",
                    height: "3.6rem",
                },
            })}>TL</Avatar>
        </Badge>
    </Tooltip>
))(({ theme }) => ({
    display: "flex",
    textDecoration: "none",
    "& .MuiBadge-badge": {
        backgroundColor: "#44b700",
        color: "#44b700",
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        "&::after": {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""',
        },
    },
    "@keyframes ripple": {
        "0%": {
            transform: "scale(0.8)",
            opacity: 1,
        },
        "100%": {
            transform: "scale(2.4)",
            opacity: 0,
        },
    },
}));

const NavLinkStack = styled((props) => (
    <Stack spacing={"4vw"} direction="row" {...props} />
))(({ theme }) => ({
    display: "none",
    position: "absolute",
    left: "50%",
    transform: "translate(-50%, 0)",
    [theme.breakpoints.up("sm")]: {
        display: "inherit",
    },
}));

const NavLink = styled((props) => (
    <motion.a
        initial={{ y: "-2rem", opacity: 0.3, color: "#c0c0c0" }}
        animate={{ y: "0rem", opacity: 1 }}
        transition={{ type: "spring" }}
        whileHover={{ y: "0.64rem", color: "#eee" }}
        {...props}
    />
))(({ theme }) => ({
    textDecoration: "none",
    fontFamily: titleFont,
    fontSize: "1.3rem",
    fontWeight: 600,
    letterSpacing: 1,
    padding: theme.spacing(1, 0),
}));

const NavIconStack = styled((props) => (
    <Stack spacing={"max(1vw, 0.6rem)"} direction="row" {...props} />
))(({ theme }) => ({
    marginRight: "-.6rem",
    [theme.breakpoints.up("sm")]: {
        marginRight: 0,
    }
}));

const NavIcon = styled((props) => (
    <IconButton size="large" {...props} />
))(({ theme }) => ({
    "& svg": {
        transform: "scale(1.6)",
        fill: "#e3e3e3",
    },
}));

const links = [{ title: "/work", href: "#work" }, { title: "/life", href: "#life" }, { title: "/vitae", href: "/tingxi-cv.pdf" }];
const icons = [{ icon: <LinkedInIcon />, href: "https://www.linkedin.com/in/tingxi-li-352a45297/" }, { icon: <SchoolIcon />, href: "https://scholar.google.com/" }, { icon: <GitHubIcon />, href: "https://github.com/tingxi-li" }];

export default function Navbar(props) {
    return (
        <NavBox>
            <NavAvatar />
            <NavLinkStack>
                {links.map(({ title, href }) => (
                    <NavLink key={title} href={href}>
                        {title}
                    </NavLink>
                ))}
            </NavLinkStack>
            <NavIconStack>
                {icons.map(({ icon, href }, idx) => (
                    <NavIcon key={idx} href={href}>{icon}</NavIcon>
                ))}
            </NavIconStack>
        </NavBox>
    );
};