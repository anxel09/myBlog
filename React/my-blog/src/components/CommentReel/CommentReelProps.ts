import {CursorPagedRequest} from "../../shared/api/types/paging/cursorPaging";
import {PostModel} from "../../shared/api/types/post";

export interface CommentReelProps {
    reelWidth: string,
    pagingRequestDefault: CursorPagedRequest,
    post?: PostModel
}