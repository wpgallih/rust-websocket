(function() {var implementors = {};
implementors['hyper'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;W&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='hyper/client/request/struct.Request.html' title='hyper::client::request::Request'>Request</a>&lt;W&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;S: <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a>&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='hyper/client/response/struct.Response.html' title='hyper::client::response::Response'>Response</a>&lt;S&gt;",];implementors['websocket'] = ["<a class='stability Stable' title='Stable'></a>impl&lt;R, W&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='websocket/client/request/struct.Request.html' title='websocket::client::request::Request'>Request</a>&lt;R, W&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;R, W&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='websocket/client/response/struct.Response.html' title='websocket::client::response::Response'>Response</a>&lt;R, W&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;W&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='hyper/client/request/struct.Request.html' title='hyper::client::request::Request'>Request</a>&lt;W&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;S&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='hyper/client/response/struct.Response.html' title='hyper::client::response::Response'>Response</a>&lt;S&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;R, W&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='websocket/server/request/struct.Request.html' title='websocket::server::request::Request'>Request</a>&lt;R, W&gt;","<a class='stability Stable' title='Stable'></a>impl&lt;R, W&gt; <a class='trait' href='http://doc.rust-lang.org/nightly/core/marker/trait.Send.html' title='core::marker::Send'>Send</a> for <a class='struct' href='websocket/server/response/struct.Response.html' title='websocket::server::response::Response'>Response</a>&lt;R, W&gt;",];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
