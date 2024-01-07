import { NextResponse } from "next/server";

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;

const client = require("twilio")(accountSid, authToken);

export async function POST(request) {
  if (request.method !== "POST") {
    return new NextResponse({
      status: 405,
      json: { error: "Method Not Allowed" },
    });
  }

  try {
    let requestBody;

    if (request.headers.get("content-type") === "application/json") {
      requestBody = await request.json();
    }

    const { body, from, to } = requestBody;

    // console.log("Request Body:", requestBody);

    if (!to) {
      throw new Error('Required parameter "to" missing.');
    }

    const message = await client.messages.create({
      from,
      to,
      body,
    });

    console.log("Twilio API Response:", message);

    return new NextResponse({
      status: 200,
      json: { success: true, message: message.sid },
    });
  } catch (error) {
    console.error("Error sending WhatsApp message:", error);

    return new NextResponse({
      status: 500,
      json: { success: false, error: "Internal Server Error" },
    });
  }
}
