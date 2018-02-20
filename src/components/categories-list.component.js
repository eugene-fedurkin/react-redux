import React, { Component } from 'react';
import CategoryConteiner from '../containers/category.container';
import TreeHelper from '../helper/tree-helper';
import { Scrollbars } from 'react-custom-scrollbars';

export default class ListCategories extends Component {
    constructor() {
        super();
        this.treeHelper = new TreeHelper();
    }

    render() {
        const categoryTree = this.treeHelper.createTree(this.props.categories.present);
        return(
            <Scrollbars style={{ height: '80vh', width: '95%' }} autoHide>
                <section className='categories'>
                    {categoryTree.map((category, index) =>
                        <CategoryConteiner
                            key={category.categoryId}
                            title={category.title}
                            categoryId={categoryTree[index].categoryId}
                            nestedCategories={category.categories}
                            isEditWindow={this.props.isEditWindow}
                            isCollapse={this.props.isEditWindow
                                ? true
                                : category.isCollapse
                            }
                        />
                    )}
                </section>
            </Scrollbars>
        )
    }
}
