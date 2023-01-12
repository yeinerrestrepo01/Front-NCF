import { DataResult, State } from '../types/Table.interface';

/**
 * Applies the specified operation descriptors to the data.
 *
 * @param {T[]} data - The data to be processed.
 * @param {State} state - The operation descriptors that will be applied to the data.
 * @returns {DataResult} - The processed data.
 *
 * @example
 * ```ts
 *
 * const result = process(data, {
 *     skip: 10,
 *     take: 20,
 *     sort: [{ field: 'productName', dir: 'desc' }],
 * });
 *
 * ```
 */

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function processTable<T>(data: T[], state: State): DataResult {
  return { data, total: null };
}
