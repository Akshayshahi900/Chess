import { Chess } from "chess.js";
import { WebSocket } from "ws";
import { MOVE, GAME_OVER, INIT_GAME } from "./messages";

export class Game {

    public player1: WebSocket;
    public player2: WebSocket;
    public board: Chess;
    private moveCount=0;
    private startTime: Date;

    constructor(player1: WebSocket, player2: WebSocket) {
        this.player1 = player1;
        this.player2 = player2;
        this.board = new Chess();
        this.startTime = new Date();
        
        this.player1.send(JSON.stringify({
            type:INIT_GAME,
            payload: {
                color:"white",
            }
        }))
        this.player2.send(JSON.stringify({
            type:INIT_GAME,
            payload: {
                color:"black",
            }
        }))
    }

    makeMove(socket: WebSocket, move: {
        from: string;
        to: string;
    }) {
        //validate the type of move using zod
        console.log(this.board.moves().length);
        console.log(this.board.board());

        if (this.moveCount % 2 === 0 && socket !== this.player1) {
            console.log("Early return 1");
            return
        }
        if (this.moveCount % 2 === 1 && socket !== this.player2) {
            console.log("Early return 2");
            return;
        }
        console.log("Did not early return ");
        try {
            this.board.move(move);
      
        } catch (e) {
            console.log(e);
            return;
        }

        //check if the game is over

        if(this.board.isGameOver()){
            this.player1.send(JSON.stringify({
                type:GAME_OVER,
                payload:{
                    winner:this.board.turn() === "w" ? "black" :"white"
                }
            }))
            return;
        }
         if(this.moveCount % 2 === 0){
             this.player2.send(JSON.stringify({
                 type:MOVE,
                 payload:move
             }))
         }
         else{
            this.player1.send(JSON.stringify({
                types:MOVE,
                payload:move,
            }))
         }
               this.moveCount++;
    }
}