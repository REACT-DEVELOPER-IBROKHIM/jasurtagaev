import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";

const TOKEN_SECRET: string = process.env.TOKEN_SECRET!;

export const getDataFromToken = (request: NextRequest) => {
  try {
    const token = request.cookies.get("token")?.value || "";

    const decodedToken: any = jwt.verify(token, TOKEN_SECRET!);

    return decodedToken.id;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
