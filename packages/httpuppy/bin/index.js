#! /usr/bin/env node
const { useColorTag } = require('../lib/internal/include');
const { useServer } = require('../lib');
const cluster = require('cluster');
const { resolve } = require('path');
const { log } = console;
const args = process.argv;

if(!args.includes('--serve')) {
	log(useColorTag('red', 'error: must provide a directory with the --serve option'));
	process.exit(1);
}
const serve_index = args.indexOf('--serve');
let port = 3000;
const port_index = args.indexOf('--port');
if(port_index !== -1 && (args.length <= port_index)) port = args[port_index+1];
if(args.length <= serve_index) {
	log(useColorTag('red', 'error: no directory provided after --serve'));
	process.exit(1);
}

const hot_dir = args[args.indexOf('--serve')+1];
if(cluster.isPrimary) {
	const serve_dir = resolve(process.cwd(), hot_dir);
	log(useColorTag('blue', '[httpuppy]'), useColorTag('green', 'server started'));
	log(useColorTag('green', '\nServer Options:\n'));

	log(useColorTag('purp', 'port'), ':', port);
	log(useColorTag('purp', 'static directory:'), serve_dir);
}

const server = useServer({
	clustered: true,
	port
});

server.static('/', hot_dir);
server.start();