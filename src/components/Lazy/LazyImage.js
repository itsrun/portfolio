import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, ...props }) {
    const ref = useRef();
    const inView = useInView(ref, {
        once: true,
        margin: "0px 0px 128px 0px",
    });
    const [datasrc, setDatasrc] = useState(`${src}?tr=w-3`);

    useEffect(() => {
        inView && setDatasrc(src);
    }, [inView, src]);

    return (
        <img
            ref={ref}
            src={datasrc}
            alt={alt}
            width="100%"
            {...props}
        />
    );
};