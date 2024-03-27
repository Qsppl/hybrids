import { Model, StorageValues, store } from "hybrids";
import { IExampleEnumerable } from "./store-enumerable-definition.store.test";

const EnumerableModelsSource: { [key: number]: StorageValues<IExampleEnumerable>; } = {
    0: { id: "0", prop: 'qweqwe', length: 5 },
    1: { id: "1", length: 1711014651455 },
    2: { id: "2", prop: 'swswswsws' },
};

const EnumerableModelStore: Model<IExampleEnumerable> = {
    id: true,
    prop: "",
    length: 0,
    [store.connect]: {
        list: (id) => [...Object.values(EnumerableModelsSource)],
    }
};