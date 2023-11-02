document.addEventListener("DOMContentLoaded", () => {
  const url = new URL(window.location.href);
  const urlParam = url.searchParams.get("url")
  generateQRCode(urlParam)
});

function generateQRCode(url) {
    const QRElement = document.getElementById("qr-code");
    QRElement.innerHTML = "";
    new QRCode(QRElement, {
        text: url,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    })
}