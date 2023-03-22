/**
 * Asynchronously loads the component for HomePage
 */

import { lazyLoad } from 'utils/loadable';

export const Pay = lazyLoad(
  () => import('./index'),
  module => module.Pay,
);
