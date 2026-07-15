import { cookies } from "next/headers";

const OWNER_COOKIE_NAME = "portfolio_owner_auth";
const OWNER_SECRET = "portfolio-owner-secret-123";

export async function isOwner() {
  const cookieStore = await cookies();
  const authCookie = cookieStore.get(OWNER_COOKIE_NAME);
  return authCookie?.value === OWNER_SECRET;
}

export { OWNER_COOKIE_NAME, OWNER_SECRET };