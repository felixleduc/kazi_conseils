import { NextResponse } from "next/server";
//import { Resend } from "resend";

//const resend = new Resend({ apiKey: process.env.RESEND_API_KEY! });

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    if (!name || !email || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    // await resend.emails.send({
    //   from: process.env.FROM_EMAIL!,
    //   to: process.env.TO_EMAIL!,
    //   reply_to: email,
    //   subject: `Nouveau message de ${name}`,
    //   html: `
    //     <h2>Nouveau message du site</h2>
    //     <p><b>Nom:</b> ${name}</p>
    //     <p><b>Email:</b> ${email}</p>
    //     <p><b>Message:</b><br/>${message.replace(/\n/g, "<br/>")}</p>
    //   `,
    // });

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { error: "Une erreur est survenue lors de l'envoi du message" },
      { status: 500 }
    );
  }
}
