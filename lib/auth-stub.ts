// Temporary stub for authentication-related helpers while Clerk is disabled
// Provides minimal implementations so server routes can compile during deployment

interface MockClerkUser {
  id: string;
  firstName: string | null;
  lastName: string | null;
  emailAddresses: Array<{ emailAddress: string }>;
  privateMetadata?: Record<string, unknown>;
}

const mockUser: MockClerkUser = {
  id: "guest",
  firstName: "Guest",
  lastName: "User",
  emailAddresses: [{ emailAddress: "guest@example.com" }],
  privateMetadata: {},
};

/**
 * Mimics the Clerk auth helper. Always returns a null user to signal auth-disabled state.
 */
export async function auth() {
  return { userId: null };
}

/**
 * Mimics the Clerk client. Returns no-op getters so existing logic can stay in place.
 */
export async function clerkClient() {
  return {
    users: {
      getUser: async (_userId: string) => mockUser,
      getUserList: async () => ({ data: [mockUser], totalCount: 1 }),
      updateUser: async (_userId: string, _payload: Record<string, unknown>) => mockUser,
    },
  };
}
