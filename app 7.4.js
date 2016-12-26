function outer() {
    var x = "Hello World From Outter function" ;
    // or via namespace
    
    console.log("outer",x); // Outter
    console.log("-----------");
    function inner() {
        inner.x = "Hello World From Inner function" ;
        console.log("inner :",inner.x); // Inner
        console.log("outer :",x); // Outter
        console.log("-----------");
        function _inner() {
            _inner.x = "Hello World From _Inner function" ;
            console.log("_inner :",_inner.x); // _Inner
            console.log("inner :",inner.x); // Inner
            console.log("outer :",x); // Outter
            // namespace 
            // console.log("outer",out.x); // Outter
            console.log("-----------");
        }
        _inner();
    }
    inner();
}
outer();