/**
 * History.test.js
 * Testing for the History component
 */
import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render } from '@testing-library/react';
import History from '../../components/History';

describe('<History />', () => {
  let component;
  const recipes = [
    {
      name: 'Guiness Clone',
      style: 'Irish Stout',
      id: 1,
    },

    {
      name: 'Driftwood',
      style: 'IPA',
      id: 2,
    },

    {
      name: 'White Bark',
      style: 'Peach Ale',
      id: 3,
    },

    {
      name: 'Blue Buck',
      style: 'Ale',
      id: 4,
    },
  ];

  beforeEach(() => {
    component = render(<History active={'history'} recipes={recipes}/>);
  });

  it('has history as the title', () => {
    expect(component.container).toHaveTextContent('History');
  });

  it('has brewing table', () => {
    const brewingTable = component.getByTestId('brewing-table');

    expect(brewingTable).toHaveTextContent('Name');
    expect(brewingTable).toHaveTextContent('Style');
    expect(brewingTable).toHaveTextContent('Started');
    expect(brewingTable).toHaveTextContent('Finished');
  });

  it('has recipe table', () => {
    const recipeTable = component.getByTestId('recipe-table');

    expect(recipeTable).toHaveTextContent('Name');
    expect(recipeTable).toHaveTextContent('Style');
    expect(recipeTable).toHaveTextContent('Info');
  });

  it('renders recipes in the recipes table', () => {
    const recipeTable = component.getByTestId('recipe-table');
    recipes.forEach((recipe) => {
      expect(recipeTable).toHaveTextContent(recipe.name);
      expect(recipeTable).toHaveTextContent(recipe.style);
    });
  });

  it('renders brews in the brew table', () => {
    // Unimplemented
  });
});
