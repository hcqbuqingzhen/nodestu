const url=require('url');

const urlObject={
    protocol: 'http:',
    host: 'www.test.com',
    port: 80,
    hostname: 'www.test.com',
    search: '?orderId=12345',
    query: 'orderId=12345',
    pathname: '/',
    path: '/?orderId=12345',
    href: 'http://www.test.com/?orderId=12345'
};

let realAddress=url.format(urlObject);
console.log(realAddress);