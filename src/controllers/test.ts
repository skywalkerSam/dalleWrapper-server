import { fisherYatesShuffle } from "./fisherYatesShuffle.js";

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
    const imageStore = fisherYatesShuffle();

    console.log("\n...Incoming Request: ", prompt);

    // mimic API response: add delay ;)
    sleep(1000, function () {
      // console.log("\n", imageStore);
      console.log("\n Image store sent...");
      res.json(imageStore);
    });
  } catch (error) {
    res.status(500).send(error || "Something unexpected happened!");
    console.log(error);
  }
};

/** TODO:
 * Send the whole randomized array once and handle sequences as per the repetition of the request on the frontend.
 */
