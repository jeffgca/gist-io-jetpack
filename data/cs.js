$(function() { 
    var gist_id = /.+\/([\d]+)$/.exec(document.URL).pop();
    var gist_io_url = 'http://gist.io/'+ gist_id;

    var link = '<div id="gist-io-link" style="display:inline;">'+
        '<a href="'+gist_io_url+'" class="gist-embed-link">Gist.IO</a></div>';
    
    $('.actions').append(link);
});
