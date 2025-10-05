import { NextRequest, NextResponse } from "next/server";

export const composeMiddlewares = (middlewares: {
  [key: string]: (req: NextRequest) => NextResponse | Promise<NextResponse>;
}) => {
  return (req: NextRequest) => {
    const parsedMiddlewares = Object.entries(middlewares);
    const initialResponse = Promise.resolve(NextResponse.next());

    return parsedMiddlewares.reduce((prevPromise, [_, middleware]) => {
      return prevPromise.then((res) => {
        if (res?.status >= 300 && res?.status < 400) {
          return res;
        } else {
          return middleware(req);
        }
      });
    }, initialResponse);
  };
};
