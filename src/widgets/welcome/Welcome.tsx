import React from 'react';
import {Col, Row} from "antd";
import styles from "./style.module.scss";

function Welcome() {
    return (
        <div>
            <Row style={{background: "white"}}>
                <Col span={14} className={styles.col__welcome}>
                    <div>
                        <h3 className={styles.welcome__subtitle}>Hello posts.</h3>
                        <h1 className={styles.welcome__title}>Смотри посты!</h1>
                    </div>
                    <div className={styles.short_description}>
                        <span className={styles.short_description__name}>
                            Посмотри 100 постов
                        </span>
                        <span className={styles.short_description__name}>
                            Листай быстро
                        </span>
                    </div>
                </Col>
                <Col span={10}>
                    <div style={{padding: '20px'}}>
                        <img
                            src="/chat.jpg"
                            alt="Chat"
                            style={{maxWidth: '100%', height: 'auto'}}
                        />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default Welcome;