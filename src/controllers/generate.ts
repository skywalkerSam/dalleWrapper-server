import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();
const openai = new OpenAI({
  apiKey: process.env.OPENAI || "Not Found!",
});

export async function generateImage(req, res) {
  try {
    const prompt = req.body.prompt;

    const response = await openai.images.generate({
      model: "dall-e-3",
      prompt: prompt ?? "a starboy",
      n: 1,
      size: "1024x1024",
    });
    const imageUrl = response.data[0].url;
    console.log("\n", imageUrl);
    res.send({ imageUrl });
  } catch (error) {
    const errorInfo = {
      statusCode: 400,
      message: error.message,
      details: {
        param: "paramName",
        value: "invalidValue",
      },
    };
    console.log(errorInfo.message);
    res.status(errorInfo.statusCode).json(errorInfo);

    // if (error.response) {
    //   // console.log(error.response.status);
    //   console.log(error.response.data);
    //   // res.send(error.response.data);
    //   res.status(errorInfo.statusCode).json(errorInfo);

    // } else {
    //   // console.log(error)
    //   console.log(errorInfo.message);
    //   // res.send(error.message);
    //   res.status(errorInfo.statusCode).json(errorInfo);
    // }

    // console.error(error);
    // res
    //   .status(500)
    //   .send(error?.response.data.error.message || "Something went wrong");
  }
}
