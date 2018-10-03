import * as actions from './actions';
 import expect from "expect";

describe("actions", () => {
    
    it("tests the addTodo action", () => { 
        const text = "learn fp";
        const expectedActionEmitted = {
            type: "ADD_TODO",
            text
        }
        expect(actions.addTodo(text)).toEqual(expectedActionEmitted);
    });
    it("tests delete action", () => {
        expect(actions.deleteTodo(2)).toEqual({type: "DELETE_TODO", id: 2})
    })   

    it("tests edit action", () => {
        expect(actions.editTodo("hello", 2)).toEqual({type: "EDIT_TODO", id:2, text:"hello" })
    })

    it("tests increment action", () => {
        const expectedActionEmitted = { type:"INCREMENT" } 
        expect(actions.increment()).toEqual(expectedActionEmitted);
    })
    it("tests decrement action", () => {
        const expectedActionEmitted = { type:"DECREMENT" } 
        expect(actions.decrement()).toEqual(expectedActionEmitted);
    })
})