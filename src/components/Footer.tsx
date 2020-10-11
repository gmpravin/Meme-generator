import React, { FC } from "react";

export const Footer: FC = (): JSX.Element => {
    return (
        <footer className="text-center" style={{ padding: "10px", height: "50px" }}>
            <strong style={{ textAlign: "center", color: "white" }} ><span aria-label="Cool" role="img">😎</span> {"Api used for educational purpose".toUpperCase()}<span aria-label="cute" role="img">😍</span></strong>
        </footer>
    )

};