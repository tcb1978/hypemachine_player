$.ajax({
    url: 'https://api.hypem.com/v2/featured?key=swagger',
    method: 'GET'
}).success(function(dataFromTheServer){
    for (var i = 0; i < dataFromTheServer.length; i++){
        var data = dataFromTheServer[i];
        var type = (data.type);
        if (type == 'premiere' && data.tracks){
            var artist, album, art, sitename = null;
            for (var j = 0; j < data.tracks.length; j++){
                var artist = (data.artist);
                var album = (data.album);
                var art = (data.artwork_url_sm);
                var sitename = data.sitename;
                var soundcloud = data.soundcloud_set;
                var artistUrl = data.premiere_url;
                var label = (data.us_link);
                var title = (data.tracks[j].title);
                var audio = (data.tracks[j].stream_url);
                var track_id = "track_row_" + data.tracks[j].sc_id;
                var tr = $("#trackData").append(
                    '<tr id="'+track_id+'">' +
                        '<td><div class="col-xs-4 col-md-6"><a href="' + artistUrl + '">' +
                        '<img class="album-artwork tdArt" src="'+ art +'" alt="artwork featured with this album"></a></div></td>' +
                        '<td><div class="col-xs-4 col-md-6"><a class="tdArtistUrlName" href="' + artistUrl + '">' + artist + '</a></div></td>' +
                        '<td><div class="col-xs-4 col-md-6"><span  class="tdArtistAlbum">' + album + '</span></div></td>' +
                        '<td><div class="col-xs-4 col-md-6"><span  class="tdArtistTitle">' + title + '</span></div></td>' +
                        '<td><div class="col-xs-4 col-md-6"><a  class="tdArtistLabel" href="' + label + '">' + label + '</a></div></td>' +
                        '<td><div class="col-xs-4 col-md-6"><a class="tdArtistSoundCloud siteurl" href="'+ soundcloud +'">SOUNDCLOUD</a></div></td>' +
                    '</tr>');
            }
        }
    }$('tr').on('click', function(e){
        e.preventDefault();
        var $this = $(this);
        var link_url = $this.find('a:first' ).attr('href')
        var link_art = $this.find('img:first' ).attr('src')
        var artistName = $this.find('.tdArtistUrlName').text()
        $('#playerElements' ).append(
            '<tr id="'+track_id+'">' +
            '<td><div class="col-xs-4 col-md-6"><a href="' + artistUrl + '">' +
            '<img class="album-artwork tdArt" src="'+ art +'" alt="artwork featured with this album"></a></div></td>' +
            '<td><div class="col-xs-4 col-md-6"><a class="tdArtistUrlName" href="' + artistUrl + '">' + artist + '</a></div></td>' +
                '<td>' +
                    '<div class="col-xs-4 col-md-6">' +
                        '<audio controls>' +
                            '<source src="" type="audio/ogg">' +
                            '<source src="" type="audio/mpeg">' +
                        '</audio>' +
            '       </div>>' +
                '</td>>' +
                '<td><div class="col-xs-4 col-md-6"><span  class="tdArtistAlbum">Album: ' + album + '</span></div></td>' +
                '<td><div class="col-xs-4 col-md-6"><span  class="tdArtistTitle">Song: ' + title + '</span></div></td>' +
            '</tr>'
        );
        console.log('HERE HERE HERE HERE')
    });
}).error(function(xhr, status, msg){
    alert("something went wrong");
})



