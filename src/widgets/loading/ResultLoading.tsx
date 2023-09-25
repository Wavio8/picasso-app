import React from 'react';
import { Button, Result } from 'antd';

const ResultLoading: React.FC = () => (
    <Result
        status="error"
        title="There are some problems with loading posts."
    />
);

export default ResultLoading;