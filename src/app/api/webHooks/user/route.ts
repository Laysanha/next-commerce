import prisma from "@/app/lib/prisma";
import { IncomingHttpHeaders } from "http";
import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import { authMiddleware } from "@clerk/nextjs";
import { Webhook, WebhookRequiredHeaders } from "svix";
import { json } from "stream/consumers";
import { NextResponse } from "next/server";

const WebhookSecret = process.env.CLERK_WEBHOOK_SECRET || '';

type EventType = 'user.created' | 'user.updated' | '*';  

type Event = {
    data: EventDataType,
    object: 'event',
    type: EventType;
}

type EventDataType = {
    id: string;
    fisrt_name: string;
    last_name: string;
    email_address: EmailAddressType[];
    primary_email_address_id: string;
    attributes: Record<string, string | number>;
}

type EmailAddressType = {
    id: string;
    email_address_id: string;
}

async function handler(request: Request){
    const payload = await request.json();
    const headersList = headers();
    const heads = {
        'svix-id': headersList.get('vix-id'),
        'svix-timestamp': headersList.get('vix-timestamp'),
        'svix-signature': headersList.get('vix-signature'),
    };
    const wh = new Webhook(WebhookSecret);
    let evt: Event | null = null;

    try {
        evt = wh.verify(
            JSON.stringify(payload),
            heads as IncomingHttpHeaders & WebhookRequiredHeaders
        ) as Event;
    } catch (err){
        console.log((err as Error).message);
        return NextResponse.json({}, {status: 400});
    }

    const EventType: EventType = evt.type;
    if (EventType === 'user.created' || EventType === 'user.updated') {
        const {
            id,
            fisrt_name,
            last_name,
            email_address,
            primary_email_address_id,
            ...attributes
        } = evt.data;
        await prisma.user.upsert({
            where: { externalId:id as string },
            create: {
                externalId:id as string,
                attributes
            },
            update: { attributes }
        })
    }
    return NextResponse.json({}, { status: 200 });
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;