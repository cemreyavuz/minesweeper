import { Router } from 'express';
import RoomsController from '@controllers/rooms.controller';
import { CreateRoomDto, UpdateRoomDto } from '@dtos/rooms.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class RoomsRoute implements Routes {
  public path = '/rooms';
  public router = Router();
  public roomsController = new RoomsController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.roomsController.getRooms);
    this.router.get(`${this.path}/:id`, this.roomsController.getRoomsById);
    this.router.post(`${this.path}`, validationMiddleware(CreateRoomDto, 'body'), this.roomsController.createRoom);
    this.router.put(`${this.path}/:name`, validationMiddleware(UpdateRoomDto, 'body', true), this.roomsController.updateRoom);
    this.router.delete(`${this.path}/:name`, this.roomsController.deleteRoom);
  }
}

export default RoomsRoute;
