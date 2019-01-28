var svg_file_id = 0;
var png_file_id = 0;
var wav_file_id = 0;

function downloadAsset(name) {
execShellScript('./curltotestfile.sh "https://assets.scratch.mit.edu/'+name+'"');
var type = name.split(".")[name.split(".").length-1];
switch(type) {
  case "svg":
    write(svg_file_id+".svg",fs.readFileSync("testfile.txt").toString());
    svg_file_id++;
    break;
  case "png":
    write(png_file_id+".png",fs.readFileSync("testfile.txt").toString());
    png_file_id++;
    break;
  case "wav":
    write(wav_file_id+".wav",fs.readFileSync("testfile.txt").toString());
    wav_file_id++;
    break;
}

}
