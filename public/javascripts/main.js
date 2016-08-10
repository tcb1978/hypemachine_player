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
            $("#trackData").append(
                '<tr>' +
                '<td><div class="col-xs-4 col-md-6"><img class="album-artwork" src="" alt="artwork featured with this album"></div></td>' +
                '<td><div class="col-xs-4 col-md-6"><a class="siteurl" href="">SOUNDCLOUD</a></div></td>' +
                '<td><div class="col-xs-4 col-md-6">' + artist + '</div></td>' +
                '<td><div class="col-xs-4 col-md-6">' + album + '</div></td>' +
                '</tr>');
            $('.siteurl').attr({href: soundcloud});
            $('img.album-artwork').attr({src: art});
            for (var j = 0; j < dataFromTheServer.length; j++){
                track = (dataFromTheServer[j].stream_url);
                title = (dataFromTheServer[j].title);
                if (type == 'premiere') {
                    $("#trackData tr").append(
                    '<td><div class="col-xs-4 col-md-6"><audio src="">' + title + '</audio></div></td>');
                    $('.track').append(title);
                }
            }
        }
    }
}).error(function(xhr, status, msg){
    alert("something went wrong");
});

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
            $("#trackData").append(
                '<tr>' +
                '<td><div class="head artwork"><img class="album-artwork" src="" alt="artwork featured with this album"></div></td>' +
                '<td><div class="head soundcloudlink"><a class="siteurl" href="">SOUNDCLOUD</a></div></td>' +
                '<td><div class="head artist-album">' + artist + '</div></td>' +
                '<td><div class="head artist-album">' + album + '</div></td>' +
                '</tr>');
            $('.siteurl').attr({href: soundcloud});
            $('img.album-artwork').attr({src: art});
            $('.head.artwork, .head.soundcloudlink').addClass('col-xs-8');
            $('.head.artist-album').addClass('col-xs-4');
        }
    }
}).error(function(xhr, status, msg){
    alert("something went wrong");
});

