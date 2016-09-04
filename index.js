'use strict';
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

var apmPackagesFilename = 'packages.list';
var apmExportCommand = 'apm list --installed --bare >'; // plus filename
var apmInstallCommand = 'apm install --packages-file'; // plus filename
var aptPpaAddCommand = `sudo add-apt-repository ${ppa} --yes`

console.log( argv._ );
console.log( argv._.indexOf('carry') > -1 );
console.log( __dirname );

var ppa = 'ppa:birdie-team/stable';
execute( aptPpaAddCommand, function( stdout ){
  console.log('done');
} )

var dogmeat = {};

// figure out OS

dogmeat.carry = function(){
	// @TODO: pack up all my stuff
  fs.mkdir( 'data', function dataCreated(){
    console.log( 'packing apm packages' );
    execute( apmExportCommand + ' ' + __dirname + '/data/' + apmPackagesFilename, function postExecute( stdout ){
      console.log( stdout );
    } );
    /*
    fs.writeFileSync(
      targetFile, fs.readFileSync(sourceFile)
    );
    */
  } );
}

if ( argv._.indexOf('carry') > -1 ){
  console.log('carry')
  dogmeat.carry();
}

dogmeat.fetch = function(){
  // @TODO: get all my stuff
  // apm install


}

function getUserHome() {
  return process.env.HOME || process.env.USERPROFILE;
}

function execute( command, callback ){
  exec( command, function( error, stdout, stderr ){
    console.log( error, stdout, stderr );
    callback( stdout );
  } );
};
