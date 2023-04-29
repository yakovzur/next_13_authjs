import User from "@/DB/models/user";
import dbConnect from "@/DB/db.connect";
import { NextResponse } from "next/server";


export async function POST(request) {
    try {
        dbConnect();
        const { name, email, password } = await request.json();

        const userExists = await User.findOne({email})
        if (userExists) {
            return NextResponse.json( { message: 'User Already Exists' })
        } else {
            const user = await User.create({ name, email, password })
            return NextResponse.json( { user }  , { status: 200 })
        }
    } catch (error) {
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
