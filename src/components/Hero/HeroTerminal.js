import Terminal, { TerminalInput, TerminalOutput } from "react-terminal-ui";
import { styled } from "@mui/material/styles";
import { Box, Link } from "@mui/material";
import { Fragment, useState } from "react";
import { motion } from "framer-motion";

const HeroTerminalContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(3.5),
    cursor: "default",
    "& .react-terminal": {
        height: "fit-content",
    },
    "& .react-terminal-wrapper": {
        padding: "6rem 4rem 3rem",
        borderRadius: "1.6rem",
        backgroundColor: "#1e1e1e",
        height: "fit-content",
    },
    "& .react-terminal-wrapper::after": {
        fontSize: "1.6rem",
        fontWeight: 600,
        marginTop: "0.6rem",
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "inline",
        },
    },
    "& .react-terminal-line": {
        whiteSpace: "normal",
        fontSize: "1.4rem",
        marginBottom: "1rem",
    },
    "& .react-terminal-line.react-terminal-input": {
        color: "#44b700",
        fontSize: "1.7rem",
        marginBottom: 0,
    },
}));

export default function HeroTerminal(props) {
    const [commands, setCommands] = useState([]);
    // const targetRef = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: targetRef,
    //     offset: ["end end", "center start"],
    // });

    // const scale = useTransform(scrollYProgress, [0, 0.2, 0.48, 1], [1, 1.05, 1.05, 1]);

    const onInput = (cmd) => {
        cmd = cmd && cmd.trim();
        if (!cmd) return;
        if (cmd.toLowerCase() === "clear") {
            setCommands([]);
            return;
        }
        setCommands((pc) => [...pc, cmd]);
    };

    return (
        <motion.div>
            <HeroTerminalContainer>
                <Terminal name="terminal - chat with me" onInput={onInput}>
                    <TerminalOutput>type to ask anything about me! ('help' for all supported commands)</TerminalOutput>
                    <TerminalInput>who -r -u</TerminalInput>
                    <TerminalOutput>i'm currently an undergraduate at fudan univeristy, where i'm very fortunate to be advised by <Link alt="yang chen's homepage" href="https://chenyang03.wordpress.com/">prof. yang chen</Link>.</TerminalOutput>
                    <TerminalInput>what -u -do</TerminalInput>
                    <TerminalOutput>recently, i'm measuring the performance of some critical internet services. my goal is to create products that provide optimal and enjoyable user experiences with technologies in ui/ux (e.g., ar/vr, voice ui) and networking.</TerminalOutput>
                    {commands.map((cmd, idx) => {
                        return (
                            <Fragment key={idx}>
                                <TerminalInput>{cmd}</TerminalInput>
                                <TerminalOutput>world</TerminalOutput>
                            </Fragment>
                        );
                        // let response = supportedCommands[cmd.toLowerCase()] || <TerminalOutput>Unknown Command</TerminalOutput>;
                        // return (
                        //     <Fragment key={idx}>
                        //         <TerminalInput>{cmd}</TerminalInput>
                        //         {response}
                        //     </Fragment>
                        // )
                    })}
                </Terminal>
            </HeroTerminalContainer>
        </motion.div>
    );
};
