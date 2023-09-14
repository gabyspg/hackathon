//changes images on the webpage
let funnyPics = [
  'https://s.yimg.com/ny/api/res/1.2/Zh.lxIWzPPuy5kBNNelnBg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTY0MDtoPTQyNw--/https://media.zenfs.com/en/atlanta_black_star_articles_803/b0d17cc6974076bf4327707d613e4465',
  'https://assets-prd.ignimgs.com/2022/07/13/nicolas-cage-in-con-air-1657720981366.jpg',
  'https://cdn.mos.cms.futurecdn.net/grU4VrTscKgjJRMgUU6wiH-1200-80.jpg',
  'https://ih1.redbubble.net/image.2454461427.1523/flat,750x,075,f-pad,750x1000,f8f8f8.jpg',
  'https://uploads.dailydot.com/f05/93/carreymain.jpg?q=65&auto=format&w=800&ar=2:1&fit=crop',
  'https://i.gifer.com/WEiu.gif',
  'https://www.hdnicewallpapers.com/Walls/Big/Will%20Smith/Funny_Will_Smith_in_Men_in_Black_3.jpg',
  'https://scontent-iad3-1.xx.fbcdn.net/v/t1.18169-9/10430496_858559267487419_3217678891968990075_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9267fe&_nc_ohc=KXXOzf-iUw4AX83x5CM&_nc_ht=scontent-iad3-1.xx&oh=00_AfBOePzlpCPvn7d-U09qF4yz5r2PLKFUsT4Q7lCTOrAKng&oe=6529D73E',
  'https://media.tenor.com/XTXVZG6RI4gAAAAC/will-smith-aladdin.gif',
  'https://www.ocregister.com/wp-content/uploads/migration/m0u/m0ug8i-b78922790z.120120313150629000gka166klm.1.jpg?w=620',
  'https://i.pinimg.com/originals/aa/19/4c/aa194ca56eee7fd834bca15ab57a1916.jpg',
  'https://www.al.com/resizer/ihPxf-JTSAo7EXu3jjxwRYHSq_U=/1280x0/smart/advancelocal-adapter-image-uploads.s3.amazonaws.com/image.al.com/home/bama-media/width2048/img/entertainment_impact/photo/elfjpg-eb2a7e26ff03a61a.jpg',
  'https://i.pinimg.com/236x/7a/a0/d2/7aa0d2f1fc374d5e0f5e001aab05ab43--too-funny-funny-shit.jpg',
  'https://i.pinimg.com/originals/2f/c7/59/2fc7596639de34d5a5ba64f4b99510da.jpg',
  'https://data1.ibtimes.co.in/en/full/744583/danny-devito.png?w=595&h=440&l=50&t=40',
  'https://i.imgflip.com/530ab4.jpg',
  'https://media.tenor.com/ppTHan6OL4gAAAAM/movie-funny.gif',
  'https://media0.giphy.com/media/3o7buiQeyYFamzRoR2/200w.gif?cid=6c09b952dn47g6q0xkf6mn75a5da6p3mcyvfz4plsp0jwgag&ep=v1_gifs_search&rid=200w.gif&ct=g',
  'https://ih0.redbubble.net/image.1094571386.7011/raf,360x360,075,t,fafafa:ca443f4786.jpg',
  'https://media.tenor.com/_BiwWBWhYucAAAAC/what-huh.gif',
  'https://i.kym-cdn.com/entries/icons/original/000/044/122/avatarguystaring.jpg',
  'https://th-thumbnailer.cdn-si-edu.com/XGlhnw9GYp4cd95ce5XAII_F5Kw=/1400x1050/filters:focal(850x489:851x490)/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer_public/ac/7f/ac7fc9ab-dd19-4beb-a907-0c87d5e0c3f3/oppenheimer-still1-62df17ed1c2fb-1.jpeg',
  'https://wegotthiscovered.com/wp-content/uploads/2022/09/best-star-wars-meme.jpg?w=1200',
  'https://i.redd.it/r2l9zafu43071.jpg',
  'https://media.wired.com/photos/5f87340d114b38fa1f8339f9/master/w_1600%2Cc_limit/Ideas_Surprised_Pikachu_HD.jpg',
  'https://media0.giphy.com/media/UO5elnTqo4vSg/giphy.gif',
  'https://media.tenor.com/WrT1CQ9Ul4QAAAAC/shaq-hot-wings.gif',
  'https://cdn.vox-cdn.com/thumbor/EaUuzIdnUGXAs_LokdLgtdrJZCY=/0x0:420x314/1400x1050/filters:focal(136x115:202x181):format(gif)/cdn.vox-cdn.com/uploads/chorus_image/image/55279403/tenor.0.gif',
  'https://media0.giphy.com/media/11ISwbgCxEzMyY/giphy.gif?cid=6c09b952tva2re22z0e5bbyj01cqsgoeb68ke7612kjd80t7&ep=v1_gifs_search&rid=giphy.gif&ct=g',
  'https://media.tenor.com/kWejy2kDcTwAAAAC/office.gif',
  'https://media1.giphy.com/media/UAHZijO91QCl2/giphy.gif',
  'https://usagif.com/wp-content/uploads/2022/hqgif/stranger-things-48-hi-from-underworld-acegif.gif',
  'https://i.redd.it/wuz3kpz6nbw61.png',
  'https://media1.giphy.com/media/YQitE4YNQNahy/giphy.gif',
  'https://akns-images.eonline.com/eol_images/Entire_Site/2013310/rs_1024x759-130410132608-1024.WFerrell.ms.041013.jpg?fit=around%7C776:576&output-quality=90&crop=776:576;center,top',
  'https://hips.hearstapps.com/hmg-prod/images/ai-flaw-memes-1677257023.jpg?crop=0.520xw:0.988xh;0.225xw,0&resize=1200:*',
  'https://i.ytimg.com/vi/if-2M3K1tqk/maxresdefault.jpg',
  'https://www.si.com/.image/ar_4:3%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTg0OTA2NjA1MDczMDE1OTI4/aaron-rodgers.jpg',
  'https://media.tenor.com/tTvBVvMFUNEAAAAC/harry-potter-sorcerer-stone.gif',
];

// const cursor = document.getElementById("cursor");

// document.addEventListener("mousemove", (event) => {
//   cursor.style.left = `${event.clientX}px`;
//   cursor.style.top = `${event.clientY}px`;
// });

document.addEventListener('scroll', () => {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    const randomImg = Math.floor(Math.random() * funnyPics.length);
    images[i].src = funnyPics[randomImg];
    images[i].srcset = funnyPics[randomImg];
  }
});

//Effects when hovering over text
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const h1s = document.querySelectorAll('h1');
const h2s = document.querySelectorAll('h2');
const ps = document.querySelectorAll('p');
const lis = document.querySelectorAll('li');

function randomWords(event) {
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split('')
      .map((index) => {
        if (index < iterations) {
          return 'Get Hacked!';
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join('');
    if (iterations >= 15) {
      clearInterval(interval);
    }
    iterations += 1 / 3;
  }, 15);
}

h1s.forEach((h1) => {
  h1.onmouseover = (event) => {
    randomWords(event);
  };
});

h2s.forEach((h2) => {
  h2.onmouseover = (event) => {
    randomWords(event);
  };
});

ps.forEach((p) => {
  p.onmouseover = (event) => {
    randomWords(event);
  };
});

lis.forEach((li) => {
  li.onmouseover = (event) => {
    randomWords(event);
  };
});

//fly on the screen
// class Fly {
//   constructor() {
//     this.node = document.createElement("img");
//     this.node.setAttribute("id", "fly");
//     this.node.setAttribute("src", "flyScreen.png");

//     appendChild(this.node);

//     let leftPosition = 0;
//     let topPosition = 0;
//     // let leftPosition = Math.floor(Math.random() * 20) * 50;
//     // let topPosition = Math.floor(Math.random() * 20) * 50;

//     this.node.style.left = `${leftPosition}px`;
//     this.node.style.top = `${topPosition}px`;
//     this.node.leftPosition = leftPosition;
//     this.node.topPosition = topPosition;
//   }
// }

// new Fly();
