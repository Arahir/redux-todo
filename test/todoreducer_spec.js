import {expect} from 'chai';
import {createStore} from 'redux';
import reducers from '../src/reducers';

describe('todo reducers', () => {
  let store;
  beforeEach((done) => {
    store = createStore(reducers);

    done();
  });
  describe('initial params', () => {
    it('should be defined', () => {
      expect(store.getState().todo).to.exist;
    })
    it('should be an array', () => {
      expect(Array.isArray(store.getState().todo)).to.be.true;
    });
    it('should be defaulted to []', () => {
      expect(store.getState().todo).to.deep.equal([]);
    });
  })
  describe('add todo', () => {
    it('should add a task when called with ADD_TODO', () => {
      store.dispatch({type: 'ADD_TODO'});
      expect(store.getState().todo.length).to.equal(1);
    });
    it('should have the correct text', () => {
      store.dispatch({type: 'ADD_TODO', text: 'coding'});
      expect(store.getState().todo[0].text).to.equal('coding');
    });
    it('should increment id', () => {
      store.dispatch({type: 'ADD_TODO', text: 'coding'});
      expect(store.getState().todo[0].id).to.equal(0);
    });
    it('should not be completed', () => {
      store.dispatch({type: 'ADD_TODO', text: 'coding'});
      expect(store.getState().todo[0].completed).to.not.be.true;
    });
  })
});
