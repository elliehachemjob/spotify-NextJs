import { articles } from "../../../data/articles";

export default function handler(req: any, res: any) {
  const filtered = articles.filter(
    (article: any) => article.id === req.query.id
  );

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `article with id of ${req.query.id} is not found ` });
  }
}
