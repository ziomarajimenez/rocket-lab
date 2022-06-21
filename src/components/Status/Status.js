import styles from './Status.module.css'

export const Status = (props) => {
    let { txt, img, gradient } = props;

    return (
        <div className={styles.statusBox} style={gradient}>
            <h4>{txt}</h4>
            <img alt="img-rocket" src={img} className={styles.rocketStatus} ></img>
        </div>
    );
}