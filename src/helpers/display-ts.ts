import { append, compose, flatten, join, keys, pick, values } from "ramda";

// x => f(g(x)) === compose(f, g)

// x => [f(g(x)), f(h(x))] === x => [(compose(f, g)(x), (x => f(h(x)))(x)]

const arrayify = (f, g) => o =>
  compose(
    append(g(o)),
    append(f(o))
  )([]);

export const pp = (s: string) =>
  compose(
    join(": "),
    flatten,
    arrayify(keys, values),
    pick([s])
  );
