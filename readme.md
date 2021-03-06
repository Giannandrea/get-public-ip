get-public-ip is one of the most faster library that provide public ip of the client using dns, http, https methods.

## Introduction

Currently, this project just provides simple client to find public ip using differents methologyes.
It can use DNS resolution using Google as dns provider and classic http and https.

Key points of this module is the ability to run on multiple nodejs version, testing on 0.10.x, 4.4.x, 6.9.x, 6.14.x, 8.11.x and should works also with newer versions. 
The decision of support also old nodejs versions is due the fact that starting from version 0.10.x nodejs stop support architectures without FPU and some embedded software are still working on nodejs 0.10.x version.

## Usage

    var resolv = require('get-public-ip');
    resolv.getPublicIpFromGoogleDns(function (err, address) {
      if (err) {
        console.log("Error retreaving public ip: "+err);
        return;
      }
      console.log(address); 
    });


## API DOC

#### (Retired) getPublicIpFromOpenDns(callback)
OpenDNS stop this function, and replace it with a http service.

#### getPublicIpFromGoogleDns(callback)
It takes a function callback as parameter witch is called with IPV4 public address retrieved by Google Dns query.

#### getPublicIpFromHTTP(callback)
It takes a function callback as parameter witch is called with IPV4 public address retrieved by http whatismyip.akamai.com provider.

#### getPublicIpFromHTTPS(callback)
It takes a function callback as parameter witch is called with IPV4 public address retrieved by https icanhazip.com provider.

### getPublicIpFrom(service, callback)
It takes a service string and function callback as parameter witch is called with IPV4 public address retrieved by one of the supported services.

## supported services
- akamai
- amazon_aws
- dyndns
- i_can_haz_ip
- ident_me
- ifconfig_me
- ip_echo
- ip_info
- ip_ogre
- smart_ip
- what_is_my_ip_address
- opendns

## Installation from public npm
    npm install get-public-ip

## Installation from github
    npm install --save https://github.com/Giannandrea/get-public-ip/tarball/master

## License

This module is released under the MIT license.

## Bugs

See <https://github.com/Giannandrea/get-public-ip/issues>.
