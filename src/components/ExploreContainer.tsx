import './ExploreContainer.css';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  return (
    <div className="container">
      <IonCard color="primary">
        <img alt="Silhouette of mountains" src="https://media.istockphoto.com/id/1382375381/photo/woman-suffering-from-foot-pain-at-home-closeup.jpg?s=612x612&w=0&k=20&c=i9yLzyeicCkvSfhumuKEqWHm9VEXuLeMw1dkBnmtR_4=" />
        <IonCardHeader>
          <IonCardTitle>Swing Phase Inconsistency</IonCardTitle>
          <IonCardSubtitle>The foot tends to be toe down and slightly inverted as the leg is advancing through the air</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Ankle position is weak and not reliable</IonCardContent>
      </IonCard>

      <IonCard color="secondary">
      <img alt="Silhouette of mountains" src="https://images.everydayhealth.com/images/foot-health/common-foot-problems-plantar-fasciitis-1440x810.jpg?w=720" />
        <IonCardHeader>
          <IonCardTitle>Excess Plantarflexion/Toe Walking</IonCardTitle>
          <IonCardSubtitle>
            <ul>
              <li>Bears weight primarily on forefoot</li>	
              <li>Toes point downward and heel does not touch ground when walking</li>	
              <li>Excess muscle tone, range of motion, or habit results in toe walking</li>
            </ul>
          </IonCardSubtitle>
        </IonCardHeader>
        {/* <IonCardContent>Card Content</IonCardContent> */}
      </IonCard>

      <IonCard color="tertiary">
        <IonCardHeader>
        <img alt="Silhouette of mountains" src="https://media.istockphoto.com/id/1382375381/photo/woman-suffering-from-foot-pain-at-home-closeup.jpg?s=612x612&w=0&k=20&c=i9yLzyeicCkvSfhumuKEqWHm9VEXuLeMw1dkBnmtR_4=" />
          <IonCardTitle>Swing Phase Inconsistency</IonCardTitle>
          <IonCardSubtitle>The foot tends to be toe down and slightly inverted as the leg is advancing through the air</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Ankle position is weak and not reliable</IonCardContent>
      </IonCard>

      <IonCard color="success">
      <img alt="Silhouette of mountains" src="https://images.everydayhealth.com/images/foot-health/common-foot-problems-plantar-fasciitis-1440x810.jpg?w=720" />
        <IonCardHeader>
          <IonCardTitle>Excess Plantarflexion/Toe Walking</IonCardTitle>
          <IonCardSubtitle>
            <ul>
              <li>Bears weight primarily on forefoot</li>	
              <li>Toes point downward and heel does not touch ground when walking</li>	
              <li>Excess muscle tone, range of motion, or habit results in toe walking</li>
            </ul>
          </IonCardSubtitle>
        </IonCardHeader>
        {/* <IonCardContent>Card Content</IonCardContent> */}
      </IonCard>

      <IonCard color="warning">
        <IonCardHeader>
        <img alt="Silhouette of mountains" src="https://media.istockphoto.com/id/1382375381/photo/woman-suffering-from-foot-pain-at-home-closeup.jpg?s=612x612&w=0&k=20&c=i9yLzyeicCkvSfhumuKEqWHm9VEXuLeMw1dkBnmtR_4=" />
          <IonCardTitle>Swing Phase Inconsistency</IonCardTitle>
          <IonCardSubtitle>The foot tends to be toe down and slightly inverted as the leg is advancing through the air</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Ankle position is weak and not reliable</IonCardContent>
      </IonCard>

      <IonCard color="danger">
      <img alt="Silhouette of mountains" src="https://images.everydayhealth.com/images/foot-health/common-foot-problems-plantar-fasciitis-1440x810.jpg?w=720" />
        <IonCardHeader>
          <IonCardTitle>Excess Plantarflexion/Toe Walking</IonCardTitle>
          <IonCardSubtitle>
            <ul>
              <li>Bears weight primarily on forefoot</li>	
              <li>Toes point downward and heel does not touch ground when walking</li>	
              <li>Excess muscle tone, range of motion, or habit results in toe walking</li>
            </ul>
          </IonCardSubtitle>
        </IonCardHeader>
        {/* <IonCardContent>Card Content</IonCardContent> */}
      </IonCard>

      <IonCard color="light">
      <IonCardHeader>
        <img alt="Silhouette of mountains" src="https://media.istockphoto.com/id/1382375381/photo/woman-suffering-from-foot-pain-at-home-closeup.jpg?s=612x612&w=0&k=20&c=i9yLzyeicCkvSfhumuKEqWHm9VEXuLeMw1dkBnmtR_4=" />
          <IonCardTitle>Swing Phase Inconsistency</IonCardTitle>
          <IonCardSubtitle>The foot tends to be toe down and slightly inverted as the leg is advancing through the air</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Ankle position is weak and not reliable</IonCardContent>
      </IonCard>

      <IonCard color="medium">
      <img alt="Silhouette of mountains" src="https://images.everydayhealth.com/images/foot-health/common-foot-problems-plantar-fasciitis-1440x810.jpg?w=720" />
        <IonCardHeader>
          <IonCardTitle>Excess Plantarflexion/Toe Walking</IonCardTitle>
          <IonCardSubtitle>
            <ul>
              <li>Bears weight primarily on forefoot</li>	
              <li>Toes point downward and heel does not touch ground when walking</li>	
              <li>Excess muscle tone, range of motion, or habit results in toe walking</li>
            </ul>
          </IonCardSubtitle>
        </IonCardHeader>
        {/* <IonCardContent>Card Content</IonCardContent> */}
      </IonCard>

      <IonCard color="dark">
      <IonCardHeader>
        <img alt="Silhouette of mountains" src="https://media.istockphoto.com/id/1382375381/photo/woman-suffering-from-foot-pain-at-home-closeup.jpg?s=612x612&w=0&k=20&c=i9yLzyeicCkvSfhumuKEqWHm9VEXuLeMw1dkBnmtR_4=" />
          <IonCardTitle>Swing Phase Inconsistency</IonCardTitle>
          <IonCardSubtitle>The foot tends to be toe down and slightly inverted as the leg is advancing through the air</IonCardSubtitle>
        </IonCardHeader>
        <IonCardContent>Ankle position is weak and not reliable</IonCardContent>
      </IonCard>
    </div>
  );
};

export default ExploreContainer;
