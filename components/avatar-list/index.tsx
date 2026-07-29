import { FC } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';

const AvatarList: FC<{ sizeClass: string }> = ({ sizeClass }) => {
  return (
    <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
      <Avatar className={`${sizeClass}`}>
        <AvatarImage className={`${sizeClass}`} src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className={`${sizeClass}`}>CN</AvatarFallback>
      </Avatar>
      <Avatar className={`${sizeClass}`}>
        <AvatarImage className={`${sizeClass}`} src="https://github.com/leerob.png" alt="@leerob" />
        <AvatarFallback className={`${sizeClass}`}>LR</AvatarFallback>
      </Avatar>
      <Avatar className={`${sizeClass}`}>
        <AvatarImage
          className={`${sizeClass}`}
          src="https://github.com/evilrabbit.png"
          alt="@evilrabbit"
        />
        <AvatarFallback className={`${sizeClass}`}>ER</AvatarFallback>
      </Avatar>
      <Avatar className={`${sizeClass}`}>
        <AvatarImage
          className={`${sizeClass}`}
          src="https://github.com/pacocoursey.png"
          alt="@paco"
        />
        <AvatarFallback className={`${sizeClass}`}>PC</AvatarFallback>
      </Avatar>
    </div>
  );
};

export default AvatarList;
