export { default } from "next-auth/middleware";

export const config = {
  // *: zero or more
  // +: one or more
  // ?: zero or one
  matcher: ["/users/:id*"], //禁止的URL，需要登录才可以访问
};
