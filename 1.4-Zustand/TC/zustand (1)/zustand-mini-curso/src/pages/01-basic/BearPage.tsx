import { WhiteCard } from '../../components';
import {useBearStore} from "../../stores";


export const BearPage = () => {

  const blackBears = useBearStore((state) => state.blackBears);
  const increaseBlackBears = useBearStore((state) => state.increaseBlackBears);
  const polarBears = useBearStore((state) => state.polarBears);
  const increasePolarBears = useBearStore((state) => state.increasePolarBears);

  return (
    <>
      <h1>Contador de Osos</h1>
      <p>Manejo de estado simple de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">

        <BearCard color="Negros" increaseBears={increaseBlackBears} numberBears={blackBears}/>
        <BearCard color="Polares" increaseBears={increasePolarBears} numberBears={polarBears}/>

      </div>

    </>
  );
};

interface BearCardProps {
    color: string;
    increaseBears: (by: number) => void;
    numberBears: number;
}

export const BearCard = ({color,increaseBears,numberBears}: BearCardProps) => {
  return (
      <>
        <WhiteCard centered>
          <h2>Osos {color}</h2>

          <div className="flex flex-col md:flex-row">
            <button onClick={() => increaseBears(+1)}>+1</button>
            <span className="text-3xl mx-2 lg:mx-10"> {numberBears} </span>
            <button onClick={() => increaseBears(-1)}>-1</button>
          </div>

        </WhiteCard>
      </>
  );
};