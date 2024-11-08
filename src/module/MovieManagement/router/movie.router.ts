import { Router } from 'express';
import { MovieController } from '../controller/movie.controller.js';

const movieRouter = Router();
const movieController = new MovieController();

/**
 * @swagger
 * /api/v1/movies:
 *   get:
 *     summary: Get all movies
 *     operationId: getAllMovies
 *     description: Get all movies
 *     tags:
 *      - Movie API
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResponseDtoListMovieDto'
 */
movieRouter.get('/movies', movieController.getAllMovies);

/**
 * @swagger
 * /api/v1/movies/{id}:
 *   get:
 *     summary: Get movie by id
 *     operationId: getMovieById
 *     description: Get movie by id
 *     tags:
 *      - Movie API
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Movie id
 *        schema:
 *          type: string
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResponseDtoMovieDto'
 */
movieRouter.get('/movies/:id', movieController.getMoviesById);

/**
 * @swagger
 * /api/v1/movies/{id}/comments:
 *   post:
 *     summary: Add comment to movie
 *     operationId: addComment
 *     description: Add comment to movie
 *     tags:
 *      - Movie API
 *     parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: Movie id
 *        schema:
 *          type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CommentRequest'
 *     responses:
 *      200:
 *        description: Success
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/ResponseDtoMovieDto'
 *      404:
 *        description: Movie not found
 */
movieRouter.post('/movies/:id/comments', movieController.addComment);

export default movieRouter;
