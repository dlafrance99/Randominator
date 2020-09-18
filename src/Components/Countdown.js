import React, { useEffect } from 'react';

const Countdown = ({ isActive, target, timeToChange }) => {


    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                target()
            }, timeToChange)
        } else if (!isActive) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive])

    return null
}

export default Countdown;