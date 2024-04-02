import prisma from "@/lib/prisma";
import { NextResponse } from "next/server"

export async function POST(request){
    const res = await request.json()
    const {title, age, content} = res;
    const parsedAge = Number(age);
     const result = await prisma.post.create({
        data: {
            title,
            age: parsedAge,
            content
        }
     })

    return NextResponse.json({result})
}