import { WebSocketServer } from 'ws';
import { GameManager } from './GameManager';

const wss = new WebSocketServer({ port: 8080 });

const gameManager = new GameManager();
// Server check
wss.on('listening', () => {
  console.log('✅ WebSocket server is running on ws://localhost:8080');
});

wss.on('connection', function connection(ws) {
  gameManager.addUser(ws);
  ws.on("disconnect", ()=>{ gameManager.removeUser(ws);
  })

 
});