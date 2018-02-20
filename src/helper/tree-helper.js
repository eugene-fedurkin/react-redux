export default class TreeHelper {
    constructor() {
        this.categories = [];
    }

    createTree(categoriesFlatList) {
        this.categories = [];
        let categories = this.deepCopy(categoriesFlatList);
        let length;
        while (categories.length) {
            if (categories.length === length) throw new Error('Could not initialize tree');
            length = categories.length;
            for (let i = 0; i < categories.length;) {
                if (categories[i].parentCategoryId === null) {
                    this.categories.push(categories[i]);
                    categories.splice(i, 1);
                }
                else {
                    let parentCategory = this.findCategory(this.categories, categories[i].parentCategoryId);
                    if (parentCategory) {
                        if (!parentCategory.categories)
                            parentCategory.categories = [categories[i]];
                        else {
                            parentCategory.categories.push(categories[i]);
                        }
                        categories.splice(i, 1);
                    } else i++;
                }
            }
        }
        return this.categories;
    }

    deepCopy = (obj) => {
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

     findCategory = (categories, id) => {
        for (let category of categories) {
            if (category.categoryId === id) return category;
            else if (category.categories) {
                let result = this.findCategory(category.categories, id);
                if (result) return result;
            }
        }

        return null;
    }
}
