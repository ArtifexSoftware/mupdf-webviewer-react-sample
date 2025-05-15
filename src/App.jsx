import { useEffect } from 'react';
import './App.css'
import { initMuPDFWebViewer } from 'mupdf-webviewer'

function App() {

  useEffect(() => {
    initMuPDFWebViewer(
      '#viewer',
      '/sample.pdf',
      {
        libraryPath: 'lib',
        licenseKey: 'YOUR_LICENCE_KEY', // Visit https://webviewer.mupdf.com to get a trial license.
      },
    )
      .then(() => console.log('MuPDF WebViewer is loaded successfully.'))
      .catch(console.error);
  })

  return <div id="viewer"></div>
}

export default App
