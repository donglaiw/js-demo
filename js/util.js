var getUrlParam = function(name){
    var rx = new RegExp('[\&|\?]'+name+'=([^\&\#]+)'),
    val = window.location.search.match(rx);
    return !val ? '':val[1];
}
var sortArr = function(test){
    var indices = new Array(test.length);
    for (var i = 0; i < test.length; ++i) indices[i] = i;
    indices.sort(function (a, b) { return test[a] < test[b] ? -1 : test[a] > test[b] ? 1 : 0; });
    return indices;
}
