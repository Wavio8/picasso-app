import React from 'react';
import {Space, Spin} from 'antd';

const SpinLoading: React.FC = () => (
    <Space direction="vertical" style={{width: '100%',display:"flex", alignItems:"center", marginTop:"5%"}}>
        <Space >
            <Spin tip="Loading" size="large">
                <div style={{padding: "50px"}}/>
            </Spin>
        </Space>
    </Space>


);

export default SpinLoading;