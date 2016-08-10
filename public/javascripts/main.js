$.ajax({
    url: 'https://api.hypem.com/v2/featured?key=swagger',
    method: 'GET'
}).success(function(dataFromTheServer){
    for (var i = 0; i < dataFromTheServer.length; i++){
        var data = dataFromTheServer[i];
        var type = (data.type);
        if (type == 'premiere' && data.tracks){
            for (var j = 0; j < data.tracks.length; j++){
                var artist = (data.artist);
                var album = (data.album);
                var art = (data.artwork_url_sm);
                var sitename = (data.sitename);
                var soundcloud = (data.soundcloud_set);
                var title = (data.tracks[j].title);
                var audio = (data.tracks[j].stream_url);
                $("#trackData").append(
                    '<tr>' +
                    '<td><div class="col-xs-4 col-md-6"><img class="album-artwork" src="'+ art +'" alt="artwork featured with this album"></div></td>' +
                    '<td><div class="col-xs-4 col-md-6"><a class="siteurl" href="'+ soundcloud +'">SOUNDCLOUD</a></div></td>' +
                    '<td><div class="col-xs-4 col-md-6">' + artist + '</div></td>' +
                    '<td><div class="col-xs-4 col-md-6">' + album + '</div></td>' +
                    '<td><div class="col-xs-4 col-md-6">' + title + '</div></td>' +
                    '<td><div class="col-xs-4 col-md-6">' +
                    '<audio controls="controls">' +
                    '<source src="' + audio + '" type="audio/ogg">' +
                    '<source src="' + audio + '" type="audio/mpeg">' +
                    'Your browser does not support the audio element.' +
                    '</audio></div></td></tr>');
            }
        }
    }
}).error(function(xhr, status, msg){
    alert("something went wrong");
})

