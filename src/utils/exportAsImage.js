import html2canvas from "html2canvas";

function exportAsImage(element, filename) {
  html2canvas(element).then(canvas => {
    const link = document.createElement("a");
    link.download = filename;
    link.href = canvas.toDataURL("image/png");
    link.click();
    });
}

export default exportAsImage;
