import * as React from "react";

import AllUsersContainer from "./users/allUsersContainer";

export default function App() {
    return (
        <>
            <h2 style={{  textAlign: "center" }}>
                Inline edit demo <br/>
                <small>• React • Typescript • Redux</small>
            </h2>
            <hr />
            <div style={{ display: "flex", justifyContent: "center" }}>
                <AllUsersContainer />
            </div>
        </>
    );
}