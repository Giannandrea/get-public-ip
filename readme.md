get-public-ip provides dns, http, https methods to find public ip of the system running the script

## Introduction

Currently, this project just provides simple client to find public ip using differents methologyes.
It can use DNS resolution using 2 providers, OpenDNS and Google and classic http and https.

Key points of this module is the ability to run on multiple nodejs version, testing on 0.10.x, 4.4.x, 6.9.x, 6.14.x, 8.11.x and should works also with newer versions. 
The decision of support also old nodejs versions is due the fact that starting from version 0.10.x nodejs stop support architectures without FPU and some embedded software are still working on nodejs 0.10.x version.

## Usage

    var resolv = require('get-public-ip');
    resolv.getPublicIpFromOpenDns(function (err, address) {
      if (error) {
        console.log("Error retreaving public ip: "+err);
        return;
      }
      console.log(address); 
    });


## API DOC

#### getPublicIpFromOpenDns(callback)
It takes a function callback as parameter witch is called with IPV4 public address retrieved by OpenDns query.

#### getPublicIpFromGoogleDns(callback)
It takes a function callback as parameter witch is called with IPV4 public address retrieved by Google Dns query.

#### getPublicIpFromHTTP(callback)
It takes a function callback as parameter witch is called with IPV4 public address retrieved by http whatismyip.akamai.com provider.

#### getPublicIpFromHTTPS(callback)
It takes a function callback as parameter witch is called with IPV4 public address retrieved by https icanhazip.com provider.

## Installation
    
    npm install --save https://github.com/Giannandrea/get-public-ip/tarball/master

## License

This module is released under the MIT license.

## Bugs

See <https://github.com/Giannandrea/get-public-ip/issues>.
