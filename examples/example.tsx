interface User {
  firstName: string;
  lastName: string;
}

function formatName(user: User): string {
  return `${user.firstName.toUpperCase()} ${user.lastName}`;
}

const user = {
  firstName: "Philip",
  lastName: "Wach",
};

export const element = <h1>👋, {formatName(user).toUpperCase()}!</h1>;
