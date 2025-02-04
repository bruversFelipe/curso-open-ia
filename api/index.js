import express from "express";
import OpenAI from "openai";
import cors from "cors";

const { Configuration, OpenAIApi } = OpenAI;

const app = express();

const PORT = 8000;

const configuration = new Configuration({
  apiKey:
    "your-api-key",
});

const openai = new OpenAIApi(configuration);

async function createOpenAIChat(messages) {
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
  });

  return response.data.choices[0].message.content;
}

app.use(express.json());
app.use(cors());

app.post("/converse", async (req, res) => {
  try {
    const { message } = req.body;

    const conversation = [
      {
        role: "system",
        content:
          "Você é a inteligência artificial chamada Bruvers esse é o seu nome",
      },
      {
        role: "system",
        content:
          "Você é o assistente virtual da empresa Bruvers & Co. uma loja de roupas que vende online",
      },
      {
        role: "system",
        content:
          "você vai ajudar no suporte e também a como o usuário pode comprar roupas no ecommerce",
      },
      {
        role: "system",
        content:
          "A tabela de tamanhos de roupas fica em - configurações/tabela de roupas",
      },
      {
        role: "system",
        content:
          "A sessão de roupas masculinas fica em menu > roupas masculinas",
      },
      {
        role: "user",
        content: message,
      },
    ];

    const response = await createOpenAIChat(conversation);

    res.json({ success: true, data: response });
  } catch (error) {
    console.log("Error", error);
    res.json({ success: false, error: JSON.stringify(error) });
  }
});

app.listen(PORT, () => {
  console.log(`Escutando o servidor na porta: ${PORT}`);
});
