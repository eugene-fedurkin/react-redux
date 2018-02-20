import { UPDATE_PROGRESS } from '../constants/constants';

const initialState = 0;

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_PROGRESS:
            const stateCategories = [...action.categories];
            const selectedCategory = stateCategories.find(category =>
                category.categoryId === action.categoryId);
            const categoriesId = [selectedCategory.categoryId];
            let done = 0;
            let notDone = 0;
            stateCategories.forEach(category => {
                if (categoriesId.includes(category.parentCategoryId)) {
                    categoriesId.push(category.categoryId);
                }
            });
            action.tasks.forEach(task => {
                if (categoriesId.includes(task.categoryId)) {
                    task.isDone ? done++ : notDone++
                }
            });
            if (!done && !notDone) return 0;
            return done * 100 / (notDone + done);
        default:
            return state;
    }
}