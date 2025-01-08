import React from 'react';
import { IonCard, IonCardContent, IonImg, IonText, IonAvatar } from '@ionic/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import './Swiperstyls.css';
import 'swiper/css';

interface Item {
    id: number;
    name: string;
    imageUrl: string;
  }
interface ContainerProps {
    items: Item[];
    isImages?:boolean;
  }
  
export const SwiperData: React.FC<ContainerProps> = ({ items, isImages }) => {
    return (
        <>
            {isImages ? (
                <div className="container">
                    <Swiper
                  pagination={{ clickable: true }}
                  onSwiper={(swiper) => console.log(swiper)}
                  onSlideChange={() => console.log('slide change')}
                  slidesPerView={1}>
                  {items.map((Item:any) => (
                    <SwiperSlide style={{ width: '100%', height: '100%' }}>
                      
                        <IonImg src={Item.cover} />
                        {/* <IonCardContent style={{  backgroundColor: 'skyblue', color: '#FFF' }}>
                          <IonText>{Item.name}</IonText>
                        </IonCardContent> */}
                    </SwiperSlide>
                  ))}
                  </Swiper>
                </div>
            ) : (
        <Swiper
            spaceBetween={10} // Space between the slides (items)
            slidesPerView="auto" // Automatically adjusts number of slides per view
            loop={false} // Loop the slides
            freeMode={true} // Allows free scrolling of slides (not snapping to a fixed position)
            style={{ padding: '10px' }}>
                {/* Example Slides (items) */}
                <SwiperSlide style={{ width: '150px', height: '200px', backgroundColor: 'skyblue' }}>
                    <p>Item 1</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '150px', height: '200px', backgroundColor: 'lightgreen' }}>
                    <p>Item 2</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '150px', height: '200px', backgroundColor: 'lightcoral' }}>
                    <p>Item 3</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '150px', height: '200px', backgroundColor: 'lightgoldenrodyellow' }}>
                    <p>Item 4</p>
                </SwiperSlide>
                <SwiperSlide style={{ width: '150px', height: '200px', backgroundColor: 'lightpink' }}>
                    <p>Item 5</p>
                </SwiperSlide>
                {/* More items can be added here */}

            </Swiper>
             )}
            </>
  );
}
export const SwiperData1: React.FC<ContainerProps> = ({ items }) => {
    return (
        <><div style={{ textAlign: 'center', marginTop: '10px' }}>
            
        <Swiper
            spaceBetween={10} // Space between the slides (items)
            slidesPerView="auto" // Automatically adjusts number of slides per view
            loop={false} // Loop the slides
        >
                {/* Example Slides (items) */}
                {items.map((Item, index) => (
        <SwiperSlide key={index} style={{ width: '100px', height: '100px', textAlign: 'center' }}>
          <IonAvatar style={{ display: 'inline-block' }}>
            <img src={Item.imageUrl} alt={Item.name} />
          </IonAvatar>
          <IonText>
            <p>{Item.name}</p>
          </IonText>
        </SwiperSlide>
      ))}
                {/* More items can be added here */}

            </Swiper>
            </div></>
             
  );
}