import React from 'react';
import {useSearchParams} from 'react-router-dom';
import {BlogReel} from '../../components/BlogReel';
import {fetchFiltersFromUrlSearchParams, PostFilterNames} from '../../shared/assets';
import {DefaultPageSize} from '../../shared/config';

const {Content, Title, Topic} = PostFilterNames;

const HomePage = () => {

    const [searchParams, setSearchParams] = useSearchParams(Content, Title, Topic);

    const availableFilterNames: PostFilterNames[] = [];

    const homePagingConditions = {
        pageSize: DefaultPageSize,
        getNewer: false,
        requestFilters: fetchFiltersFromUrlSearchParams(searchParams, availableFilterNames)
    };


    return (
        <BlogReel showAddPostForm={true} reelWidth={'50%'} pagingRequestDefault={homePagingConditions} showFilteringMenu
                  availableFilterNames={availableFilterNames}/>
    );
};

export {HomePage};