function downloadAsset(name) {
execShellScript('./curltotestfile.sh "https://assets.scratch.mit.edu/'+name+'"');
write(name,read("testfile.txt"));
}
