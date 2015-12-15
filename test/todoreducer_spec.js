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
  describe('initial params', () => {
    it('should be defined', () => {
      expect(store.getState()).to.exist;
    })
    it('should be an array', () => {
      expect(Array.isArray(store.getState()).to.be.true)
    });
    it('should be defaulted to []', () => {
      expect(store.getState()).to.deep.equal([]);
    });
  })
  describe('add todo', () => {
    it('should add a task when called with ADD_TODO', () => {
      store.dispatch({type: 'ADD_TODO'});
      expect(store.getState().length).to.equal(1);
    });
    it('should have the correct text', () => {
      store.dispatch({type: 'ADD_TODO', text: 'coding'});
      expect(store.getState()[0].text).to.equal('coding');
    });
    it('should increment id', () => {
      store.dispatch({type: 'ADD_TODO', text: 'coding'});
      expect(store.getState()[0].id).to.equal(1);
    });
  })
});
