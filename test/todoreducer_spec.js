import {expect} from 'chai';
import {createStore} from 'redux';

describe('todo reducers', () => {
  let store;
  beforeEach((done) => {
    const todo = (state, action) => {

    }
    store = createStore(todo);

    done();
  });

  it('defaulted to []', () => {
    expect(store.getState()).to.deep.equal([]);
  });
  describe('add todo', () => {
    it('should add a task when called with ADD_TODO'){
      store.dispatch({type: 'ADD_TODO'});
      expect(store.getState().length).to.equal(1);
    }
    it('the new task should have the correct text'){
      store.dispatch({type: 'ADD_TODO', text: 'coding'});
      expect(store.getState()[0].text).to.equal('coding');
    }
    it('the id sould increment'){
      store.dispatch({type: 'ADD_TODO', text: 'coding'});
      expect(store.getState()[0].id).to.equal(1);
    }
  })
});
