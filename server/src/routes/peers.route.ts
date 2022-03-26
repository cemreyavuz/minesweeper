import { Router } from 'express';
import PeersController from '@controllers/peers.controller';
import { Routes } from '@interfaces/routes.interface';

class PeersRoute implements Routes {
  public path = '/peers';
  public router = Router();
  public peersController = new PeersController();

  constructor() {
    this.getPeers();
  }

  private getPeers() {
    this.router.get(`${this.path}`, this.peersController.getPeers);
  }
}

export default PeersRoute;
