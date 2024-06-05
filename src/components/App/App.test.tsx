// // src/App.test.tsx

// import React from 'react';
// import renderer from 'react-test-renderer';
// import App from './App';
// import TodoList from '../ToDoList/ToDoList';

// // Мокаем компонент TodoList, чтобы упростить тесты и избежать его зависимости
// jest.mock('../ToDoList/ToDoList', () => 'TodoList');

// describe('App', () => {
//   it('renders correctly', () => {
//     const component = renderer.create(<App />);
//     const tree = component.toJSON();
//     expect(tree).toMatchSnapshot();
//   });

//   it('contains TodoList component', () => {
//     const component = renderer.create(<App />);
//     const rootInstance = component.root;
//     expect(rootInstance.findByType(<TodoList/>)).toBeTruthy();
//   });
// });
