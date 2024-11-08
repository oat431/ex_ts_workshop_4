import { BaseModelDto } from '../../../shared/base.dto.model.js';
import { CommentDto } from './CommentDto.js';

export interface MovieDto extends BaseModelDto {
    title: string;
    release: string;
    comments: CommentDto[];
}
