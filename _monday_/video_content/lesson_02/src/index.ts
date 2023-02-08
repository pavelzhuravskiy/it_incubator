import express, { NextFunction, Request, Response } from "express";

const app = express();
const port = process.env.PORT || 5000;

const blablaMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // @ts-ignore
  req.blabla = "hello";
  next();
};

const authGuardMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.query.token === "123") {
    next();
  } else {
    res.send(401);
  }
};

let requestCounter = 0;

const requestCounterMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  requestCounter++;
  next();
};

app.use(blablaMiddleware);
app.use(requestCounterMiddleware)
// app.use(authGuardMiddleware);

app.get("/products", (req: Request, res: Response) => {
  // @ts-ignore
  const blabla = req.blabla;
  res.send({ value: `${blabla}!!! + ${requestCounter}` });
});

app.get("/users", (req: Request, res: Response) => {
  // @ts-ignore
  const blabla = req.blabla;
  res.send({ value: `${blabla}!!! + ${requestCounter}` });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});