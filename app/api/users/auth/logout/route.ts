import { connectToDatabase } from "@/config/database-config";
import { NextResponse } from "next/server";

connectToDatabase();

export const GET = async () => {
  try {
    const response = NextResponse.json({
      message: "Logout successful",
      success: true,
    });
    response.cookies.set("token", "", { httpOnly: true, expires: new Date(0) });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
