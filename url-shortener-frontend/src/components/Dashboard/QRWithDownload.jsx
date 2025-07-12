const QrWithDownload = ({ shortUrl }) => {
  const [qrBase64, setQrBase64] = useState("");

  const fullShortUrl = `${import.meta.env.VITE_REACT_FRONT_END_URL}/s/${shortUrl}`;

  useEffect(() => {
    QRCode.toDataURL(fullShortUrl)
      .then((url) => {
        setQrBase64(url); // full base64 data URI
      })
      .catch((err) => {
        console.error("QR generation error:", err);
      });
  }, [shortUrl]);

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = qrBase64;
    link.download = `QRCode-${shortUrl}.png`;
    link.click();
  };
}
export default QrWithDownload;