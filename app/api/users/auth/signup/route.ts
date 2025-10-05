import { connectToDatabase } from "@/config/database-config";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

connectToDatabase();

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { email, password } = body;

    const user = await User.findOne({ email });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const createUser = await newUser.save();

    return NextResponse.json({
      message: "User created successfully",
      success: true,
      createUser,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
