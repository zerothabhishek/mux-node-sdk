/*!
 * Mux Errors
 * Copyright(c) 2018 Mux Inc.
 */
import { Base } from '../../base.js';
import { ErrorsListResponse, ErrorsParams } from '../domain.js';

/**
 * @private Base errors path for the Mux API
 * */
const PATH = '/data/v1/errors';

/**
 * Errors Class - Provides access to the Mux Data Errors API
 * @extends Base
 * @example
 * const { Data } = new Mux(accessToken, secret);
 *
 * // Returns a list of playback errors filtered by the windows operating system
 * Data.Errors.list({ filters: ['operating_system:windows'] });
 */
export class Errors extends Base {
  /**
   * Returns a list of playback errors
   *
   * @param {Object} [params] - example { timeframe: ['7:days'], filters: ['operating_system:windows'] }
   * @returns {Promise} - Returns a resolved Promise with a response from the Mux API
   *
   * @example
   * const { Data } = new Mux(accessToken, secret);
   *
   * // Returns a list of playback errors filtered by the windows operating system
   * Data.Errors.list({ filters: ['operating_system:windows'] });
   *
   * @see https://docs.mux.com/api-reference/data#operation/list-errors
   */
  list(params?: ErrorsParams): Promise<ErrorsListResponse> {
    return this.http.get(PATH, { params });
  }
}
