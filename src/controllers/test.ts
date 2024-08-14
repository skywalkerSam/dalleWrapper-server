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
    const imageUrl =
      "https://cdna.artstation.com/p/assets/images/images/076/708/342/4k/luis-omar-jinxrender-0010.jpg?1717601087";

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
