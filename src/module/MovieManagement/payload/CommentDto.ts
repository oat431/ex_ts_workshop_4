import { BaseModelDto } from '../../../shared/base.dto.model.js';

export interface CommentDto extends BaseModelDto {
    content: string;
    rate: number;
}
