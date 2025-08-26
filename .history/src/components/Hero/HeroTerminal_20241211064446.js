import Terminal, { TerminalInput, TerminalOutput } from "react-terminal-ui";
import { styled } from "@mui/material/styles";
import { Box, Link } from "@mui/material";
import { Fragment, useEffect, useState } from "react";
import { motion } from "framer-motion";

const HeroTerminalContainer = styled(Box)(({ theme }) => ({
    marginTop: theme.spacing(6),
    cursor: "default",
    "& .react-terminal": {
        height: "fit-content",
    },
    "& .react-terminal-wrapper": {
        padding: "6rem 4rem 3rem",
        border: "transparent 1px solid",
        borderRadius: "1.6rem",
        backgroundColor: "#111",
        height: "fit-content",
        "&:hover": {
            borderColor: "#555",
        },
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

export default function HeroTerminal({ commands }) {
    const [cmd, setCmd] = useState(["what -u -do"]);
    useEffect(() => {
        commands.help = [...Object.keys(commands), "clear"].join("\\n");
    }, [commands]);

    const onInput = (cmd) => {
        cmd = cmd?.split(" ").filter((v) => v).join(" ");
        if (!cmd) return;
        const cmdKey = cmd.toLowerCase();
        if (cmdKey === "clear") {
            setCmd([]);
            return;
        } else if (cmdKey === "rm -rf") {
            window.alert(commands["rm -rf"]);
            window.close();
        } else if (cmdKey === "get -cv") {
            const tempLink = document.createElement("a");
            tempLink.download = tempLink.href = `tingxi-cv.pdf`;
            document.body.appendChild(tempLink);
            tempLink.click();
            document.body.removeChild(tempLink);
        }
        setCmd((pc) => [...pc, cmd]);
    };

    const onClickHelp = () => {
        setCmd((prev) => [...prev, "help"]);
    }

    return (
        <motion.div>
            <HeroTerminalContainer>
                <Terminal name="terminal" onInput={onInput}>
                    <TerminalOutput>type to ask me something! ('<Link onClick={onClickHelp} sx={{ "&:hover": { cursor: "pointer" } }}>help</Link>' for all supported commands)</TerminalOutput>
                    <TerminalInput>who -r -u</TerminalInput>
                    <TerminalOutput>i'm a 1st year phd student in computer science at the university of texas at dallas (ut dallas), advised by <Link alt="wei's homepage" href="https://youngwei.com/">prof. wei yang</Link>. before that, i was an undergrad at dalian university of technology (大連理工大學), and a visiting student at technical university of munich (technische universität münchen).</TerminalOutput>
                    {cmd.map((cmd, idx) => {
                        return (
                            <Fragment key={idx}>
                                <TerminalInput>{cmd}</TerminalInput>
                                {(commands[cmd.toLowerCase()] || "unknown command").split("\\n").map((resp, idx) => (
                                    <TerminalOutput key={idx}>{resp}</TerminalOutput>
                                ))}
                            </Fragment>
                        );
                    })}
                </Terminal>
            </HeroTerminalContainer>
        </motion.div>
    );
};
