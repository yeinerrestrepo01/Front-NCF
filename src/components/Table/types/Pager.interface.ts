/**
 * Represents the `skip` and `take` configurations which are wrapped in the `Page` object.
 */
export interface Page {
  /**
   * The number of records that will be skipped.
   */
  skip: number;
  /**
   * The number of records that will be taken.
   */
  take: number;
}
