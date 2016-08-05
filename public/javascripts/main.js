$.ajax({
    url: 'https://api.hypem.com/v2/featured?key=swagger',
    method: 'GET'
}).success(function(dataFromTheServer){
    for (var i = 0; i < dataFromTheServer.length; i++){
        artist = (dataFromTheServer[i].artist);
        album = (dataFromTheServer[i].album);
        art = (dataFromTheServer[i].artwork_url_sm);
        sitename = (dataFromTheServer[i].sitename);
        soundcloud = (dataFromTheServer[i].soundcloud_set);
        type = (dataFromTheServer[i].type);
        if (type == 'premiere'){
            $("#trackData").append('<tbody><tr>' +
                '<th class="head"><img class="album-artwork" src="" alt="artwork featured with this album"></th>' +
                '<th class="head">Artist: </th>' +
                '<th class="head">Featured Album: ' + '<em>' + album + '</em>' + '</th>' +
                    //'<th class="head"><em>' + sitename + ': ' + '</em>' + siteurl '</th>' +
                '</tr></tbody>' +
                '<tbody><tr>' +
                '<th><div class="head"><a class="siteurl" href="">' + 'SOUNDCLOUD' + '</a></div></th>' +
                '<th><div class="head">' + artist + '</div></th>' +
                '<th><div class="head">' + album + '</div></th>' +
                '</tr></tbody>');
            $('.siteurl').attr({href: soundcloud});
            $('img.album-artwork').attr({src: art});
            $('.head').addClass('col-xs-4 col-md-6');
        }
    }
}).error(function(xhr, status, msg){
    alert("something went wrong");
});

