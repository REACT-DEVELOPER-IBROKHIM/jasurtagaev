import { connectToDatabase } from "@/config/database-config";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { IUser } from "@/types/common";

connectToDatabase();

const TOKEN_SECRET = process.env.TOKEN_SECRET;

export const POST = async (req: NextRequest, res: NextResponse) => {
  try {
    const body = await req.json();

    const { email, password } = body;

    const user: IUser = (await User.findOne({ email })) as IUser;

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }

    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    const token = await jwt.sign(tokenData, TOKEN_SECRET!, {
      expiresIn: "30d",
    });

    const response = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    response.cookies.set("token", token, {
      httpOnly: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
