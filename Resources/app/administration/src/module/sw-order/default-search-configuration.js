import { searchRankingPoint } from 'src/app/service/search-ranking.service';

/**
 * @sw-package checkout
 */

const defaultSearchConfiguration = {
    _searchable: true,
    orderNumber: {
        _searchable: true,
        _score: searchRankingPoint.HIGH_SEARCH_RANKING,
    },
    amountTotal: {
        _searchable: false,
        _score: searchRankingPoint.MIDDLE_SEARCH_RANKING,
    },
    orderCustomer: {
        email: {
            _searchable: true,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
        firstName: {
            _searchable: true,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
        lastName: {
            _searchable: true,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
        customerNumber: {
            _searchable: true,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
        company: {
            _searchable: true,
            _score: searchRankingPoint.MIDDLE_SEARCH_RANKING,
        },
    },
    addresses: {
        firstName: {
            _searchable: true,
            _score: searchRankingPoint.LOW_SEARCH_RANKING,
        },
        lastName: {
            _searchable: true,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
        street: {
            _searchable: true,
            _score: searchRankingPoint.MIDDLE_SEARCH_RANKING,
        },
        zipcode: {
            _searchable: false,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
        city: {
            _searchable: true,
            _score: searchRankingPoint.MIDDLE_SEARCH_RANKING,
        },
        company: {
            _searchable: true,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
        phoneNumber: {
            _searchable: false,
            _score: searchRankingPoint.MIDDLE_SEARCH_RANKING,
        },
        additionalAddressLine1: {
            _searchable: false,
            _score: searchRankingPoint.MIDDLE_SEARCH_RANKING,
        },
        additionalAddressLine2: {
            _searchable: false,
            _score: searchRankingPoint.MIDDLE_SEARCH_RANKING,
        },
    },
    deliveries: {
        trackingCodes: {
            _searchable: true,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
    },
    tags: {
        name: {
            _searchable: true,
            _score: searchRankingPoint.HIGH_SEARCH_RANKING,
        },
    },
    documents: {
        config: {
            documentNumber: {
                _searchable: false,
                _score: searchRankingPoint.LOW_SEARCH_RANKING,
            },
        },
    },
};

// eslint-disable-next-line sw-deprecation-rules/private-feature-declarations
export default defaultSearchConfiguration;
