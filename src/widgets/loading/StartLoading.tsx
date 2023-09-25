import React from 'react';
import styles from './styles.module.scss';

const StartLoading: React.FC = () => (
    <div className={styles.cont}>
        <div className={styles.paper}></div>
        <button className={styles.t}>
            <div className={styles.loader}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            Loading
        </button>
        <div className={styles.gCont}>
            <div className={styles.garbage}></div>
            <div className={styles.garbage}></div>
            <div className={styles.garbage}></div>
            <div className={styles.garbage}></div>
            <div className={styles.garbage}></div>
            <div className={styles.garbage}></div>
            <div className={styles.garbage}></div>
            <div className={styles.garbage}></div>
        </div>
    </div>

);

export default StartLoading;