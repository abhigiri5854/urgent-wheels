import { NextResponse } from "next/server";

type ContactPayload = {
  name: string;
  phone: string;
  location: string;
};

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const name = (body.name ?? "").toString().trim();
    const phone = (body.phone ?? "").toString().trim();
    const location = (body.location ?? "").toString().trim();

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Name is required." },
        { status: 400 }
      );
    }

    if (phone.replace(/\D/g, "").length < 8) {
      return NextResponse.json(
        { ok: false, error: "A valid phone number is required." },
        { status: 400 }
      );
    }

    if (location.length < 2) {
      return NextResponse.json(
        { ok: false, error: "Location is required." },
        { status: 400 }
      );
    }

    // Working endpoint: for now we log the request server-side.
    // Connect this to email/CRM later (e.g. Twilio, SendGrid, or your backend).
    console.log("[Urgent Wheels] contact request:", {
      name,
      phone,
      location,
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request." },
      { status: 400 }
    );
  }
}

