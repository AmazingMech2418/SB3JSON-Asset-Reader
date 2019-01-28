var md5ext_arr = [];

function recursive_md5extSearch(object) {
var x;
  for(x in object) {
  if(x="md5ext") {
  md5ext_arr.push(object[x]);
  } else if (typeof(x)=="object" || typeof(x)=="array") {
  recursive_md5extSearch(object[x]);
  }
  }
}

function getFiles() {
var projectJSON = JSON.parse(read("project.json"));
// read all "md5ext" attributes into an array
  var x;
  for(x in projectJSON) {
  if(x="md5ext") {
  md5ext_arr.push(projectJSON[x]);
  } else {
  recursive_md5extSearch(projectJSON[x]);
  }
  }
}
