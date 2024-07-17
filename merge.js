const mergePdfs = async (p1, p2) => {
  const { default: PDFMerger } = await import('pdf-merger-js');
  
  const merger = new PDFMerger();

  await merger.add(p1);  // merge all pages. Parameter is the path to the file and filename.
  await merger.add(p2); 
  let d= new Date().getTime()
  await merger.save(`public/${d}.pdf`); // save under given name and reset the internal document
  return d
  // Export the merged PDF as a Node.js Buffer
  // const mergedPdfBuffer = await merger.saveAsBuffer();
  // fs.writeSync('merged.pdf', mergedPdfBuffer);
};

module.exports = { mergePdfs };
