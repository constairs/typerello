import React from 'react';

interface IMainProps {
  name: string,
};

export class Main extends React.Component<IMainProps, Object> {
  state = {
    groups = [
      {
        title: 'group1',
        id: 'gr1',
        cards: [
          {
            id: '1',
            title: 'Card1',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora!',
            importancy: 'default',
            color: '#ffffff',
            disabled: false
          },
          {
            id: '2',
            title: 'Card2',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora!',
            importancy: 'default',
            color: '#ffffff',
            disabled: false
          },
          {
            id: '3',
            title: 'Card3',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora!',
            importancy: 'default',
            color: '#ffffff',
            disabled: false
          },
          {
            id: '4',
            title: 'Card4',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora!',
            importancy: 'default',
            color: '#ffffff',
            disabled: false
          }
        ]
      },
      {
        title: 'group2',
        id: 'gr2',
        cards: [
          {
            id: '11',
            title: 'Card5',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora!',
            importancy: 'default',
            color: '#ffffff',
            disabled: false
          },
          {
            id: '22',
            title: 'Card6',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora!',
            importancy: 'default',
            color: '#ffffff',
            disabled: false
          },
          {
            id: '33',
            title: 'Card7',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, tempora!',
            importancy: 'default',
            color: '#ffffff',
            disabled: false
          }
        ]
      },
      {
        title: 'group3',
        id: 'gr3',
        cards: []
      }
    ],
  };
  
  render() {
    return (
      <div>
        <h2>hhh</h2>
      </div>
    );
  }
}
