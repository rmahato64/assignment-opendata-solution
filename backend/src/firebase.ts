import { DocumentReference, Firestore } from '@google-cloud/firestore';
import { getSensorData } from './sensor';

class Data {
    date: string;
    sensor1: number;
    sensor2: number;
    sensor3: number;
    sensor4: number;
    addedOn?: string;
}

const {
    PROJECT_ID,
    GOOGLE_APPLICATION_CREDENTIALS,
} = process.env;

const firestore = new Firestore({
    projectId: PROJECT_ID,
    keyFilename: GOOGLE_APPLICATION_CREDENTIALS,
});

const TABLE_NAME = 'SensorData';
const collection = firestore.collection(TABLE_NAME);

export function getAll() {
    return collection.get()
        .then((snapshot: any) => {
            let data = [];
            snapshot.forEach((doc) => data.push(doc.data()));
            return data;
        })
};

export async function collectSensorData() {
    const data: Data = await getSensorData() as Data;
    data.addedOn = new Date().toUTCString();
    return firestore.collection('SensorData')
        .add(data);
};
