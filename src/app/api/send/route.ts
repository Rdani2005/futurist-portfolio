import { EmailTemplate } from "@/components";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: "Danny Sequeira  <onboarding@resend.dev>",
      to: ["dricardosc15@hotmail.com"],
      subject: "Hello world",
      react: EmailTemplate({ firstName: "John" }),
      text: "text",
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}
