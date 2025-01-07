import { IonHeader, IonTitle, IonToolbar } from '@ionic/react';
import Searchbar from './SearchBar'
import './ExploreContainer.css';
interface ContainerProps {
  name: string;
}

const PageHeader: React.FC<ContainerProps> = ({ name }) => {
  return (
    <IonHeader>
        <IonToolbar>
          <Searchbar name="name"></Searchbar>
          {/* <IonTitle class="ion-text-center" style={{marginTop:"10px"}} className='ion-header-colr'>Location Info</IonTitle> */}
        </IonToolbar>
      </IonHeader>
  );
};

export default PageHeader;
