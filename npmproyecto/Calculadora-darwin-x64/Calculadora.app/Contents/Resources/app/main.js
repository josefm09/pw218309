const app = require('electron').app;
const BrowserWindow = require('electron').BrowserWindow;

const path = require('path');
const url = require('url');

let PantallaPrincipal;
function muestraPantallaPrincipal() {
	PantallaPrincipal = new BrowserWindow({width:380,height:420});
	PantallaPrincipal.loadURL(url.format({
		pathname: path.join(__dirname,'index.html'),
		protocol: 'file',
		slashes: true
	}));

	PantallaPrincipal.show();
}
app.on('ready',muestraPantallaPrincipal);