import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function DELETE(request, {params}){
    const id = params.id;
    const parsedid = Number(id);
    try {
        const post = await prisma.post.delete({
          where: { id: parsedid },
        });
        return NextResponse.json({ success: true, message: 'Post deleted successfully' });
      } catch (error) {
        console.error(error); 
        return NextResponse.json({ success: false, error: error.message });
      }
}