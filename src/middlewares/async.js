export default ({dispatch}) => (next) => (action) => {
  // Check to see if the action has a promise on its payload property
  // If it does, wait to resolve
  // If it doesn't, forward to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }

  // We want to wait for the promise to resolve and then create a new action
  // with that data and dispatch it
  action.payload.then((response) => {
    const newAction = {...action, payload: response};
    dispatch(newAction);
  });

}
