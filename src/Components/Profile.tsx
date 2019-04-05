import React from 'react';

interface IProfileProps {
  name: string,
  tjj: Object,
};

export const Profile: FC.React<IProfileProps> = ({ name, tjj }) => (
  <div>
    <p>{name}</p>
    <p>{tjj}</p>
  </div>
);
