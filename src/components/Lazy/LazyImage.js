import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function LazyImage({ src, alt, margin, trim, ...props }) {
    const ref = useRef();
    const inView = useInView(ref, {
        once: true,
        margin: `0px 0px ${margin}px 0px`,
    });
    const [dataSrc, setDataSrc] = useState(`${src}?tr=w-${trim}`);

    useEffect(() => {
        inView && setDataSrc(src);
    }, [inView, src]);

    return (
        <img
            ref={ref}
            src={dataSrc}
            alt={alt}
            {...props}
        />
    );
};