import React, { useState } from "react";
import StopWatchButton from "./StopWatchButton";

export default function StopWatch() {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState([]);

    return(
        <section className={"stopwatch"}>
            {count}
            <StopWatchButton
            count={count}
            setCount={setCount}
            isActive={isActive}
            setIsActive={setIsActive}
            />
        </section>
    )
}