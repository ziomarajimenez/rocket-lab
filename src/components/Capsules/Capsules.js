import { useEffect, useState } from "react";
import { Rocket } from '../Rocket/Rocket'
import styles from './Capsules.module.css';

export const Capsules = () => {
    let [rockets, setRockets] = useState("");

    useEffect(() => {
        fetch("https://api.spacexdata.com/v3/capsules")
            .then((response) => response.json())
            .then((rocket) => {
                setRockets(rocket);
                console.log(rocket);
            })
            .catch((error) => {
                console.log(error)
            })
    }, []);

    return (
        <>
            <h2>All Capsules:</h2>
            <section className={styles.allCapsules}>
                {rockets && rockets.map(rocket => {
                    return (
                        <Rocket
                            key={rocket.capsule_serial}
                            serial={rocket.capsule_serial}
                            details={rocket.details}
                            status={rocket.status}
                        />
                    )
                })}
            </section>
        </>
    )

};
