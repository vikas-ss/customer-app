const initsate = {
	users: [
		{ id:'1', name:'Perry Anderson', email:'perry@mailinator.com' },
		{ id:'2', name:'Edwin Mcbride', email:'edwin@mailinator.com' },
		{ id:'3', name:'Patrick Walker', email:'patrick@mailinator.com' },
	]
}

const rootReducer = (state = initsate, action) => {
	return state;
}

export default rootReducer;