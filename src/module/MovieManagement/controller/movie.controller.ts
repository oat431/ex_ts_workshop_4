import { Request, Response } from 'express';
import { MovieDto } from '../payload/MovieDto.js';
import { ResposneDto } from '../../../shared/ResponseDto.js';
import { MovieMapper } from '../utils/movie.mapper.js';
import { MovieService } from '../service/movie.service.js';
import { Movie } from '../domain/entity/movie.model.js';

export class MovieController {
    public getAllMovies(req: Request, res: Response): void {
        const movies: Movie[] = MovieService.getAllMovies();
        const moviesDto: MovieDto[] = movies.map((movie) => MovieMapper.toMovieDto(movie));
        const response: ResposneDto<MovieDto[]> = {
            data: moviesDto,
        };
        res.status(200).json(response);
    }

    public getMoviesById(req: Request, res: Response): void {
        const id: number = parseInt(req.params.id);
        const movie: Movie = MovieService.getMovieById(id);
        const movieDto: MovieDto = MovieMapper.toMovieDto(movie);
        const response: ResposneDto<MovieDto> = {
            data: movieDto,
        };
        res.status(200).json(response);
    }
}
