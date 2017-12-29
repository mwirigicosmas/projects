function _(id) {
    return document.getElementById(id);
}
function audioApp() {
    var audio = new Audio();
    var audio_folder = 'audio/';
    var audio_ext = '.mp3';
    var audio_index = 1;
    var is_playing = false;
    var playingtrack;
    var trackbox = _('trackbox');
    var tracks = {
        'track1':['migos','migos'],
        'track2':['timmy','timmy'],
        'track3':['victory','victory']
    };
     for(var track in tracks){
         var tb = document.createElement('div');
         var pb = document.createElement('button');
         var tn = document.createElement('div');
         tb.className = 'trackbar';
         pb.className = 'playbutton';
         tn.className = 'trackname';
         tn.innerHTML = audio_index+". "+tracks[track][0];
         pb.id = tracks[track][1];
         pb.addEventListener('click',switchTrack);
         tb.appendChild(pb);
         tb.appendChild(tn);
         trackbox.appendChild(tb);
         audio_index++;
     }
     audio.addEventListener('ended',function () {
         _(playingtrack).style.background = 'url(images/simba.jpg)';
         playingtrack = '';

     })

     function switchTrack(event) {
         if (is_playing){
             if (playingtrack != event.target.id){
                 is_playing = true;
                 _(playingtrack).style.background = 'url(images/simba.jpg)';
                 event.target.style.background = 'url(images/shoes.jpg)';
                 audio.src = audio_folder+event.target.id+audio_ext;
                 audio.play();
             } else {
                 audio.pause();
                 is_playing = false;
                 event.target.style.background = 'url(images/simba.jpg)';
             }
         }else {
             is_playing = true;
             event.target.style.background = 'url(images/shoes.jpg)';
             if (playingtrack != event.target.id){
                 audio.src = audio_folder+event.target.id+audio_ext;
             }
             audio.play();
         }

         playingtrack = event.target.id;
     }
}
window.addEventListener('load', audioApp);