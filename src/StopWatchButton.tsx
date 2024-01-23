import React from 'react';

type StopWatchButtonProps = {
    isActive: boolean;
    count: number;
    laps: number[];
    lapsIsActive: boolean;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
    setLaps: React.Dispatch<React.SetStateAction<number[]>>;
    setLapsIsActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const stopWatchHandler = (
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>
    ) => {
    setIsActive((prev) => !prev);
};

const resetWatchHandler = (
    setCount: React.Dispatch<React.SetStateAction<number>>,
) => {
    setCount(0);
};

const resetLapsHandler = (
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setLaps: React.Dispatch<React.SetStateAction<number[]>>
) => {
    setCount(0);
    setLaps([]);
};

const newLapHandler = (
    setLaps: React.Dispatch<React.SetStateAction<number[]>>,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    count: number
) => {
    count !== 0 ? setLaps((prev) => [...prev, count]) : setLaps((prev) => [...prev]);
    resetWatchHandler(setCount);
};

const lapsToStopwatchStateHandler = (
    setLapsIsActive: React.Dispatch<React.SetStateAction<boolean>>,
    setCount: React.Dispatch<React.SetStateAction<number>>,
    setLaps: React.Dispatch<React.SetStateAction<number[]>>
) => {
    setLapsIsActive(false);
    resetLapsHandler(setCount, setLaps);
};

export default function StopWatchButton({
    count,
    isActive,
    laps,
    lapsIsActive,
    setCount,
    setIsActive,
    setLaps,
    setLapsIsActive
}: StopWatchButtonProps) {
    return(
        <div>
            {
            lapsIsActive ?
            <div className="stopwatch__laps">
            <button onClick={() => newLapHandler(setLaps, setCount, count)}>Lap</button>
            <button onClick={() => stopWatchHandler(setIsActive)}>{!isActive ? count === 0 ? "Start" : "Resume" : "Pause"}</button>
            <button onClick={() => resetLapsHandler(setCount, setLaps)}>Reset</button>
            <button onClick={() => lapsToStopwatchStateHandler(setLapsIsActive, setCount, setLaps)}>Stopwatch</button>
            </div>
            : 
            <div className="stopwatch__normal">
            <button onClick={() => stopWatchHandler(setIsActive)}>{!isActive ? count === 0 ? "Start" : "Resume" : "Pause"}</button>
            <button onClick={() => resetWatchHandler(setCount)}>Reset</button>
            <button onClick={() => setLapsIsActive(true)}>Laps</button>
            </div>
            }
        </div>
    )
}