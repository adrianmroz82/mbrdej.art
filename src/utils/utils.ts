let _history = null;

export function direct(route: string) {
  _history.push(route);
}

export function redirect(route: string) {
  window.location.href = route;
}
