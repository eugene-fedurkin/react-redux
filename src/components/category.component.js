import React, { Component } from 'react';
import FontIcon from 'material-ui/FontIcon';
import { NavLink } from 'react-router-dom';
import CategoryConteiner from '../containers/category.container';

export default class Category extends Component {

    saveCategoryId = (event) => {
        this.props.saveCategoryId(this.props.categoryId);
        if (this.props.location.search) {
            this.props.history.push(`${this.props.location.search}`);
        }

        this.props.updateProgressbar(this.props.categoryId, this.props.categories.present, this.props.tasks);
    }

    openEditModal = () => {
        this.props.openEditModal();
    }

    openDeleteModalCategory = () => {
        this.props.openDeleteModalCategory(this.props.title);
    }

    openAddModalCategory = () => {
        this.props.openAddModalNestedCategory();
    }

    toggleCollapse = () => {
        this.props.toggleCollapseCategory(this.props.categoryId);
    }

    saveCategoryIdToMoveTask = () => {
        this.props.saveCategoryIdToMoveTask(this.props.categoryId);
    }

    render() {
        const collapseIcon = !this.props.isCollapse
            ? <i onClick={this.toggleCollapse} className="material-icons">keyboard_arrow_down</i>
            : <i onClick={this.toggleCollapse} className="material-icons active">keyboard_arrow_down</i>
        return(
            <div>
                {this.props.isEditWindow
                    ?   <div className='titleCategoryInModal'>
                            <div className='titleCategoruInModal'>
                                {this.props.title}
                            </div>
                            <div className='iconsToMoveTask'>
                                {this.props.categoryIdToMoveTask === this.props.categoryId
                                    && <i className="material-icons">done</i>}
                                <i className="material-icons" onClick={this.saveCategoryIdToMoveTask}>reply</i>
                            </div>
                        </div>
                    :   <NavLink
                            activeClassName='active'
                            to={`/category/${this.props.categoryId}/${this.props.filterTitle && this.props.filterTitle}`}
                            onClick={this.saveCategoryId}
                            className='category'
                        >
                            <span>
                                {this.props.nestedCategories && collapseIcon}
                                <span className='titleCategory'>{this.props.title}</span>
                                <i className="material-icons" onClick={this.openEditModal}>edit</i>
                            </span>
                            <span>
                                <i className="material-icons" onClick={this.openDeleteModalCategory}>delete</i>
                                <i className="material-icons" onClick={this.openAddModalCategory}>add</i>
                            </span>
                        </NavLink>
                }
                <div className='nestedCategory'>
                    {
                        this.props.nestedCategories
                            && this.props.isCollapse
                            && this.props.nestedCategories.map((category, index) =>
                            <CategoryConteiner
                                key={category.categoryId}
                                title={category.title}
                                categoryId={category.categoryId}
                                nestedCategories={category.categories}
                                isEditWindow={this.props.isEditWindow}
                                isCollapse={this.props.isEditWindow
                                    ? true
                                    : category.isCollapse
                                }
                            />)
                    }
                </div>
            </div>
        )
    }
}