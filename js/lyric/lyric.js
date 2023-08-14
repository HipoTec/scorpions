const songList = document.getElementById("songList");
const lyricTitleElement = document.querySelector(".lyric h2");
const lyricTextElement = document.querySelector(".lyric p");

const songs = [
  {
    title: "Rock Believer",
    lyric: `I'm a rock believer
You start to crawl until you walk
You make a scream and learn to talk
You discover life on every day
From the first day you were born
You walked a lifeline of your own
And if you always keep the faith

No one can take your dreams away
In the ruins of their souls
You saw the beauty of it all
Simply a generation change

How our fathers came to steal
But we came back to make you feel
Our love in every song we play

Scream for me, screamer
I'm a rock believer like you
Just like you
Come on, scream for me, screamer
I'm a rock believer like you
Just like you

We go from here to everywhere
So many moments that we share
All boarded up, we give and take
Love came to me so many ways
No matter what some haters say
No one can take our dreams away

Scream for me, screamer
I'm a rock believer like you
Just like you
Come on, scream for me, screamer
I'm a rock believer like you
Just like you

Scream, scream, scream (I'm a rock believer)
Scream, scream, scream (I'm a rock believer)

No one can take our dreams away
No one can take our dreams away

Scream for me, screamer
I'm a rock believer like you
Just like you
Come on, scream for me, screamer
I'm a rock believer like you
Just like you

Scream, scream, scream (I'm a rock believer)
Scream, scream, scream (I'm a rock believer)
Scream, scream, scream (I'm a rock believer)
Scream, scream, scream`,
  },
  {
    title: "Still Loving You",
    lyric: `Time, it needs time
      To win back your love again
      I will be there, I will be there
      Love, only love
      Can bring back your love someday
      I will be there, I will be there
      
      I'll fight, babe, I'll fight
      To win back your love again
      I will be there, I will be there
      Love, only love
      Can break down the wall someday
      I will be there, I will be there
    
      If we'd go again
      All the way from the start
      I would try to change
      The things that killed our love
      Your pride has built a wall, so strong
      That I can't get through
      Is there really no chance
      To start once again
      I'm loving you
    
      Try, baby try
      To trust in my love again
      I will be there, I will be there
      Love, our love
      Just shouldn't be thrown away
      I will be there, I will be there

      If we'd go again
      All the way from the start
      I would try to change
      The things that killed our love
      Your pride has built a wall, so strong
      That I can't get through
      Is there really no chance
      To start once again
      
      If we'd go again
      All the way from the start
      I would try to change
      The things that killed our love
      Yes, I've hurt your pride, and I know
      What you've been through
      You should give me a chance
      This can't be the end
      I'm still loving you
      I'm still loving you, I need your love
      I'm still loving you`,
  },
  {
    title: "Black Out",
    lyric: `I realize I missed a day
But I'm too wrecked to care anyway
I look around and see this face
What the hell have I lost my taste
Don't want to find out
Just want to cut out

My head explodes, my ears ring
I can't remember just where I've been
The last thing that I recall
I got lost in a deep black hole
Don't want to find out
Just want to cut out

Blackout
I really had a blackout

Blackout
I really had a blackout

Blackout
I really had a blackout

Blackout
I really had a blackout

I grab my things and make my run
On the way out, another one
Would like to know before I stop
Did I make it or did I flop
Don't want to find out
Just want to get out

Blackout
I really had a blackout

Blackout
I really had a blackout

Blackout
I really had a blackout

Blackout
I really had a blackout

Don't want to find out
Just want to get out

Blackout
I really had a blackout!`,
  },
  {
    title: "Comeblack",
    lyric: `Baby come back to me
Give me one more chance
One more chance to be, to be a better man
This don't have to be goodbye
Don't do this to me tonight
Just come back to me
Yeah, baby come back to me
Don't make this bed get colder
Don't make me sleep alone
Don't make me burn our picture
Don't make me hate our song
Don't keep me goin' crazy
Climbin' up these walls
Don't you keep me up all night
Waitin' for your call
Baby come back to me
Give me one more chance
One more chance to be, to be a better man
This don't have to be goodbye
Don't do this to me tonight
Just come back to me
Baby come back to me
Don't you go get lonely
Don't put on that dress
Don't go goin' downtown
Don't go turnin' heads
Just think about the good times
And everything we had
Don't go throwin' that away
I need you so damn bad
Baby come back to me
Give me one more chance
One more chance to be, to be a better man
This don't have to be goodbye
Don't do this to me tonight
Just come back to me
Yeah, baby come back to me
Woo!
Don't make this bed get colder
Don't make me sleep alone
Baby come back to me
Give me one more chance
One more chance to be, to be a better man
This don't have to be goodbye
Don't do this to me tonight
Just come back to me
Yeah, baby come back to me
Just come back to me
Yeah, come back to me
Come back to me
Come back to me`,
  },
  {
    title: "Believe in Love",
    lyric: `How does it feel babe
To taste sweet revenge?
Do you want me on my knees?
How does it feel babe
To let me feel your strength?
Don't be cruel, can't you see?
If you don't catch me now
I can't stop falling down
Just one more night and the devil got my soul
I need your love babe, don't tell me "No way"
Babe, I miss you so much more than words can say
How does it feel babe
To kill our destiny?
I swear I'm not gonna crawl, oh no
How does it feel babe
To make a fool out of me?
How can you be so cold?
Be so cold
If you don't catch me now
I can't stop falling down
Just one more night and the devil got my soul
I need your love babe, don't treat me this way
Ooh I miss you, I miss you
Baby our love's got what it takes
To give us one more chance to start
Once again
Baby our love will find a way
As long as we believe in love
If you don't catch me now
I can't stop falling down
Just one more night and the devil got my soul
I need your love babe, don't leave me this way
Ooh I miss you, I miss you
Baby our love's got what it takes
To give us one more chance to start
Once again
Baby our love will find a way
As long as we believe in love
As long as we believe (we believe)
Baby our love's got what it takes
To give us one more chance to start
Once again
Baby our love will find a way
As long as we believe in love
Baby our love's got what it takes
To give us one more chance to start
Once again
Baby our love will find a way
As long as we believe in love
Baby our love's got what it takes
To give us one more chance to start`,
  },
  {
    title: "Born To Touch Your Feelings",
    lyric: `I was born from the sound of the strings
For someone to give everything
To be a song just for your feeling
Close your eyes and I'll try to get in
Touch in your heart like the spring
'Cause I was born to touch your feelings
You've got your songs
They are everywhere for awhile
It's the only way to feel alright
You've got your songs
They are everywhere for awhile
Just the only way to feel alright
You were born just to lose or to win
To be someone's chime in the wind
To live between your mind and feelings
Find your way, check it out, learn each day
Follow the light, it's not in vain
And you will see I touch your feelings
You've got your songs
They are everywhere for awhile
It's the only way to feel alright
You've got your songs
They are everywhere for awhile
Just the only way to feel alright`,
  },
  {
    title: "Eye || Eye",
    lyric: `A live begins another's over
As another day begins
Life runs full circle getting older
It happens to me
It happens to you
I do believe you're still around me
You're still around me all the time
I have no doubt one day in heaven
I will see you again
I'll see you again, see you again
Break the bread drink the wine
In my heart you'll live forever
The time to go is never right
When we say goodbye
While we're here we shouldn't waste
A day in life to say I love you
It's now that I'd just wish so much, to see you
Eye to eye
When you came home the war was over
So many years before my time
I was so proud the day you told me
You haven't hurt anyone
No one
Break the bread drink the wine
In my heart you'll live forever
The time to go is never right
When we say goodbye
While we're here we shouldn't waste
A day in life to say I love you
It's now that I'd just wish so much to see you
Eye to eye`,
  },
  {
    title: "Crazy World",
    lyric: `I get up in the morning
For my dose of the news
Crawl right back in the sack girl
Had enough of the truth
Spend your dollars and rubels
Buy a piece of the wall
Build it up in your backyard
I'm so sick of it all
Ooh, it's a crazy world
Ooh, it's a crazy world
Drivin' down to the city
Doin' 155
Better late than never
I'm more dead than alive
We can find the Titanic
Put a man on the moon
But we can't fix our backyard
Man we better start soon
Ooh, it's a crazy world
Ooh, it's a crazy world
Ooh, it's a crazy world
Ooh, it's a crazy world
I don't want to hear about it
I wish it would be worlds away
You know the more I think about it
The more I feel we need to change
I get up (In a crazy, crazy world)
We all live (In a crazy, crazy world)
Ooh yeah (It's a crazy, crazy world)
I gotta get out (Of this crazy, crazy world)
Goin' home to my baby
It's been another hard day
Bust my balls for the tax man
So what else can I say
They spent our money on missiles
For the third world war
Now they're stacked in my backyard
We don't need them no more
Ooh, it's a crazy world
Ooh, it's a crazy world
Ooh, it's a crazy world
Ooh, it's a crazy world`,
  },
  {
    title: "Wind Of Change",
    lyric: `I follow the Moskva down to Gorky Park
Listening to the wind of change
An August summer night, soldiers passing by
Listening to the wind of change
The world is closing in
And did you ever think
That we could be so close like brothers?
The future's in the air, I can feel it everywhere
I'm blowing with the wind of change
Take me to the magic of the moment
On a glory night
Where the children of tomorrow dream away (dream away)
In the wind of change
Mh-mmh
Walking down the street
And distant memories are buried in the past forever
I follow the Moskva and down to Gorky Park
Listening to the wind of change
Take me (take me) to the magic of the moment
On a glory night (a glory night)
Where the children of tomorrow share their dreams (share their dreams)
With you and me (with you and me)
Take me (take me) to the magic of the moment
On a glory night (a glory night)
Where the children of tomorrow dream away (dream away)
In the wind of change (the wind of change)
The wind of change blows straight into the face of time
Like a storm wind that will ring the freedom bell for peace of mind
Let your balalaika sing what my guitar wants to say (say)
Take me (take me) to the magic of the moment
On a glory night (a glory night)
Where the children of tomorrow share their dreams (share their dreams)
With you and me (you and me)
Take me (take me) to the magic of the moment
On a glory night (a glory night)
Where the children of tomorrow dream away (dream away)
In the wind of change (the wind of change)`,
  },

  {
    title: "Send Me Angel",
    lyric: `Wise man said just walk this way
To the dawn of the light
Wind will blow into your face
As the years pass you by
Hear this voice from deep inside
It's the call of your heart
Close your eyes and you will find
Passage out of the dark
Here I am (Here I am)
Will you send me an angel?
Here I am (Here I am)
In the land of the morning star
Wise man said just find your place
In the eye of the storm
Seek the roses along the way
Just beware of the thorns
Here I am (Here I am)
Will you send me an angel?
Here I am (Here I am)
In the land of the morning star
Wise man said just raise your hand
And reach out for the spell
Find the door to the promised land
Just believe in yourself
Hear this voice from deep inside
It's the call of your heart
Close your eyes and you will find
The way out of the dark
Here I am (Here I am)
Will you send me an angel?
Here I am (Here I am)
In the land of the morning star (Here I am)
Will you send me an angel?
Here I am (Here I am)
In the land of the morning star (Here I am)
Will you send me an angel?
Here I am (Here I am)
In the land of the morning star (Here I am)
Will you send me an angel?
Here I am (Here I am)
In the land of the morning star`,
  },
];

let currentSongIndex = 0;

function changeSong(index) {
  currentSongIndex = index;
  const selectedSong = songs[index];
  lyricTitleElement.textContent = selectedSong.title;
  lyricTextElement.innerHTML = selectedSong.lyric;

  const formattedLyrics = selectedSong.lyric.replace(/\n/g, "<br>");
  lyricTextElement.innerHTML = formattedLyrics;
}

function generateSongList() {
  songs.forEach((song, index) => {
    const songItem = document.createElement("p");
    songItem.textContent = `${index + 1}. ${song.title}`;
    songItem.addEventListener("click", () => changeSong(index));
    songList.appendChild(songItem);
  });
}

generateSongList();
