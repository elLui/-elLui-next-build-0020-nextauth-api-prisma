import prisma from "@/lib/prisma";
import * as bcrpyt from "bcrypt";

interface RequestBody {
    name: string;
    email: string;
    password: string;
}

export async function POST(request: Request) {

    const body:RequestBody = await request.json();

    const user = await prisma.user.create({
        data: {
            name: body.name,
            email: body.email,
            password: await bcrpyt.hash(body.password, 10),
        },
    });

    const { password, ...result } = user;

    return new Response(JSON.stringify(result));


}