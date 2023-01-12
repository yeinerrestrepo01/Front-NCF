/**
 * @hidden
 */
export interface BaseEvent<T> {
  /**
   * A React Synthetic Event.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  syntheticEvent: React.SyntheticEvent<any>;
  /**
   * A native DOM event.
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  nativeEvent: any;
  /**
   * An event target.
   */
  target: T;
}
