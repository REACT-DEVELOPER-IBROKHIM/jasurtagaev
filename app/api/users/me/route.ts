import { connectToDatabase } from "@/config/database-config";
import { getDataFromToken } from "@/helpers/auth/get-data-from-cookie";
import User from "@/models/user.model";
import { NextRequest, NextResponse } from "next/server";

connectToDatabase();

export async function GET(request: NextRequest) {
  try {
    const userId = await getDataFromToken(request);

    const user = await User.findOne({ _id: userId }).select("-password");
    return NextResponse.json({
      message: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
}
