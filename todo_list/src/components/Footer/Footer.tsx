import { Button } from '../Buttons/ButtonAdd';

interface IProps {
  deleteAll: () => void;
  completeAll: () => void;
  ifShow: boolean;
}

export function Footer({ ifShow, deleteAll, completeAll }: IProps) {
  return (
    <div
      className={
        ifShow
          ? 'input-group mb-3 m-auto w-50 my-5 justify-content-around'
          : 'd-none'
      }
    >
      <Button text='Delete all' onClick={deleteAll} />
      <Button text='Complete all' onClick={completeAll} />
    </div>
  );
}
