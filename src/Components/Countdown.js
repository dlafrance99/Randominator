import React, { useEffect, useState } from 'react';

const Countdown = ({ isActive, target, timeToChange }) => {

    const [Active, setActive] = useState(isActive)

    const handleTimeExpire = async () => {
        await target()
        setActive(true)
    }

    useEffect(() => {
        let interval = null;
        if (Active) {
            interval = setInterval(() => {
                setActive(false)
                handleTimeExpire()
            }, timeToChange)
        } else if (!Active) {
            clearInterval(interval)
        }
        return () => clearInterval(interval)
    }, [Active])

    return null
}

export default Countdown;