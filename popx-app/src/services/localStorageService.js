const USER_KEY = 'popx_user';

/**
 * Persists a user object to localStorage.
 * @param {Object} user
 */
export function saveUser(user) {
  localStorage.setItem(USER_KEY, JSON.stringify(user));
}

/**
 * Retrieves the stored user object, or null if absent.
 * @returns {Object|null}
 */
export function getUser() {
  const raw = localStorage.getItem(USER_KEY);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

/**
 * Removes the stored user, effectively logging out.
 */
export function clearUser() {
  localStorage.removeItem(USER_KEY);
}
