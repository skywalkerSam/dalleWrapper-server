// The Fisher Yates Shuffle Algorithm with TypeScript

const imageStore: string[] = [
  "https://cdnb.artstation.com/p/assets/images/images/068/370/887/4k/ybz-01-2.jpg?1697640756",
  "https://cdna.artstation.com/p/assets/images/images/067/652/716/large/yangzhengnan-cheng-bd3509e51f4a18b138ff0f5c606fce8c.jpg?1695881708",
  "https://cdna.artstation.com/p/assets/images/images/053/402/024/large/nicholas-ragno-spidergirl-2-filtri.jpg?1662115656",
  "https://cdna.artstation.com/p/assets/images/images/046/031/564/large/shuo-shi-7.jpg?1644155600",
  "https://cdna.artstation.com/p/assets/images/images/036/550/268/large/evr-studio-practice-main.jpg?1617959572",
  "https://cdna.artstation.com/p/assets/images/images/076/708/342/4k/luis-omar-jinxrender-0010.jpg?1717601087",
  "https://cdna.artstation.com/p/assets/images/images/040/340/280/4k/han-yang-5.jpg?1628569274",
  "https://cdna.artstation.com/p/assets/images/images/040/340/372/4k/han-yang-6.jpg?1628569511",
  "https://cdnb.artstation.com/p/assets/images/images/075/933/285/large/ryouta-otsuka-adidas-sinnka.jpg?1715775716",
  "https://cdna.artstation.com/p/assets/images/images/078/996/142/large/bryan-soegondo-monroe-main-zoom.jpg?1723659263",
  "https://cdna.artstation.com/p/assets/images/images/078/734/018/large/anato-finnstark-44.jpg?1722944770",
  "https://cdnb.artstation.com/p/assets/images/images/078/899/127/large/demiurge-ash-the-last.jpg?1723400991",
  "https://samples.clarifai.com/metro-north.jpg",
  "https://cdnb.artstation.com/p/assets/images/images/072/485/995/4k/chengwei-pan-1.jpg?1707463211",
  "https://cdna.artstation.com/p/assets/images/images/072/178/120/large/alex-gray-tbrender-camera-38.jpg?1706781629",
  "https://cdnb.artstation.com/p/assets/images/images/072/184/959/4k/hwng-edric-nguyen-tbrender-viewport-009.jpg?1706793715",
  "https://cdnb.artstation.com/p/assets/images/images/054/466/379/large/srinjoy-ganguly-psx-20221001-092004.jpg?1664612784",
  "https://cdnb.artstation.com/p/assets/images/images/064/512/211/large/shadowdopp-4560aa82845549e7acd25ac70937b3c4.jpg?1688083395",
  "https://cdnb.artstation.com/p/assets/images/images/078/767/813/large/yizheng-ke-2024-5-8.jpg?1723029811",
  "https://cdnb.artstation.com/p/assets/images/images/078/766/483/large/yizheng-ke-2023-1-6.jpg?1723026242",
  "https://cdna.artstation.com/p/assets/images/images/074/477/558/4k/ivailo-ivanov-distance.jpg?1712162321",
  "https://cdnb.artstation.com/p/assets/images/images/074/631/781/large/ming-untitled-viewport-003.jpg?1712574759",
  "https://cdna.artstation.com/p/assets/images/images/037/147/050/large/jay-howse-wip-33.jpg?1619617745",
  "https://cdnb.artstation.com/p/assets/images/images/045/358/179/large/brx-shortt-h5-cortana.jpg?1642532198",
  "https://cdnb.artstation.com/p/assets/images/images/045/358/153/large/brx-shortt-weapon-02.jpg?1642532122",
  "https://cdna.artstation.com/p/assets/images/images/067/669/602/large/blu1304-rey-046.jpg?1695918421",
  "https://cdnb.artstation.com/p/assets/images/images/070/905/135/large/arya-k-modern-day-rey.jpg?1703889004",
  "https://cdnb.artstation.com/p/assets/images/images/066/364/755/large/dualk-k-highresscreenshot00002.jpg?1692724927",
  "https://cdnb.artstation.com/p/assets/images/images/079/008/883/large/yelli-red.jpg?1723703679",
  "https://cdna.artstation.com/p/assets/images/images/012/923/296/4k/artur-tarnowski-girl-prev-131-post-jpg.jpg?1537208348",
  "https://cdnb.artstation.com/p/assets/images/images/000/053/287/large/sizematters.jpg?1399128018",
  "https://cdnb.artstation.com/p/assets/images/images/042/798/169/4k/asher-israel-emily3-0.jpg?1635452739",
  "https://cdnb.artstation.com/p/assets/images/images/075/821/437/large/lei-yan-pff.jpg?1715534090",
  "https://cdna.artstation.com/p/assets/images/images/078/283/512/4k/popularity_choi-4.jpg?1721698358",
  "https://cdnb.artstation.com/p/assets/images/images/078/283/565/4k/popularity_choi-18.jpg?1721698494",
  "https://cdnb.artstation.com/p/assets/images/images/078/283/629/4k/popularity_choi-28.jpg?1721698603",
  "https://cdna.artstation.com/p/assets/images/images/078/283/638/4k/popularity_choi-29.jpg?1721698614",
  "https://cdna.artstation.com/p/assets/images/images/078/283/576/4k/popularity_choi-21.jpg?1721698523",
  "https://cdna.artstation.com/p/assets/images/images/078/283/522/4k/popularity_choi-8.jpg?1721698397",
  "https://cdna.artstation.com/p/assets/images/images/078/283/502/4k/popularity_choi-1.jpg?1721698322",
  "https://cdna.artstation.com/p/assets/images/images/078/283/508/4k/popularity_choi-3.jpg?1721698348",
  "https://cdnb.artstation.com/p/assets/images/images/078/283/587/4k/popularity_choi-23.jpg?1721698543",
  "https://cdnb.artstation.com/p/assets/images/images/078/283/651/4k/popularity_choi-33.jpg?1721698667",
  "https://cdnb.artstation.com/p/assets/images/images/072/452/059/large/shuo-shi-1.jpg?1707392570",
  "https://cdnb.artstation.com/p/assets/images/images/078/642/409/4k/-e-v3.jpg?1722671566",
  "https://cdna.artstation.com/p/assets/images/images/078/752/812/large/gleb-semin-color4.jpg?1722980547",
  "https://cdna.artstation.com/p/assets/images/images/053/028/768/4k/sumit-malhotra-14.jpg?1661257636",
  "https://cdnb.artstation.com/p/assets/images/images/022/592/611/large/michael-uwandi-sg-7102019-mike-victoria-finaldraftsmall.jpg?1576004087",
  "https://cdna.artstation.com/p/assets/images/images/079/004/502/large/jeffrey-mc-girl01.jpg?1723683443",
  "https://cdna.artstation.com/p/assets/images/images/025/572/148/large/denver-balbaboco-04-03-2020-taylor-swift.jpg?1586226421",
  "https://cdna.artstation.com/p/assets/images/images/059/462/442/large/jinsung-lim-7cfe204e-b9fc-4abf-a3ba-85f0aedb2b1e.jpg?1676445288",
  "https://cdnb.artstation.com/p/assets/images/images/045/967/621/large/md-utsho-1.jpg?1643972228",
  "https://cdna.artstation.com/p/assets/images/images/065/969/196/large/siraj-asset.jpg?1691684392",
  "https://cdnb.artstation.com/p/assets/images/images/034/684/447/large/shi-an-matthew-king-taylor-swift.jpg?1612941177",
  "https://cdnb.artstation.com/p/assets/images/images/033/947/975/large/holly-comission45v2.jpg?1610996589",
  "https://cdna.artstation.com/p/assets/images/images/006/399/428/4k/wim-coene-final-close-0002.jpg?1498296193",
  "https://cdnb.artstation.com/p/assets/images/images/077/033/245/large/hafez-yadollahi-hafez-yadollahi-fantasy-girl-1009.jpg?1718385922",
  "https://cdnb.artstation.com/p/assets/images/images/078/380/933/large/zdenek-sladky-nataliefrontbeutyfull3.jpg?1721929571",
].sort();

let randomImageStore: string[] = [];

// let fisherCalled: boolean = true;
export function fisherYatesShuffle() {
  const min: number = 0;
  let max: number = imageStore.length;
  let randomIndex: number = 0;
  for (max >= min; max--; ) {
    randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    randomImageStore.push(imageStore[randomIndex]);
    imageStore.splice(randomIndex, 1);
    // console.log(min, max, randomIndex);
    // console.log(imageStore, randomImageStore);
  }

  return randomImageStore;
}

// let i: number = randomImageStore.length - 1;
// export function randomImageUrl() {
//   fisherYatesShuffle();
//   i--;
//   console.log(i, randomImageStore.length, imageStore.length);
//   console.log("\n", randomImageStore[i], "\n");
//   return randomImageStore[i];
// }

// console.log(imageStore)
// console.log(randomImageStore);
// randomImageUrl();
// console.log(randomImageStore)
// console.log(imageStore);

// console.log(fisherYatesShuffle());

/** Bugs:
 * Not sending randomize array on each request!
 */