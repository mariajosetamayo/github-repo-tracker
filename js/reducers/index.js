import * as actions from '../actions/index';

const initialRepositoryState = [];

// In reducer, we check what type the action has.
export const repositoryReducer = (state=initialRepositoryState, action) => {
    if (action.type === actions.ADD_REPOSITORY) { //if the action is the add new repo, we create a new array, populate it with existing state,
        return [...state, {                       // and add a new repo object.
            name: action.repository,
            rating: null
        }];
    }
    else if (action.type === actions.RATE_REPOSITORY) { // if the action is the rate repo, we add the ratinh to the repo object with the corresponding name.
        // Find the index of the matching repository
        const index = state.findIndex(repository =>   // we find the matching repo
            repository.name === action.repository
        );

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        const before = state.slice(0, index); // we copy the repos in the positions before and after the one we are changing
        const after = state.slice(index + 1);
        const newRepository = Object.assign({}, state[index], {rating: action.rating}); // we create a clone of it which adds the new rating.
                                                                                        // using Object.assign
        return [...before, newRepository, ...after]; // we put back the repo using the spread operator
    }
    else if (action.type === actions.FETCH_DESCRIPTION_SUCCESS) {
        // Find the index of the matching repository
        const index = state.findIndex(repository =>
            repository.name === action.repository
        );

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newRepository = Object.assign({}, state[index], {
            description: action.description
        });
        return [...before, newRepository, ...after];
    }
    else if (action.type === actions.FETCH_DESCRIPTION_ERROR) {
        // Find the index of the matching repository
        const index = state.findIndex(repository =>
            repository.name === action.repository
        );

        if (index === -1) {
            throw new Error('Could not find repository');
        }

        const before = state.slice(0, index);
        const after = state.slice(index + 1);
        const newRepository = Object.assign({}, state[index], {
            description: 'N/A'
        });
        return [...before, newRepository, ...after];
    }

    return state;
}
