import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)

it('render correctly', () => {
	expect(app).toMatchSnapshot();
});

it('initializes the `state` with empty list of gifts', () => {
	expect(app.state().gifts).toEqual([]);
});

it('adds new gift to `state` when clicking the button', () => {
	app.find('.btn-add').simulate('click');

	expect(app.state().gifts).toEqual([{id: 1}])
});

it('adds a new gift to the rendered list when clicking `add button`', () => {
	app.find('.btn-add').simulate('click');

	expect(app.find('.gift-list').children().length).toEqual(2);
})