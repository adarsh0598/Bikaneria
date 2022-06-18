import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin2@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john2@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Jane Doe",
    email: "jane2@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];

export default users;
