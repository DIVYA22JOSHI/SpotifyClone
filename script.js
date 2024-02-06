// The console.log() method outputs a message to the web console
console.log("Welcome to Spotify");

// initialise the variables
let songIndex=0;
let audioElement = new Audio('C:/Users/ACER/Desktop/spotify me/songs/1.mp3');


// let audioElement =new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');

function authenticate() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic authentication (for educational purposes)
    if (username === 'user' && password === 'password') {
        // Show playlist after successful login
        showPlaylist();
    } else {
        alert('Invalid username or password');
    }
}

function showPlaylist() {
    // Hide login container
    document.getElementById('login-container').style.display = 'none';

    // Show playlist container
    document.getElementById('playlist-container').style.display = 'block';

    // Dummy playlist data
    var playlistData = [
        { songname: "Let me love you-Justin Beiber", filepath: "songs/1.mp3", coverpath: "C:/Users/ACER/Desktop/spotify me/cover1.jpg" },
        { songname:"Junoon -Mitraz", filepath:"songs/1.mp3",coverpath:"cover2.jpg"},
        { songname:"Closer-The Chainsmoker", filepath:"songs/1.mp3",coverpath:"cover3.jpg"},
        { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover4.jpg"},
        { songname:"Girls Like You-Maroon 5", filepath:"songs/1.mp3",coverpath:"cover5.jpg"},
        { songname:"Treat You Better- Shawn Mendes", filepath:"songs/1.mp3",coverpath:"cover6.jpg"},
        { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover7.jpg"},
        { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover8.jpg"},
        { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover9.jpg"},
        { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover10.jpg"},
    
    ];

// audioElement.play();

// Handle PLay/Pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
    }
})

// time changed event
// listen to events
document.addEventListener('timeupdate',()=>{
    console.log('timeupdate');

    // update seekbar
})



    // Display playlist
    var playlistContainer = document.getElementById('playlist');
    playlistData.forEach(function(song) {
        var listItem = document.createElement('list');
        listItem.textContent = song;
        playlistContainer.appendChild(listItem);
    });
}
