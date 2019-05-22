export default ({dispatch}) => (next) => (action) => {
  // Check to see if the action has a promise on its payload property
  // If it does, wait to resolve
  // If it doesn't, forward to the next middleware
  if (!action.payload || !action.payload.then) {
    return next(action);
  }
}
