import React from 'react';
import Card from './Card';

interface IRobot {
  id: string;
  name: string;
  email: string;
}

type CardListProps = {
  robots: IRobot[];
}

const CardList = ({ robots }: CardListProps) => {
  return (
    <div>
      {
        robots.map((user, i) => {
          return (
            <Card
              key={i}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
              />
          );
        })
      }
    </div>
  );
}

export default CardList;