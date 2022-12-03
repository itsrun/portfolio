import { Fragment } from "react";
import TypeTitle from "../TypeText";
import { styled } from "@mui/material/styles";
import Browser, { Chrome } from "react-browser-ui";
import { Box } from "@mui/material";
const { Tab, Divider, AddButton } = Chrome;

const BrowserContainer = styled(Box)(({ theme }) => ({
    fontWeight: 500,
    color: "#111",
    cursor: "default",
    overflow: "hidden",
    borderRadius: "1.6rem",
    marginTop: theme.spacing(3),
}));

const BrowserTabBox = styled(Box)(({ theme }) => ({
    backgroundColor: "#fff",
    overflow: "auto",
    colorScheme: "light",
    "& .MuiImageList-root": {
        marginBottom: 0,
    },
}));

export default function Life(props) {
    return (
        <Fragment>
            <TypeTitle title="aside from work, i enjoy" id="gallery" />
            <BrowserContainer>
                <Browser
                    type="chrome"
                    showHeader={false}
                    activeTabKey="hkp"
                    tabEnd={(
                        <Fragment>
                            <Divider />
                            <AddButton />
                        </Fragment>
                    )}
                >
                    <Tab key="hkp" title="songs i love right now">
                        <BrowserTabBox>
                            <iframe
                                title="My Spotify Playlist"
                                style={{
                                    marginBottom: -4,
                                    height: "max(36rem, 64vh)",
                                }}
                                src="https://open.spotify.com/embed/playlist/7hBSqiY7yd1KdJrSAnA4oG?utm_source=generator" width="100%"
                                frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                            />
                        </BrowserTabBox>
                    </Tab>
                    <Tab key="san" title="platlist w/ my friends">
                        <BrowserTabBox>
                            <iframe
                                title="study at night"
                                style={{
                                    marginBottom: -4,
                                    height: "max(36rem, 64vh)",
                                }}
                                src="https://open.spotify.com/embed/playlist/1tqPkeMlTl7asYMwhUju5V?utm_source=generator" width="100%"
                                frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"
                            />
                        </BrowserTabBox>
                    </Tab>
                </Browser>
            </BrowserContainer>
        </Fragment>
    );
};

/** 
import { ImageList, ImageListItem, ImageListItemBar, useMediaQuery } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import Section from "./common/Section";
import Browser, { Chrome } from "react-browser-ui";
import { Fragment } from "react";
import LazyImage from "./common/LazyImage";

const { Tab, Divider, AddButton } = Chrome;

const LifeSectionContainer = styled(Section)(({ theme }) => ({
    padding: "7.2rem 0",
    textAlign: "center",
}));

const concertImages = [
    { src: "tcs_18XFM2JsJ.jpeg", width: 1080, height: 1080, alt: "The Chainsmokers 2019 Asia Tour", sub: "@Shanghai, 09/10/2019" },
    { src: "dreamgirls_Uk1OPFeCC.jpeg", width: 1707, height: 999, alt: "Dreamgirls: The Broadway Musical", sub: "@Shanghai, 01/08/2020" },
    { src: "shanghai_iAv6dTgLz.jpeg", width: 1440, height: 1045, alt: "", sub: "@Shanghai, 09/19/2020" },
    { src: "bloom_VQ4BENTVL.jpeg", width: 1920, height: 1080, alt: "Troye Sivan 2019 The Bloom Tour", sub: "@Shanghai, 11/27/2019" },
    { src: "thesecondcity_Upkm4by1s.jpeg", width: 1279, height: 1517, alt: "The Second City: She the People", sub: "@San Diego, 11/29/2021", cond: true },
    { src: "dreamland_YuwoIugEu.gif", width: 180, height: 320, alt: "Glass Animals Dreamland Artwork", sub: "@glassanimals" },
    { src: "pageant_e7LxuKA8wZ.jpeg", width: 1080, height: 1079, alt: "Pageant Material PINK Vinyl", sub: "@Shanghai" },
    { src: "hollywood_WTaK98wSS.jpeg", width: 1279, height: 1706, alt: "Hollywood Walk of Fame", sub: "@Los Angeles, Hollywood" },
];

const travelImages = [
    { src: "mtjacinto_3aXF6mg2Q.jpeg", width: 1279, height: 1706, alt: "Mt. Jacinto", sub: "@Riverside, CA, Nov 11, 2021" },
    { src: "palmspring_SRwRXQcvR.jpeg", width: 1706, height: 1278, alt: "Palm Springs from the Mt. Jacinto Tram", sub: "@Riverside, CA, Nov 11, 2021" },
    { src: "oregon_8jOmgs10-.jpeg", width: 1706, height: 1279, alt: "Mountain Cabins", sub: "@Eugune, OR, Dec 14, 2021" },
    { src: "nevada_s9oUSN2jP.jpeg", width: 2235, height: 1280, alt: "Road Trip in Nevada", sub: "@Las Vegas, NV, Nov 27, 2021" },
    { src: "la_aCYxW7Hwm.jpeg", width: 1706, height: 1279, alt: "Overlooking Los Angeles from Mt. Lee", sub: "@Los Angeles, CA, Oct 24, 2021" },
    { src: "sanbernardino_If63ms9ht.jpeg", width: 1096, height: 824, alt: "Road Trip in California", sub: "@San Bernardino, CA, Nov 24, 2021" },
    { src: "redrock_BMeS1y7AQ.jpeg", width: 1706, height: 1279, alt: "Little Red Rock National Reserve", sub: "@Las Vegas, NV, Nov 27, 2021" },
    { src: "nevada2_QqdXwOXSO.jpeg", width: 1077, height: 801, alt: "Road Trip in Nevada", sub: "@Nevada, Nov 25, 2021" },
    { src: "lakemead_tG7XtYAWy.jpeg", width: 1706, height: 1279, alt: "Lake Mead", sub: "@Clark, NV, Nov 26, 2021" },
    { src: "hollywood_RRh6zDGkE.jpeg", width: 1279, height: 1706, alt: "Walking Up to the Hollywood Sign", sub: "@Los Angeles, Oct 24, 2021" },
];

const BrowserContainer = styled(Box)(({ theme }) => ({
    fontWeight: 500,
    width: "80%",
    minWidth: "32rem",
    maxWidth: "120rem",
    display: "inline-block",
    color: "#111",
    cursor: "default",
    fontFamily: "Roboto Condensed",
    overflow: "hidden",
    borderTopLeftRadius: "2rem",
    borderTopRightRadius: "2rem",
}));

const BrowserTabBox = styled(Box)(({ theme }) => ({
    maxHeight: "75vh",
    backgroundColor: "#fff",
    overflow: "auto",
    colorScheme: "light",
    padding: theme.spacing(0, 0.5),
    "& .MuiImageList-root": {
        marginBottom: 0,
    },
}));

export default function LifeSection(props) {
    const smbk = useMediaQuery("(min-width: 568px)");
    const mdbk = useMediaQuery("(min-width: 900px)");

    return (
        <LifeSectionContainer dark title="Aside from work, I enjoy" id="life" sx={{ paddingBottom: 0 }}>
            <BrowserContainer>
                <Browser
                    type="chrome"
                    showHeader={false}
                    activeTabKey="outdoors"
                    tabEnd={(
                        <Fragment>
                            <Divider />
                            <AddButton />
                        </Fragment>
                    )}
                >
                    <Tab key="outdoors" title="Travel & Outdoors">
                        <BrowserTabBox>
                            <ImageList variant="masonry" cols={mdbk ? 3 : (smbk ? 2 : 1)} gap={8}>
                                {travelImages.map(({ width, height, src, alt, sub }, idx) => (
                                    <ImageListItem key={idx}>
                                        <LazyImage
                                            src={`https://ik.imagekit.io/runh/webcv/image/travels/${src}`}
                                            alt={alt}
                                            width={width}
                                            height={height}
                                            className="MuiImageListItem-img"
                                        />
                                        <ImageListItemBar
                                            title={alt}
                                            subtitle={sub}
                                            sx={{
                                                ".MuiImageListItemBar-titleWrap": {
                                                    padding: "0px 16px 6px",
                                                },
                                                ".MuiImageListItemBar-title": {
                                                    fontSize: "1.5rem",
                                                    fontFamily: "Roboto Condensed",
                                                },
                                                ".MuiImageListItemBar-subtitle": {
                                                    fontSize: "1rem",
                                                },
                                            }}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        </BrowserTabBox>
                    </Tab>
                    <Tab key="music" title="Music">
                        <BrowserTabBox>
                            <ImageList variant="masonry" cols={mdbk ? 3 : (smbk ? 2 : 1)} gap={8}>
                                {concertImages.map(({ src, width, height, alt, sub, cond }, idx) => (
                                    (!(cond && mdbk)) && (<ImageListItem key={idx}>
                                        <LazyImage
                                            src={`https://ik.imagekit.io/runh/webcv/image/concerts/${src}`}
                                            width={width}
                                            height={height}
                                            alt={alt}
                                            className="MuiImageListItem-img"
                                        />
                                        <ImageListItemBar
                                            title={alt}
                                            subtitle={sub}
                                            sx={{
                                                ".MuiImageListItemBar-titleWrap": {
                                                    padding: "0px 16px 6px",
                                                },
                                                ".MuiImageListItemBar-title": {
                                                    fontSize: "1.5rem",
                                                    fontFamily: "Roboto Condensed",
                                                },
                                                ".MuiImageListItemBar-subtitle": {
                                                    fontSize: "1rem",
                                                },
                                            }}
                                        />
                                    </ImageListItem>)
                                ))}
                            </ImageList>
                        </BrowserTabBox>
                    </Tab>
                    <Tab key="spotify" title="My Spotify Playlist">
                        <BrowserTabBox sx={{
                            paddingTop: "3.6rem",
                            backgroundColor: "#222",
                        }}>
                            <iframe
                                title="My Spotify Playlist"
                                style={{
                                    borderTopLeftRadius: "1.2rem",
                                    borderTopRightRadius: "1.2rem",
                                    minHeight: "43rem",
                                    minWidth: "28rem",
                                    height: "100%",
                                    marginBottom: "-1rem",
                                    width: "80%",
                                }}
                                src="https://open.spotify.com/embed/playlist/5QNpBWeg7RSzf8oMuOTmI4?utm_source=generator&theme=0"
                                frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"
                            />
                        </BrowserTabBox>
                    </Tab>
                </Browser>
            </BrowserContainer>
        </LifeSectionContainer>
    );
}; 
*/