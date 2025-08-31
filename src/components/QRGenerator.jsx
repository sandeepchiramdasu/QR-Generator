import React, { useState } from 'react'
import QRCode from 'react-qr-code'
import './QRGenerator.css'


const QRGenerator = () => {
  const [qrcode, setQrcode] = useState('')
  const [input, setInput] = useState('')
  const [format, setFormat] = useState('png')

  const handleClick = () => {
    if (input.trim() === '') {
      alert('Please enter text...')
    } else {
      setQrcode(input)
    }
  }

    const handleDownload = () => {
    if (!qrcode) {
      alert('Please generate QR first!');
      return;
    }

    const svg = document.getElementById('qr-code-generator');
    const svgData = new XMLSerializer().serializeToString(svg);

    // Encode safely to handle Unicode
    const svgBlob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);

    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement('canvas');
      const ctx = canvas.getContext('2d');
      canvas.width = img.width;
      canvas.height = img.height;

      // White background if saving as JPG
      if (format === 'jpg') {
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      }

      ctx.drawImage(img, 0, 0);

      const link = document.createElement('a');
      link.href = canvas.toDataURL(`image/${format}`);
      link.download = `qrcode.${format}`;
      link.click();

      URL.revokeObjectURL(url); // cleanup
    };
    img.src = url;
  };

  return (
    <div className="qr-container">
        
      
      <div className="qr-left">
        <h1>QR Code Generator</h1>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter text here"
          className="qr-input"
        />
        <button onClick={handleClick} className="qr-btn">
          Generate
        </button>
      </div>

      
      <div className="qr-right">
        <QRCode id="qr-code-generator" className='qr' value={qrcode} size={400} />
        <div className="qr-options">
          <select  className='format-selection' value={format} onChange={(e) => setFormat(e.target.value)}>
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
          </select>
          <button onClick={handleDownload} className="qr-btn">
            Download QR
          </button>
        </div>
      </div>
    </div>
  )
}

export default QRGenerator
