import React from 'react';
import { IonSearchbar } from '@ionic/react';
import './ExploreContainer.css';

interface ContainerProps {
    name: string;
  }
  
  const Searchbar: React.FC<ContainerProps> = ({ name }) => {
    return (
      <IonSearchbar className="ion-searchbar" showClearButton="focus" placeholder="Placeholder"></IonSearchbar>
  );
}

export default Searchbar;