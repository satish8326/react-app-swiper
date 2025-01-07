import { IonContent, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonText } from '@ionic/react';
import PageHeader from '../components/PageHeader';
import React, { useRef, useEffect } from 'react';
import  { SwiperData, SwiperData1  }   from '../components/SwiperData';
import './Home.css';
const Home: React.FC = () => {
  //const products:any = ProductStore.useState(s => s.products);
	//console.log(products);
    const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      console.log('Swiper instance:', swiperRef.current);
    }
  }, []);
    const products =  [
        { id: 1, name: 'Product 1', imageUrl: 'https://media.istockphoto.com/id/917275566/vector/array-with-dynamic-particles-3d-abstract-background.jpg?s=1024x1024&w=is&k=20&c=zQ0Wd--M0mTv9wKx3XZhJGTl0Vhv52LlynMBQ6wB7uY=' },
        { id: 2, name: 'Product 2', imageUrl: 'https://media.istockphoto.com/id/917275566/vector/array-with-dynamic-particles-3d-abstract-background.jpg?s=1024x1024&w=is&k=20&c=zQ0Wd--M0mTv9wKx3XZhJGTl0Vhv52LlynMBQ6wB7uY=' },
        { id: 3, name: 'Product 3', imageUrl: 'https://media.istockphoto.com/id/917275566/vector/array-with-dynamic-particles-3d-abstract-background.jpg?s=1024x1024&w=is&k=20&c=zQ0Wd--M0mTv9wKx3XZhJGTl0Vhv52LlynMBQ6wB7uY=' },
        { id: 4, name: 'Product 4', imageUrl: 'https://media.istockphoto.com/id/917275566/vector/array-with-dynamic-particles-3d-abstract-background.jpg?s=1024x1024&w=is&k=20&c=zQ0Wd--M0mTv9wKx3XZhJGTl0Vhv52LlynMBQ6wB7uY=' },
      ];
  return (
    <IonPage>
      <PageHeader name="Home"></PageHeader>
      <IonContent fullscreen>
      <SwiperData1 items={products}></SwiperData1>
      <IonCard>
      <SwiperData items={products} isImages={true}></SwiperData>
      </IonCard>
      <IonGrid>
      <IonRow>
        {products.map((product) => (
          <IonCol size="6" size-md="3" key={product.id}>
            <IonCard>
              <IonImg src={product.imageUrl} />
              <IonCardContent>
                <IonText>{product.name}</IonText>
              </IonCardContent>
            </IonCard>
          </IonCol>
        ))}
      </IonRow>
    </IonGrid>
    <SwiperData items={products} isImages={false}></SwiperData>
      </IonContent>
    </IonPage>
  );
};

export default Home;