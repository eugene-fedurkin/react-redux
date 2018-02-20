export default class UndoRedo {

    deepCopy(obj) {
        let output;
        let value;
        let key;

        output = Array.isArray(obj)
            ? []
            : {};
        for (key in obj) {
            value = obj[key];
            output[key] = (typeof value === 'object' && value !== null)
                ? this.deepCopy(value)
                : value;
        }

        return output;
    }

    compareStates(present, newPresent) {
        if (JSON.stringify(present) === JSON.stringify(newPresent)) {
            return true;
        }
        return false;
    }

    undoable = (reducer) => {
        const that = this;
        const initialState = {
            past: [],
            present: reducer(undefined, {}),
            future: [],
        }

        return function (state = initialState, action) {
            const { past, present, future } = state;

            switch (action.type) {
                case 'UNDO':
                    const previous = that.deepCopy(past[past.length - 1]);
                    const newPast = past.slice(0, past.length - 1);
                    return {
                        past: newPast,
                        present: previous,
                        future: [present, ...future],
                    }
                case 'REDO':
                    const next = that.deepCopy(future[0]);
                    const newFuture = future.slice(1);
                    return {
                        past: [...past, present],
                        present: next,
                        future: newFuture,
                    }
                default:
                    const copyPresent = that.deepCopy(present);
                    const newPresent = reducer(copyPresent, action);
                    if (that.compareStates(present, newPresent)) {
                        return state;
                    }
                    const pres = that.deepCopy(present);
                    return {
                        past: [...past, pres],
                        present: newPresent,
                        future: [],
                    }
            }
        }
    }
}
