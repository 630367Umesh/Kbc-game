// src/components/QRCodeComponent.js
import React from 'react';
import { QRCodeSVG } from 'qrcode.react';

const QRCodeComponent = () => {
    const url = window.location.href; // URL for the QR code
    return (
        <div>
            <h3>Scan to Join!</h3>
            <QRCodeSVG value={url} size={256} />
        </div>
    );
};

export default QRCodeComponent;
