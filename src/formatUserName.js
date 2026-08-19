export function formatUserName(user) {
  const firstName = user.firstName?.trim();
  const lastName = user.lastName?.trim();

  if (!firstName && !lastName) {
    return "Anonymous";
  }

  if (!lastName) {
    return firstName;
  }

  if (!firstName) {
    return lastName;
  }

  return `${firstName} ${lastName}`;
}