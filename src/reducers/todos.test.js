import todos from './todos'; 
import * as actions from '../actions/actions';
import expect from "expect";

describe("Tests the todo reducers", () => {   
    it("tests add todo", () => { 
        const initialState = [{text: "write test", completed: false, id: 0}];
        const action = actions.addTodo("write code");
        const expectedState = [{text: "write test", completed: false, id: 0}, {text: "write code", completed: false, id:1}];

        expect( todos( initialState, action )  ).toEqual(expectedState)
    })

    it("tests add todo's max value", () => {
        const initialState = [{text: "write test", completed: false, id: 3}];
        const action = actions.addTodo("write code");
        const expectedState = [{text: "write test", completed: false, id: 3}, {text: "write code", completed: false, id:4}];

        expect( todos( initialState, action )  ).toEqual(expectedState)
    })
    it("tests delete todo", () => {
        const initialState = [{text: "write test", completed: false, id: 0},{text: "write code", completed: false, id: 1}];
        const action = actions.deleteTodo(0);
        const expectedState = [{text: "write code", completed: false, id: 1}]

        expect( todos( initialState, action)).toEqual(expectedState);
    } ) 

    it("tests edit todo", () => {
        const initialState = [
            {text: "write test", completed: false, id: 0}, 
            {text: "eat icecream", completed: false, id: 2},
             {text: "write code", completed: false, id: 4}
            ];
        const action = actions.editTodo("new",2);
        const expectedState = [
            {text: "write test", completed: false, id: 0}, 
            {text: "new", completed: false, id: 2},
             {text: "write code", completed: false, id: 4} 
        ];

        expect(todos(initialState, action)).toEqual(expectedState);

    })
 
}) 