var ConfigResolvers = function ConfigResolvers() {
    var config_file = require("./services.json");
    
    this.googledns_params = config_file["googledns_params"];

    this.http_params = config_file["http_params"];
}

module.exports = new ConfigResolvers();