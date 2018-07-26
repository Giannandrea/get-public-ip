var resolver = require('dns');
var https = require("https");
var http = require('http');
var configurations = require('./resolvers.js');

var PublicIpAddress = function PublicIpAddress() {

    parse_google_result = function (result) {
        try {
            var splitted = result[1][0].split(" ");
            var ret = splitted[1].split("/")[0];
            return ret
        } catch (error) {
            return null;
        }
    }

    performDnsQuery = function (settings, version, callback) {
        var type = settings[version].dnsQuery.type;
        resolver.setServers([settings[version].dnsServer1, settings[version].dnsServer2]);
        resolver.resolve(settings[version].dnsQuery.name, type, function (err, addresses) {
            if (err) {
                throw new Error('Couldn\'t find your IP');
            } else {
                callback(null, addresses);
            }
        });
    };

    this.getPublicIpFromOpenDns = function (callback) {
        var version = "v4";
        performDnsQuery(config.opendns_params, version, callback);
    };

    this.getPublicIpFromGoogleDns = function (callback) {
        var version = "v4";
        performDnsQuery(config.googledns_params, version, function (err, addresses) {
            var parsed_result = parse_google_result(addresses);
            if (err && !parsed_result) {
                throw new Error('Couldn\'t find your IP');
            } else {
                callback(null, parsed_result);
            }
        });
    };

    this.getPublicIpFromHTTP = function (callback) {
        var version = "v4";
        var str = ''
        var req = http.request(configurations.http_params[version]["http"], function (response) {
            response.on('error', function (error) { 
                throw new Error('Couldn\'t find your IP');
            });
            response.on('data', function (chunk) { 
                str += chunk;
            });
            response.on('end', function () {
                callback(null, str);
              });
        })
        req.end();
    };

    this.getPublicIpFromHTTPS = function (callback) {
        var version = "v4";
        var str = ''
        var req = https.request(config.http_params[version]['https'], function (response) {
            response.on('error', function (error) { 
                throw new Error('Couldn\'t find your IP');
            });
            response.on('data', function (chunk) { 
                str += chunk;
            });
            response.on('end', function () {
                callback(null, str);
              });
        });
        req.end();
    };
};

module.exports = new PublicIpAddress();