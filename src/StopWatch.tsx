import React, { useState, useEffect } from "react";
import StopWatchButton from "./StopWatchButton";

export default function StopWatch() {
    const [count, setCount] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [laps, setLaps] = useState<number[]>([]);
    const [lapsIsActive, setLapsIsActive] = useState(false);
    const INTERVAL_DURATION = 100; // in milliseconds
    const INCREMENT_AMOUNT = 0.1; // in seconds

    useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isActive) {
        interval = setInterval(() => {
            setCount((prev) => Number((prev + INCREMENT_AMOUNT).toFixed(2)));
        }, INTERVAL_DURATION);
    }

    return () => clearInterval(interval);
    }, [isActive]);

    return(
        <section className={"stopwatch"}>
            {`${count} seconds`}
            <StopWatchButton
            count={count}
            setCount={setCount}
            isActive={isActive}
            setIsActive={setIsActive}
            laps={laps}
            setLaps={setLaps}
            lapsIsActive={lapsIsActive}
            setLapsIsActive={setLapsIsActive}
            />
    {lapsIsActive ? laps.map((lap, index) => <article key={index}>Lap {index + 1}: {lap} seconds<br/></article>): ""}
        </section>
    )
}