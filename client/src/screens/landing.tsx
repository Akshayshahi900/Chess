import { useNavigate } from "react-router-dom";

export const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="flex gap-14 p-4">
         <div>
          <img src="/chess.png" width="400px"className="my-12"/>
         </div>
        <div className="flex flex-col font-bold my-12">
            <h3 className="text-white text-4xl font-bold m-4">Play Chess Online on the #2 Site!</h3>
            <button onClick={() => navigate('/game')} className="bg-green-600 p-4 text-white border-2 rounded-2xl text-center m-4">Play Online</button>
            <button className="bg-green-600 p-4 text-white border-2 rounded-2xl text-center m-2">PlayBots</button>
        </div>
        </div >
    )
}