const API_URL = 'https://localhost:5000/videos';
const videosELement = document.querySelector('#videos');

fetch(API_URL)
  .then(response => response.json())
  .then(videos => {
    console.log(videos);
    videos.forEach((video) => {
      const videoELement = document.createElement('div');
      videoELement.className = 'media';

      const img = document.createElement('img');
      img.src = video.snippet.thumbnails.default.url;
      img.className = 'mr-3';

      videoELement.appendChild(img);

      const mediaBody = document.createElement('div');
      mediaBody.className = 'media-body';

      videoELement.appendChild(mediaBody);

      const h5 = document.createElement('h5');
      h5.className = 'mt-0';
      h5.textContent = video.snippet.title;
      mediaBody.appendChild(h5);

      videosELement.appendChild(videoELement);
    });
  });
