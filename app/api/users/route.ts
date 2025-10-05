import { connectToDatabase } from "@/config/database-config";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";
import { IUser } from "@/types/common";

connectToDatabase();

export const GET = async (_: NextRequest) => {
  try {
    const users: IUser[] = await User.find().select("-password");
    return NextResponse.json({
      message: "Users fetched successfully",
      data: users,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const { userId } = body;
    if (!userId) {
      return NextResponse.json(
        { error: "User ID is required" },
        { status: 400 },
      );
    }
    const deletedUser = await User.findByIdAndDelete(userId);
    if (!deletedUser) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }
    return NextResponse.json({
      message: "User deleted successfully",
      data: deletedUser,
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
