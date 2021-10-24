import React, { FC, useEffect, useState } from 'react';
import { useCardStyles } from './Card.styles';

interface CardProps {
  title: string;
  content: string;
  href: string;
  auth: boolean;
}
export const Card: FC<CardProps> = ({ title, content, href, auth }) => {
  const { card } = useCardStyles();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    setIsAuthenticated(!auth);
  }, [isAuthenticated, auth]);

  return (
    <>
      <div className={card}>
        <a href={href}>
          <h2>{title} &rarr;</h2>
          <p>{content}</p>
        </a>
      </div>
    </>
  );
};
