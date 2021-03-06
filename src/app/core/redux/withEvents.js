import { put, call } from 'redux-saga/effects';
import { setRouteFilters } from '@zengenti/contensis-react-base/search';
import { queryParams, routeParams } from '../util/navigation';
// import { GET_SITE_CONFIG } from '~/core/redux/siteConfig/types';
import { ROUTE_HAS_LOADED, ROUTE_WILL_LOAD } from './types';
import { ContentTypes, ListingPages } from '../schema';

import transformations from '../../components/search/transformations';

export default {
  onRouteLoad: function* onRouteLoad({
    path,
    location,
    // staticRoute,
  }) {
    yield put({ type: ROUTE_WILL_LOAD, path, location });
    // Set params for routing saga

    const preventScrollTop = path => {
      if (!path) return null;
      switch (true) {
        case path.includes('/products'):
        case path.includes('/blog'):
        case path.includes('/search'):
          return true;
        default:
          return false;
      }
    };

    return {
      customNavigation: {
        ancestors: true,
        children: true,
        siblings: true,
        tree: true,
      },
      preventScrollTop: preventScrollTop(path),
    };
  },
  onRouteLoaded: function* onRouteLoaded({
    path,
    entry,
    location,
    staticRoute,
  }) {
    const params = {
      ...routeParams(staticRoute),
      ...queryParams(location && location.search),
    };

    const { sys: { contentTypeId } = {} } = entry || {}; // Desturucture the elements from entry.sys in a null-safe way

    let triggerListing = false;
    // To give the Content Type pages with Listings
    // the right parameters to drive them
    switch (contentTypeId) {
      case ContentTypes.blogListing:
        triggerListing = true;
        break;
      case ContentTypes.productListing:
        triggerListing = true;
        break;
      default:
        break;
    }

    // eslint-disable-next-line no-console
    if (path.startsWith('/search')) {
      yield call(setRouteFilters, {
        mappers: transformations,
        params,
      });
    }

    yield put({ type: ROUTE_HAS_LOADED, path, entry });

    // const siteConfig = yield select(hasSiteConfig);

    // if (!siteConfig) {
    //   yield put({ type: GET_SITE_CONFIG });
    // }

    yield triggerListing &&
      Object.keys(ListingPages).includes(contentTypeId) &&
      setRouteFilters({
        listingType: ListingPages[contentTypeId],
        mappers: transformations,
        params,
      });
  },
};
