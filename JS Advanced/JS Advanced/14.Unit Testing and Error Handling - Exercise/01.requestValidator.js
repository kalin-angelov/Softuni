function requestValidator(input) {

    let method = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let uriPattern = /^[\w.]+$/g;
    let version = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let message = [`<`, `>`, `\\`, `&`, `'` , `"`];

    if (!method.includes(input.method)) {
        throw new Error(`Invalid request header: Invalid Method`);
    }
    if (!input.hasOwnProperty('uri')) {
        throw new Error (`Invalid request header: Invalid URI`);
    }
    if (input.uri !== "*" && !input.uri.match(uriPattern)) {
        throw new Error (`Invalid request header: Invalid URI`);
    }
    if (!version.includes(input.version)) {
        throw new Error (`Invalid request header: Invalid Version`);
    }
    if (!input.hasOwnProperty('message')) {
        throw new Error (`Invalid request header: Invalid Message`);
    }
    for (let chr of input.message) {
        if (message.includes(chr)) {
            throw new Error (`Invalid request header: Invalid Message`);
        }
    }
    
    return input
}
requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
})
