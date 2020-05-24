import React from 'react';
import {
    IonContent,
    IonHeader,
    IonPage,
    IonTitle,
    IonToolbar,
    IonButton,
    IonIcon,
    IonButtons,
    IonList,
    IonItem,
    IonLabel,
    IonItemSliding,
    IonItemOption,
    IonItemOptions,
    IonListHeader,
} from '@ionic/react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { addOutline, ellipsisVertical } from 'ionicons/icons';
import { PieChart } from 'react-minimal-pie-chart';
import { mockPieData, mockGoals } from '../data/mockData';

const useStyles = makeStyles((theme) =>
    createStyles({
        todoList: {
            height: 250,
            maxHeight: 250,
            overflow: 'auto',
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
        listHeader: {
            width: '100%',
            position: 'fixed',
            bottom: 0,
        },
        pieChart: {
            width: '100%',
            maxHeight: '40vh',
            paddingTop: theme.spacing(2),
        },
    }),
);

const ChartViewPage: React.FC = () => {
    const classes = useStyles();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={addOutline} />
                        </IonButton>
                    </IonButtons>

                    <IonButtons slot="end">
                        <IonButton>
                            <IonIcon slot="icon-only" icon={ellipsisVertical} />
                        </IonButton>
                    </IonButtons>

                    <IonTitle slot="primary">Day Chart</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <PieChart data={mockPieData} label={({ dataEntry }) => dataEntry.title} className={classes.pieChart} />

                <div className={classes.todoList}>
                    <IonHeader>
                        <IonListHeader>Goals</IonListHeader>
                    </IonHeader>
                    <IonList>
                        {mockGoals.map((i) => (
                            <IonItemSliding>
                                <IonItem>
                                    <IonLabel>{i.title}</IonLabel>
                                </IonItem>
                                <IonItemOptions side="end">
                                    <IonItemOption color="primary" onClick={() => {}}>
                                        Finished
                                    </IonItemOption>
                                    <IonItemOption color="danger" onClick={() => {}}>
                                        Remove
                                    </IonItemOption>
                                </IonItemOptions>
                            </IonItemSliding>
                        ))}
                    </IonList>
                </div>
            </IonContent>
        </IonPage>
    );
};

export default ChartViewPage;
