import { articles } from "../../../data/articles";

export default function handler(req: any, res: any) {
  res.status(200).json(articles);
}
