var util = require('./lib/util');
var knode = require('./lib/knode');

var self = process.argv[2].split(':');
var port = parseInt(self[1] || 10000);
var node = new knode.KNode({ address: self[0], port: port });

if (process.argv.length >= 4) {
    var arg = process.argv[3].split(':');
    if (arg[0])
        node.connect(arg[0], parseInt(arg[1]));
    setInterval(function() {
        /*node.get('foo', function(err, value) {
            if (err) {
                console.log("Not found");
                node.set('foo', 'bar', function(err) {
                    node.get('foo', function(err, value) {
                        if (err)
                            console.log("Still not inserted");
                        else
                            console.log("======> Inserted", value);
                    });
                });
            }
            else {
                console.log("=======> Already exists", value);
            }
        });*/
        if (port == 10000)
            node.set('foo', 'bar');
        console.log("This node storage", node._storage);
    }, 4000);
}
