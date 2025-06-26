import { useEffect } from 'react';
import { createRoot } from 'react-dom/client';
import './App.css'
import { initMuPDFWebViewer } from 'mupdf-webviewer'

function App() {

  useEffect(() => {

    initMuPDFWebViewer(
      '#viewer',
      '/sample.pdf',
      {
        libraryPath: 'lib',
        licenseKey: 'YOUR_LICENSE_KEY', // Visit https://webviewer.mupdf.com to get a trial license.
      },
    )
	  .then(mupdf => {
		/* API */
		mupdf.toast.show({ type: 'success', content: 'Document opened' });
		console.log('MuPDF WebViewer has successfully loaded.');

        mupdf.viewer.defineAnnotSelectMenu({html:"<div id='my-container'>Testing custom HTML & CSS for Highlight tool</div>",css:"#my-container {min-width:200px;min-height:200px;background-color: #FF00ff;}", tool:mupdf.refs.annotation.tool.HIGHLIGHT})

	  })
      .catch(err => {
        printError(err);
      });
  })
  
  return <div id="viewer"></div>
}

function printError(err) {
	console.log(err);
	const styleObj = {
		fontSize: 14,
		fontFamily: "Arial",
		textAlign: "left",
		margin: "20px",
	};

	const msg = "Please check your license key, if you are running on \"localhost\" then please create a license key for this domain.";
	const domNode = document.getElementById('viewer');
	const root = createRoot(domNode);
	const element = <div style={styleObj}><h1><code>initMuPDFWebViewer()</code> Error</h1><h2>{ String(err) }</h2><p>{msg}</p><h3></h3><h3>See <a href="https://webviewer.mupdf.com/account">https://webviewer.mupdf.com/account</a></h3></div>;
	root.render(element);
}

export default App
