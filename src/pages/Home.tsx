import { IonContent, IonHeader, IonPage, IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonImg, IonText, IonCardSubtitle } from '@ionic/react';
import PageHeader from '../components/PageHeader';
import React, { useRef, useEffect } from 'react';
import  { SwiperData, SwiperData1  }   from '../components/SwiperData';
import styles from './Home.module.css';
import { ProductStore } from '../data/ProductStore';

const Home: React.FC = () => {
  const products = ProductStore.useState((s: { products: any; }) => s.products);
  // const swiperRef = useRef(null);
  // useEffect(() => {
  //   if (swiperRef.current) {
  //     console.log('Swiper instance:', swiperRef.current);
  //   }
  // }, []);
  //   const products =  [
  //       { id: 1, name: 'Product 1', imageUrl: 'https://media.istockphoto.com/id/917275566/vector/array-with-dynamic-particles-3d-abstract-background.jpg?s=1024x1024&w=is&k=20&c=zQ0Wd--M0mTv9wKx3XZhJGTl0Vhv52LlynMBQ6wB7uY=' },
  //       { id: 2, name: 'Product 2', imageUrl: 'https://media.istockphoto.com/id/917275566/vector/array-with-dynamic-particles-3d-abstract-background.jpg?s=1024x1024&w=is&k=20&c=zQ0Wd--M0mTv9wKx3XZhJGTl0Vhv52LlynMBQ6wB7uY=' },
  //       { id: 3, name: 'Product 3', imageUrl: 'https://media.istockphoto.com/id/917275566/vector/array-with-dynamic-particles-3d-abstract-background.jpg?s=1024x1024&w=is&k=20&c=zQ0Wd--M0mTv9wKx3XZhJGTl0Vhv52LlynMBQ6wB7uY=' },
  //       { id: 4, name: 'Product 4', imageUrl: 'https://media.istockphoto.com/id/917275566/vector/array-with-dynamic-particles-3d-abstract-background.jpg?s=1024x1024&w=is&k=20&c=zQ0Wd--M0mTv9wKx3XZhJGTl0Vhv52LlynMBQ6wB7uY=' },
  //     ];
  return (
    <IonPage>
      <PageHeader name="Home"></PageHeader>
      <IonContent fullscreen>
      <IonGrid>
					<IonRow>
						{ products.map((category:any, index:number) => {

							return (
								<IonCol size="6" key={ `category_list_${ index }`}>
									<IonCard routerLink={ `/category/${ category.slug }`} className={ styles.categoryCard }>
										<img src={ category.cover } />
										<IonCardContent className={ styles.categoryCardContent }>
											<IonCardSubtitle>{ category.name }</IonCardSubtitle>
										</IonCardContent>
									</IonCard>
								</IonCol>
							)
						})}
					</IonRow>
				</IonGrid>
        <SwiperData items={products} isImages={true}></SwiperData>
      {/* <SwiperData1 items={products}></SwiperData1>
      <IonCard>
     
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
    <SwiperData items={products} isImages={false}></SwiperData> */}
      </IonContent>
    </IonPage>
  );
};

export default Home;