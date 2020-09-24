import React, { useEffect, useState } from 'react';
import { NavigationEvents } from 'react-navigation'

const Countdown = ({ isActive, target, timeToChange }) => {

    const [Active, setActive] = useState(isActive)

    const handleTimeExpire = async () => {
        if (isActive) {
            await target()
            setActive(true)
        } else {
            setActive(false)
        }
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

    return (
        <>
            <NavigationEvents onWillFocus={() => setActive(true)} />
        </>
    )
}

export default Countdown;