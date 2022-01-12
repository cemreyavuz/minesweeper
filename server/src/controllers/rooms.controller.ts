import { NextFunction, Request, Response } from 'express';
import cache from 'memory-cache';

import { CreateRoomDto, UpdateRoomDto } from '@dtos/rooms.dto';
import { Room } from '@interfaces/rooms.interface';

class RoomsController {
  public getRooms = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const rooms: Room[] = cache.get('rooms');

      res.status(200).json({ data: rooms });
    } catch (error) {
      next(error);
    }
  };

  public getRoomsById = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomName: string = req.params.name;

      const rooms: Room[] = cache.get('rooms');
      const room = rooms.find(({ name: testName }: Room) => testName === roomName);

      res.status(200).json({ data: room });
    } catch (error) {
      next(error);
    }
  };

  public createRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomData: CreateRoomDto = req.body;

      const rooms: Room[] = cache.get('rooms');
      // TODO: check if room already exists
      const updatedRooms = [...rooms, roomData];
      cache.put('rooms', updatedRooms);

      res.status(201).json({ data: roomData });
    } catch (error) {
      next(error);
    }
  };

  public updateRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomName: string = req.params.name;
      const roomData: UpdateRoomDto = req.body;

      const rooms: Room[] = cache.get('rooms');
      const updatedRooms = [...rooms];
      const roomIndex = updatedRooms.findIndex(({ name: testName }: Room) => testName === roomName);
      // TODO: check if room found
      updatedRooms[roomIndex] = { ...updatedRooms[roomIndex], ...roomData };
      cache.put('rooms', updatedRooms);

      res.status(200).json({ data: updatedRooms[roomIndex] });
    } catch (error) {
      next(error);
    }
  };

  public deleteRoom = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const roomName: string = req.params.name;

      const rooms: Room[] = cache.get('rooms');
      const roomIndex = rooms.findIndex(({ name: testName }: Room) => testName === roomName);
      // TODO: check if room found
      const updatedRooms = [...rooms.slice(0, roomIndex), ...rooms.slice(roomIndex + 1)];
      cache.put('rooms', updatedRooms);

      res.status(200).json({ data: rooms[roomIndex] });
    } catch (error) {
      next(error);
    }
  };
}

export default RoomsController;
