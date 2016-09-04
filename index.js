// core
var fs = require( 'fs' );
var os = require( 'os' );
var exec = require('child_process').exec;


// third party
var argv = require( 'minimist' )(process.argv.slice(2) );
var async = require( 'async' );

var filesICareAbout = [
  '.atom/config.cson',
  '.atom/keymap.cson'
];

var directoriesICareAbout = [];

var apmExportCommand = 'apm list --installed --bare > package-list.txt';

console.dir(argv);

var dogmeat = {};

// figure out OS

if ( argv.carry ){
  dogmeat.carry();
}


dogmeat.carry = function(){
  fs.mkdir( 'data', function dataCreated(){
    /*
    fs.writeFileSync(
      targetFile, fs.readFileSync(sourceFile)
    );
    */
  } );
}

function getUserHome() {
  return process.env.HOME || process.env.USERPROFILE;
}

function execute(command, callback){
  exec( command, function( error, stdout, stderr ){
    callback(stdout);
  } );
};
