import React from 'react';

type StopWatchButtonProps = {
    isActive: boolean;
    count: number;
    setCount: React.Dispatch<React.SetStateAction<number>>;
    setIsActive: React.Dispatch<React.SetStateAction<boolean>>;
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

const lapHandler = () => {
};

export default function StopWatchButton({
    count,
    isActive,
    setCount,
    setIsActive
}: StopWatchButtonProps) {
    return(
        <div>
            <button onClick={() => stopWatchHandler(setIsActive)}>{!isActive ? count === 0 ? "Start" : "Resume" : "Pause"}</button>
            <button onClick={() => resetWatchHandler(setCount)}>Reset</button>
        </div>
    )
}