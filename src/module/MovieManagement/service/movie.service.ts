import { Movie } from '../domain/entity/movie.model.js';
import movies from '../../../shared/data/movie.json' assert { type: 'json' };
import { Comment } from '../domain/entity/comment.model.js';

export class MovieService {
    public static getAllMovies(): Movie[] {
        return movies.map(
            (movie) =>
                new Movie(
                    movie.id,
                    movie.title,
                    movie.release,
                    movie.comments.map((comment) => new Comment(comment.id, comment.content, comment.rate)),
                ),
        );
    }

    public static getMovieById(id: number): Movie {
        const movie = movies.find((movie) => movie.id === id);
        if (!movie) {
            throw new Error('Movie not found');
        }
        return new Movie(
            movie.id,
            movie.title,
            movie.release,
            movie.comments.map((comment) => new Comment(comment.id, comment.content, comment.rate)),
        );
    }
}
