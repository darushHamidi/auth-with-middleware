/* eslint-disable import/no-anonymous-default-export */
import { sign } from "jsonwebtoken";
import { serialize } from "cookie";


export default async function (req, res) {

  const token = sign(
    {
      exp: Math.floor(Date.now() / 1000) + 60 * 60 * 24 * 30, // 30 days
      username: "ARoshanzamir",
    },
    "TOPSECRET"
  );

  const serialised = serialize("OursiteJWT", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== "development",
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 30,
    path: "/",
  });

  res.setHeader("Set-Cookie", serialised);

  res.status(200).json({ message: "Success!" });

}
