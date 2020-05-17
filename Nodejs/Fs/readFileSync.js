// __dirname 用于从当前文件所处目录按相对路径定位文件

if (this.type === 'https') {
	this.server = https.createServer({
			key: fs.readFileSync(path.resolve(__dirname, '../../../../certificate/server.key')),
			cert: fs.readFileSync(path.resolve(__dirname, '../../../../certificate/STAR_doraemonkart_com.crt')),
	}, app).listen(this.port);
}