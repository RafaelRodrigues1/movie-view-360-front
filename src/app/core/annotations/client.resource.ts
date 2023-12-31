export function ClientResource(annotation: any) {
  return function decorator(target: any) {
    const endPoint = annotation.endPoint;

    if (endPoint) {
      Object.defineProperty(target.prototype, 'endPoint', { value: annotation.endPoint });
    }
  };
}
