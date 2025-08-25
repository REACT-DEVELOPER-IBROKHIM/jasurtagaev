import { validationMiddleware } from "@/middlewares/validation-middleware";
import { intlMiddleware } from "./middlewares/intl-middleware";
import { composeMiddlewares } from "./middlewares/compose-middlewares";

export default composeMiddlewares({
  middlewareA: validationMiddleware,
  middlewareB: intlMiddleware,
});

export const config = {
  matcher: ["/((?!api|trpc|_next|_vercel|.*\\..*).*)", "/admin"],
};
