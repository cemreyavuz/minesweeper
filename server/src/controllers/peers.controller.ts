import { NextFunction, Request, Response } from 'express';
import cache from 'memory-cache';

class PeersController {
  public getPeers = async (req: Request, res: Response, next: NextFunction) => {
    try {
      const peers = cache.get('peers');

      res.status(200).json({ data: Object.keys(peers) });
    } catch (error) {
      next(error);
    }
  };
}

export default PeersController;
