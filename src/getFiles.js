var md5ext_arr = [];

function recursive_md5extSearch(object) {
  console.log(object)
var x;
  for(x in object) {
  if(x=="md5ext") {
  md5ext_arr.push(object[x]);
  } else if (typeof(object[x])=="object" || typeof(object[x])=="array") {
  recursive_md5extSearch(object[x]);
  }
  }
}

function getFiles() {
var projectJSON = JSON.parse(fs.readFileSync("project.json").toString());
// read all "md5ext" attributes into an array
  var x;
  for(x in projectJSON) {
  if(x=="md5ext") {
  md5ext_arr.push(projectJSON[x]);
  } else {
  recursive_md5extSearch(projectJSON[x]);
  }
  }
}
