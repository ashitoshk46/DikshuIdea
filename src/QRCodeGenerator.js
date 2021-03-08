import QRCode from "qrcode.react";
import "bootstrap/dist/css/bootstrap.min.css";

const download = function () {
  const link = document.createElement("a");
  link.download = "filename.png";
  link.href = document.getElementById("canvas").toDataURL();
  link.click();
};

export default function GenerateQRCode({ qrlink }) {
  return (
    <div>
      <QRCode value={qrlink} id="canvas" />
      <br />
      <button type="button" onClick={download} className="btn btn-primary mt-3">
        Download QR
      </button>
    </div>
  );
}
