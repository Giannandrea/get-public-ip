var ConfigResolvers = function ConfigResolvers() {
    this.opendns_params = {
        v4: {
            dnsServer1: '208.67.222.222',
            dnsServer2: '208.67.220.220',
            dnsQuery: {
                name: 'myip.opendns.com',
                type: 'A'
            }
        }
    };

    this.googledns_params = {
        v4: {
            dnsServer1: '8.8.8.8',
            dnsServer2: '8.8.4.4',
            dnsQuery: {
                name: 'o-o.myaddr.l.google.com',
                type: 'TXT'
            }
        }
    };

    this.http_params = {
        v4: {
            http: {
                host: 'whatismyip.akamai.com',
                path: '/',
                port: 80,
                headers: {
                    "Host": "whatismyip.akamai.com"
                }
            },
            https: {
                host: 'icanhazip.com',
                path: '/',
                port: 443,
                headers: {
                    "Host": "icanhazip.com"
                }
            }
        }
    };
}

module.exports = new ConfigResolvers();