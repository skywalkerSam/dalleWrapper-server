import { randomImageUrl } from "./fisherYatesShuffle.js";

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
    const imageUrl = randomImageUrl();

    console.log("\n...Incoming Request: ", prompt);

    // mimic API response: add delay ;)
    sleep(1000, function () {
      console.log("\n", imageUrl);
      res.send({ imageUrl });
    });
  } catch (error) {
    res.status(500).send(error || "Something unexpected happened!");
    console.log(error);
  }
};
