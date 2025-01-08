import { IonButton, IonButtons, IonHeader, IonIcon, IonTitle, IonToolbar } from '@ionic/react';
import Searchbar from './SearchBar'
import './ExploreContainer.css';
import { arrowBackOutline, chevronBackOutline } from 'ionicons/icons';
interface ContainerProps {
  name?: string;
  isbackBtn?:boolean
}

const PageHeader: React.FC<ContainerProps> = ({ name, isbackBtn }) => {
  return (
    <IonHeader>
        <IonToolbar className='ion-header-colr'>
          {isbackBtn ? (
            <IonButtons slot="start">
            <IonButton size="large" color="light"  routerLink="/" routerDirection="back">
                <IonIcon color="light" icon={ arrowBackOutline } />
            </IonButton>
        </IonButtons>)
          : <></>
          }
          <Searchbar name="name"></Searchbar>
          {/* <IonTitle class="ion-text-center" style={{marginTop:"10px"}} className='ion-header-colr'>Location Info</IonTitle> */}
        </IonToolbar>
      </IonHeader>
  );
};

export default PageHeader;
