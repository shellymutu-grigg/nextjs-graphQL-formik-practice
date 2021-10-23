import React, { FC } from 'react';
import { useCardStyles } from './Card.styles';

interface CardProps {
  title: string;
  content: string;
  href: string;
}
export const Card: FC<CardProps> = ({ title, content, href }) => {
  const { card } = useCardStyles();

  return (
    <>
      <a href={href} className={card}>
        <h2>{title} &rarr;</h2>
        <p>{content}</p>
      </a>
    </>
  );
};
