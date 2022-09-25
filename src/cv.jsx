import { Link } from "react-router-dom";
import { Document, Page } from "react-pdf";
import { pdfjs } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/umd/Page/AnnotationLayer.css";
import "./scroller.css";
import "./pdf.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const CV = () => {
  return (
    <div className="relative w-full h-full flex justify-center items-center tracking-tight font-copperplate text-1.5xl">
      <div className="border border-gray-800 sm:h-4/5 sm:w-auto h-3/4 w-4/5 overflow-scroll">
        <Document file="brandon_wang_cv.pdf">
          <Page pageNumber={1} />
        </Document>
      </div>
    </div>
  );
};
