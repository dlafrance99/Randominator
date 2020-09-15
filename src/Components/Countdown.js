import React, { useEffect } from 'react';

const Countdown = ({ isActive, target }) => {
    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                target()
            }, 3000)
        } else if (!isActive) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [isActive])

    return null
}

export default Countdown;