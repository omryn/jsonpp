var target = process.argv[2];
var fs = require('fs');

var content;
var parsedContent;

try {
    process.stdout.write('Reading ' + target + ':\n');
    content = fs.readFileSync(target, 'utf8');
} catch (err) {
    process.stdout.write('Error reading ' + target);
    process.stdout.write(err.message);
    process.exit(1);
}

try {
    parsedContent = JSON.parse(content);
} catch (err) {
    process.stdout.write('Invalid JSON');
    process.stdout.write(err.message);
    process.exit(1);
}

process.stdout.write(JSON.stringify(parsedContent,null,4));

