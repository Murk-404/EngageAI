import { authMiddleware } from "@clerk/nextjs";
console.log("middleware.ts");
export default authMiddleware();
export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/'"],
};
