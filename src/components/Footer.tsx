import React, { FC, useState } from "react";

export const Footer: FC = (): JSX.Element => {
    return (
        <footer className="text-center" style={{ padding: "10px", height: "50px" }}>
            <strong style={{ textAlign: "center", color: "white" }} >😎 {"Api used for educational purpose".toUpperCase()} 😍</strong>
        </footer>
    )

};