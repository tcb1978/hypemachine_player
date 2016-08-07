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
            $("#trackData").append('<table width="400" cellpadding="10" cellspacing="5">' +
                '<thead>' +
                '<tr>' +
                '<th class="head"><img class="album-artwork" src="" alt="artwork featured with this album"></th>' +
                '<th class="head" scope="col">Artist: </th>' +
                '<th class="head" scope="col">Featured Album: </th>' +
                '</tr>' +
                '</thead>' +
                '<tbody>' +
                '<tr>' +
                    '<td class="head"><a class="siteurl" href="">' + 'SOUNDCLOUD' + '</a></div></td>' +
                    '<td class="head">' + artist + '</div></td>' +
                    '<td class="head">' + album + '</div></td>' +
                '</tr>' +
                '</body>' +
            '</table>');
            $('.siteurl').attr({href: soundcloud});
            $('img.album-artwork').attr({src: art});
            $('.head').addClass('col-xs-4 col-md-6');
        }
    }
}).error(function(xhr, status, msg){
    alert("something went wrong");
});

