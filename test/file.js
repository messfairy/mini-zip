copyFile('test/file.js', 'test/file3.js');
function copyFile(source, target, callback) {
    var callbackCalled = false;
    var fs = require('fs');
    var rd = fs.createReadStream(source);
    rd.on("error", function(err) {
        done(err);
    });
    var wr = fs.createWriteStream(target);
    wr.on("error", function(err) {
        done(err);
    });
    wr.on("close", function(exception) {
        done();
    });
    rd.pipe(wr);
    function done(err) {
        if (!!callback&&!callbackCalled) {
            callback(err);
            callbackCalled = true;
        }
    }
}