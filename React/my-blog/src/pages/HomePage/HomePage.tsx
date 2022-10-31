import React from 'react';
import { BlogReel } from '../../components/BlogReel';
import { CursorPagedRequest } from '../../shared/api/types/paging/cursorPaging';
import { DefaultPageSize } from '../../shared/config';

const HomePage = () => {

    const homePagingConditions: CursorPagedRequest = {
        pageSize: DefaultPageSize,
        getNewer: false
    }

    return (
        <BlogReel pageSize={0} reelWidth={'50%'} pagingRequestDefault={homePagingConditions} showFilteringMenu availableFilterNames={["Content","Title","Topic"]}></BlogReel>
    );
};

export {HomePage};