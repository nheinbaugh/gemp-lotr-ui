import axios from 'axios';
import { useEffect } from 'react';

class HallHeartbeat {
  private isStopped = false;

  constructor(private readonly channelNumber: number) {}

  start() {
    this.tick();
  }

  stop(): void {
    this.isStopped = true;
  }

  private tick(): void {
    setTimeout(async () => {
      await axios.post(
        '/gemp-lotr-server/hall/update',
        {
          channelNumber: this.channelNumber,
          participantId: null,
        },
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          data: {
            channelNumber: this.channelNumber,
            participantId: null,
          },
        }
      );
      if (!this.isStopped) {
        this.tick();
      }
    }, 100);
  }
}

export const useClientHeartbeat = (channelNumber: number) =>
  useEffect(() => {
    const heartbeat = new HallHeartbeat(channelNumber);
    heartbeat.start();
    return () => {
      heartbeat.stop();
    };
  }, [channelNumber]);
