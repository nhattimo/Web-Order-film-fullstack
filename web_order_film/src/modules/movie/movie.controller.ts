import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { InsertMovieDto } from './dto/request/insert-movie.dto';
import { Public } from '../auth/auth.setmetadata';
import { AuthGuard } from '../auth/auth.guard';
import { RolesGuard } from '../authorization/roles.guard';
import { Roles } from '../authorization/roles.decorator';
import { Role } from '../authorization/role.enum';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('/movies')
export class MovieController {
  constructor(private movieService: MovieService) {}

  @Public()
  @Get('/:id')
  getMovie(@Param('id', { transform: (value) => Number(value) }) id: number) {
    return this.movieService.getMovie(id);
  }

  @Public()
  @Get('')
  getMovies() {
    return this.movieService.getMovies();
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Post('')
  @UseInterceptors(FileInterceptor('image'))
  insertMovie(
    @Body() body: InsertMovieDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.movieService.addMovie(body, file);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Put('/:id')
  @UseInterceptors(FileInterceptor('image'))
  updateMovie(
    @Param('id', { transform: (value) => Number(value) }) id: number,
    @Body() data: InsertMovieDto,
    @UploadedFile() file: Express.Multer.File,
  ) {
    return this.movieService.updateMovie(id, data, file);
  }

  @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.Admin)
  @Delete('/:id')
  deleteMovie(
    @Param('id', { transform: (value) => Number(value) }) id: number,
  ) {
    return this.movieService.deleteMovie(id);
  }
}
