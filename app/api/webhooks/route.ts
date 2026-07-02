import { NextRequest, NextResponse } from "next/server";

// ─── Webhook receiver ───────────────────────────────────────────────
// Receives events from your external backend providers.
// Add signature verification for your specific provider (Stripe, Clerk, etc.)

export async function POST(request: NextRequest) {
  try {
    // TODO: Verify webhook signature from your provider
    // Example (Stripe):  stripe.webhooks.constructEvent(body, sig, secret)
    // Example (Svix):    new Webhook(secret).verify(body, headers)

    const body = await request.json();
    const eventType = body.type as string | undefined;

    switch (eventType) {
      // Add your event handlers here:
      // case "user.created":
      //   break;
      // case "payment.completed":
      //   break;
      default:
        console.log(`Received webhook: ${eventType ?? "unknown"}`);
    }

    return NextResponse.json({ received: true });
  } catch (error) {
    console.error("Webhook error:", error);
    return NextResponse.json({ error: "Webhook failed" }, { status: 400 });
  }
}
