import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PageHeader from '../components/PageHeader';
//import { ProductStore } from '../data/ProductStore';
import './Tab1.css';

const Tab1: React.FC = () => {
  //const products:any = ProductStore.useState(s => s.products);
	//console.log(products);
  return (
    <IonPage>
      <PageHeader name="Products"></PageHeader>
      <IonContent fullscreen>
        <ExploreContainer name="Tab 1 page" />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
