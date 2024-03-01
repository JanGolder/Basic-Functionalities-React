import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {


  return (
    <div>
      <h1>QR Code Generator</h1>
      <div>
      </div>
      <div>
        <QRCode id="qr-code-value" value={qrCode} size={400} bgColor="#fff" />
      </div>
    </div>
  );
}