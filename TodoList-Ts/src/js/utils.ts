export function findParentNode (target: HTMLElement, className: string): HTMLElement {
  while (target = target.parentNode as HTMLElement) {
    if (target.className = className) {
      return target;
    }
  }
}