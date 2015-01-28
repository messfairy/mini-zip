exports = function(path){
    var fs = require('fs');
    var archiver = require('archiver');
    var output = fs.createWriteStream('tmp-unzip.zip');
    var archive = archiver('zip');
    archive.on('error', function(err){
        throw err;
    });
    archive.pipe(output);
    archive.bulk([
        { src: path}
    ]);
    archive.finalize();
}