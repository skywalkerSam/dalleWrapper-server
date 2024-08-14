const imageStore: string[] = [
  "https://cdnb.artstation.com/p/assets/images/images/068/370/887/4k/ybz-01-2.jpg?1697640756",
  "https://cdna.artstation.com/p/assets/images/images/067/652/716/large/yangzhengnan-cheng-bd3509e51f4a18b138ff0f5c606fce8c.jpg?1695881708",
  "https://cdna.artstation.com/p/assets/images/images/053/402/024/large/nicholas-ragno-spidergirl-2-filtri.jpg?1662115656",
  "https://cdna.artstation.com/p/assets/images/images/046/031/564/large/shuo-shi-7.jpg?1644155600",
  "https://cdna.artstation.com/p/assets/images/images/036/550/268/large/evr-studio-practice-main.jpg?1617959572",
  "https://cdna.artstation.com/p/assets/images/images/076/708/342/4k/luis-omar-jinxrender-0010.jpg?1717601087",
  "https://cdna.artstation.com/p/assets/images/images/040/340/280/4k/han-yang-5.jpg?1628569274",
];

function sleep(time, callback) {
  const stop = new Date().getTime();
  while (new Date().getTime() < stop + time) {
    // console.log("Intentional delay...\n");
  }
  callback();
}

export const getImageUrl = (req, res) => {
  try {
    const prompt = req.body.prompt;
    const imageUrl = imageStore[0];

    console.log("\n...Incoming Request: ", prompt);

    // mimic API response: add delay
    sleep(1000, function () {
      console.log("\n", imageUrl);
      res.send({ imageUrl });
    });
  } catch (error) {
    res.status(500).send(error || "Something unexpected happened!");
    console.log(error);
  }
};
