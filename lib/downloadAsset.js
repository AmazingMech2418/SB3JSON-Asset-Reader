var svg_file_id = 0;
var png_file_id = 0;
var wav_file_id = 0;

function downloadAsset(name) {
execShellScript('./curltotestfile.sh "https://assets.scratch.mit.edu/'+name+'"');
var type = name.split(".")[name.split(".").length-1];
switch(type) {
  case "svg":
    write(svg_file_id+".svg",read("testfile.txt"));
    svg_file_id++;
    break;
  case "png":
    write(png_file_id+".png",read("testfile.txt"));
    png_file_id++;
    break;
  case "wav":
    write(wav_file_id+".wav",read("testfile.txt"));
    wav_file_id++;
    break;
}

}
