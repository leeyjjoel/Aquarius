import Party from './party';
import { newRideMessage, isBeginNegotiationMessage } from './models';

const PING_INTERVAL = 3000;
export default class Rider extends Party {
  wantDrivers = false;

  onMainChatroomMessage(msg, driverAddr) {
    console.log('On rider msg', msg, this.wantDrivers, this);

    if (!this.wantDrivers) return;

    if (isBeginNegotiationMessage(msg)) {
      // TODO: negotiate
      console.log('Start negotiating with', msg, driverAddr);
    }
  }

  sendNewRidePing = () => {
    this.gridChatroom.send(newRideMessage('LOC1', 'LOC2'));
  };

  registerCommands(program) {
    super.registerCommands(program);

    program.command('ride').action(() => {
      console.log('Looking for drivers');
      this.wantDrivers = true;
      if (!this.pingTimer) {
        this.sendNewRidePing();
        this.pingTimer = setInterval(this.sendNewRidePing, PING_INTERVAL);
      }
    });

    program.command('cancel').action(() => {
      console.log('Stopped looking for driders');
      this.wantDrivers = false;
      this.pingTimer && clearInterval(this.pingTimer);
      this.pingTimer = null;
    });
  }
}
