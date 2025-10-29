// utils/omitPassword.ts
export function omitPassword<
  T extends { password?: string } | null | undefined,
>(
  user: T | T[],
): Omit<T, "password"> | Omit<T, "password">[] | null | undefined {
  if (!user) return user; // handles null or undefined

  const omit = (u: any) => {
    if (u && typeof u === "object" && "password" in u) {
      const { password, ...rest } = u;
      return rest;
    }
    return u;
  };

  return Array.isArray(user) ? user.map(omit) : omit(user);
}
