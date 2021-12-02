import type { NextApiRequest, NextApiResponse } from "next";
import { users } from "../../../data/users";
import { v4 as uuidv4 } from "uuid";

type Data = {
  name: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    res.status(200).json(users);
  } else if (req.method === "POST") {
    const name = req.body.name;

    const newUser = {
      id: uuidv4(),
      name: name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  }
}
