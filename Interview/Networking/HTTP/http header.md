> HTTP headers let the client and the server pass additional information with an HTTP request or response. An HTTP header consists of its case-insensitive name followed by a colon (:), then by its value. Whitespace before the value is ignored.

## Preflight request
A CORS preflight request is a CORS request that checks to see if the CORS protocol is understood and a server is aware using specific methods and headers.

It is an OPTIONS request, using three HTTP request headers: Access-Control-Request-Method, Access-Control-Request-Headers, and the Origin header.

## Access-Control-Allow-Headers
The Access-Control-Allow-Headers response header is used in response to a preflight request which includes the Access-Control-Request-Headers to indicate which HTTP headers can be used during the actual request.

This header is required if the request has an Access-Control-Request-Headers header.

## Referer
The Referer request header contains the address of the previous web page from which a link to the currently requested page was followed. The Referer header allows servers to identify where people are visiting them from and may use that data for analytics, logging, or optimized caching, for example.

The HTTP referer (a misspelling of referrer[1]) is an optional HTTP header field that identifies the address of the webpage (i.e. the URI or IRI) which is linked to the resource being requested. By checking the referrer, the new webpage can see where the request originated.

## Referrer-Policy
The Referrer-Policy HTTP header controls how much referrer information (sent via the Referer header) should be included with requests.

## Keep-Alive
The Keep-Alive general header allows the sender to hint about how the connection may be used to set a timeout and a maximum amount of requests.

## User-Agent
The User-Agent request header contains a characteristic string that allows the network protocol peers to identify the application type, operating system, software vendor or software version of the requesting software user agent.

