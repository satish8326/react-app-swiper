import { IonButton, IonCard, IonCardContent, IonCardSubtitle, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonPage, IonRow, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import PageHeader from '../components/PageHeader';
import { useParams } from 'react-router';
import { ProductStore } from '../data/ProductStore';
import { useEffect, useState } from 'react';
import styles from './Home.module.css';
import { cartOutline } from 'ionicons/icons';

const CategoryProducts: React.FC = () => {
    const params:any = useParams();
    const products = ProductStore.useState((s: { products: any; }) => s.products);
    const [ searchResults, setsearchResults ] = useState([]);
    const [ category, setCategory ]:any = useState({});
    useEffect(() => {
        const categorySlug = params.slug;
        const tempCategory = products.filter((p: { slug: any; }) => p.slug === categorySlug)[0];
        setCategory(tempCategory);
        setsearchResults(tempCategory.products);
        console.log(searchResults);
    }, [ params.slug ]);
  return (
    <IonPage>
      <PageHeader isbackBtn={true}></PageHeader>
      <IonContent fullscreen>
      <IonGrid>

<IonRow className="ion-text-center">
</IonRow>

<IonRow>
    { searchResults && searchResults.map((product:any, index) => {
        return (
            <IonCol size="6"  key={ `category_product_list_${ index }`}>
                <IonCard  routerLink={ `/category/${ category.slug }/${ product.id }`} className={ styles.categoryCard }>
                    <img src={ product.image } alt="product pic" />
                    <p className="ion-text-wrap">{ product.name }</p>
                    <IonCardContent className={ styles.categoryCardContentProduct }>
                    <div className={ styles.productPrice }>
                        <IonButton style={{ width: "100%" }} color="light">
                            { product.price }
                        </IonButton>
                        <IonButton color="dark">
                            <IonIcon icon={ cartOutline } />
                        </IonButton>

                        
                    </div>
                    </IonCardContent>
                </IonCard>
            </IonCol>
        )
        // if ((index <= amountLoaded) && product.image) {
        //     return (
        //         <ProductCard key={ `category_product_${ index }`} product={ product } index={ index } cartRef={ cartRef } category={ category } />
        //     );
        // }
    })}
</IonRow>
</IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default CategoryProducts;
