// Fuction constructor with ES5
function Server(name, ip) {
  this.name = name;
  this.ip = ip;
}

Server.prototype.getUrl = function() {
  return `https://${this.ip}:80`;
};

const aws = new Server('AWS Germany', '83.22.23.65');

console.log(aws.getUrl());

// With ES6 "classes"
class Server2 {
  constructor(name, ip) {
    this.name = name;
    this.ip = ip;
  }

  getUrl() {
    return `https://${this.ip}:80`;
  }
}

const aws2 = new Server2('AWS Germany', '83.22.23.65');

console.log(aws2.getUrl());
