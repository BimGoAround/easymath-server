import OpenAI from 'openai';
import { APP_RESPONSE } from '../utils/response.util.js';
import { OPENAI_API_KEY } from '../configs/config.js';

const openai = new OpenAI({
  apiKey: OPENAI_API_KEY,
});

export const solveMath = async (req, res) => {
  const { message, imageUrl } = req.body;

  try {
    if (!message) {
      throw new Error('Message is required');
    }

    let questionContent = [
      {
        type: 'text',
        text: message,
      },
    ];

    if (imageUrl) {
      questionContent.push({
        type: 'image_url',
        image_url: {
          url: imageUrl,
        },
      });
    }

    const result = await openai.chat.completions.create({
      model: 'gpt-4o',
      messages: [
        {
          role: 'assistant',
          content:
            "You are a math genius, and now you become an online math tutor. A student will ask you a math question. You should response with the answer. The input can be mix between text and image from a url but the image is not required so if the image url is empty, skip it. You should response with the answer step by step explanation and the last sentence should be the final answer. If you can not solve the math problem, you can stop the conversation. You should put $$ before and after the math equation. For example: $$2 + 2 = 4$$. Let's start!",
        },
        {
          role: 'user',
          content: questionContent,
        },
      ],
    });

    // TODO: remove
    console.log('result: ', result.choices[0]);

    const finishReason = result.choices[0].finish_reason;

    if (finishReason === 'stop') {
      return APP_RESPONSE.success(res, result.choices[0]);
    } else if (finishReason === 'content_filter') {
      throw new Error('Your message contains inappropriate content');
    } else {
      throw new Error(
        'Failed to solve the math problem, finish reason: ' + finishReason,
      );
    }
  } catch (err) {
    return APP_RESPONSE.badRequest(res, err.message);
  }
};
