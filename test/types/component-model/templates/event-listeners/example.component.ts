import EnumerableStore, { IEnumerable } from "/test/types/store/enumerable-definition.store";
import SingletonStore, { ISingleton } from "/test/types/store/singleton-definition.store";
import { define, html, store } from "/types/index";

interface IExampleComonent extends HTMLElement {
  prop: number;
  singleton: ISingleton;
  enumerable: IEnumerable;
}

export default define<IExampleComonent>({
  tag: "example",
  prop: 0,
  singleton: store(SingletonStore, { draft: true }),
  enumerable: store(EnumerableStore, { draft: true }),
  render: ({ prop, singleton, enumerable }) => html`
    <button onclick=${html.set("prop", 1)}></button>
    <button onclick=${html.set(singleton, "qqq")}></button>
  `,
});
