// import store from 'store.js'

export const addNote = ({
	dispatch
}) => {
	dispatch('ADD_NOTE')
};
export const editNote = ({
	dispatch
}, e) => {
	dispatch('EDIT_NOTE', e.target.value)
};
export const deleteNote = ({
	dispatch
}) => {
	dispatch('DELETE_NOTE')
};
export const toggleFavorite = ({
	dispatch
}) => {
	dispatch('TOGGLE_FAVORTE')
};
export const updateActiveNote = ({
	commit
}, note) => {
	dispatch('SET_ACTIVE_NOTE', note)
};