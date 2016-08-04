$.ajax({
    url: 'https://api.hypem.com/v2/featured?key=swagger',
    method: 'GET'
}).success(function(dataFromTheServer){
    for (var i = 0; i < dataFromTheServer.length; i++){
        artist = (dataFromTheServer[i].artist);
        album = (dataFromTheServer[i].album);
        art = (dataFromTheServer[i].artwork_url);
        sitename = (dataFromTheServer[i].sitename);
        siteurl = (dataFromTheServer[i].siteurl);
        $("#trackData").append('<tbody><tr><td class="tdata">' +
            '<img class="album-artwork" src="" alt="artwork featured with this album"></td>' +
            '<th class="head">Artist: ' + '<em>' + artist + ',' + '</em>' + '</th>' +
            '<th class="head">Featured Album: ' + '<em>' + album + '</em>' + '</th>' +
            //'<th class="head"><em>' + sitename + ': ' + '</em>' + siteurl '</th>' +
            '</tr></tbody>');
        $('img.album-artwork').attr({src: art});
        $('#trackData, .head').addClass('col-xs-4 col-md-6');
    }
}).error(function(xhr, status, msg){
    alert("something went wrong");
});

