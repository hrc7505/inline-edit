import * as React from "react";
import { FontSizes } from "@uifabric/styling";
import List from "./List";

export default function App() {
    return (
        <>
            <div style={{ fontSize: FontSizes.xLargePlus, textAlign: "center" }}>
                Inline edit demo
            </div>
            <hr />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <div style={{ maxWidth: 850, width: "100%", border: "1px solid #f3f2f1" }}>
                    <List />
                </div>
            </div>
        </>
    );
}