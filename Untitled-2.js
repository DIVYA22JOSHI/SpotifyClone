// The console.log() method outputs a message to the web console
console.log("Welcome to Spotify");


// initialise the variables
let songIndex=0;
let audioElement = new Audio('C:/Users/ACER/Desktop/spotify me/songs/1.mp3');





// let audioElement =new Audio('1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');


// songs list =array of objects
let songs=[
    { songname: "Let me love you-Justin Beiber", filepath: "C:/Users/ACER/Desktop/spotify me/songs/1.mp3", coverpath: "C:/Users/ACER/Desktop/spotify me/cover1.jpg" },
    { songname:"Junoon -Mitraz", filepath:"songs/1.mp3",coverpath:"cover2.jpg"},
    { songname:"Closer-The Chainsmoker", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    { songname:"Girls Like You-Maroon 5", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    { songname:"Treat You Better- Shawn Mendes", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    { songname:"Let me love you-Justin Beiber", filepath:"songs/1.mp3",coverpath:"cover1.jpg"},
    
]

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


