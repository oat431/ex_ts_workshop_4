import { Movie } from '../domain/entity/movie.model.js';
import { CommentDto } from '../payload/CommentDto.js';
import { MovieDto } from '../payload/MovieDto.js';
import { Comment } from '../domain/entity/comment.model.js';

export class MovieMapper {
    public static toMovieDtos(movies: Movie[]): MovieDto[] {
        return movies.map((movie) => this.toMovieDto(movie));
    }

    public static toMovieDto(movie: Movie): MovieDto {
        return {
            id: movie.getId(),
            title: movie.getTitle(),
            release: movie.getSimpleRelease(),
            comments: this.toCommentDto(movie.getComments()),
            createdAt: new Date(),
            updatedAt: new Date(),
        };
    }

    private static toCommentDto(comments: Comment[]): CommentDto[] {
        return comments.map((comment) => ({
            id: comment.getId(),
            content: comment.getContent(),
            rate: comment.getRate(),
            createdAt: new Date(),
            updatedAt: new Date(),
        }));
    }
}
