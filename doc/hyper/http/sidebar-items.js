initSidebarItems({"enum":[["HttpReader","Readers to handle different Transfer-Encodings."],["HttpWriter","Writers to handle different Transfer-Encodings."]],"constant":[["CR",""],["LF",""],["LINE_ENDING",""],["SP",""],["STAR",""]],"type":[["RawHeaderLine","The raw bytes when parsing a header line."],["RequestLine","`request-line   = method SP request-target SP HTTP-version CRLF`"],["StatusLine","`status-line = HTTP-version SP status-code SP reason-phrase CRLF`"]],"struct":[["RawStatus","The raw status code and reason-phrase."]],"fn":[["is_token","Determines if byte is a token char."],["read_header","Read a RawHeaderLine from a Reader."],["read_http_version","Read the `HttpVersion` from a raw stream, such as `HTTP/1.1`."],["read_method","Read a `Method` from a raw stream, such as `GET`. ### Note: Extension methods are only parsed to 16 characters."],["read_request_line","Read the `RequestLine`, such as `GET / HTTP/1.1`."],["read_status","Read the StatusCode from a stream."],["read_status_line","Read the StatusLine, such as `HTTP/1.1 200 OK`."],["read_uri","Read a `RequestUri` from a raw stream."]]});