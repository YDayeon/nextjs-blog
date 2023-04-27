import { sendMail } from "@/app/service/contact";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = await sendMail(body);
    console.log("result", result);
    return new Response("✅Message delivered.", {
      status: 200,
    });
  } catch (error) {
    return new Response("Message sending failed. Please try again.", {
      status: 500,
    });
  }
}
