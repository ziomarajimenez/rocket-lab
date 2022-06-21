import { useState, useEffect } from "react";
import activeIcon from '../../assets/rocketActive.svg';
import destroyedIcon from '../../assets/rocketDeactivate.svg';
import unknownIcon from '../../assets/rocketUnknown.svg';
import styles from './Rocket.module.css';

export const Rocket = (props) => {
  let { serial, details, status } = props;
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (status === 'active') {
      setIcon(activeIcon);
    } else if (status === 'retired' || status === 'destroyed') {
      setIcon(destroyedIcon);
    } else {
      setIcon(unknownIcon);
    }
  }, [status])

  return (
    <figure className={styles.article}>
      <span className={styles.nameStatus}>
        <h3 className={styles.name}>{serial}</h3>
        <img src={icon} alt='rocket status icon' className={styles.cardIcon}></img>
      </span>
      <p className={styles.details}>{details}</p>
    </figure>
  )
}