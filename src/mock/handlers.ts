import { rest } from "msw";
import { DATA } from "./data";

export const handlers = [
  rest.get("/load", (req, res, ctx) => {
    return res(ctx.delay(400), ctx.status(200), ctx.json(DATA));
  }),
];
