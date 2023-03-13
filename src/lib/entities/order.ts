import { FieldValue } from "firebase/firestore";

type lensesAndFrameInforationsType = {
    name: string;
    value: number;
}

type measure = {
    rightEye: {
        dnp: number;
        height: number;
    };
    leftEye: {
        dnp: number;
        height: number;
    }
}

type orderAppointmentInformation = {
    rightEye: {
        esf?: number;
        cil?: number;
        axle?: number;
        add?: number;
    };
    leftEye: {
        esf?: number;
        cil?: number;
        axle?: number;
        add?: number;
    }
}


type paymentAndTotalInformation = {
    total: number;
    disccount: number;
    remains: number;
    received: number;
    paid: boolean;
}

type customerReference = {
    storeRef: string;
    customerRef: string;
    customerName: string;
}

type Payments = {
    amount: number;
    type: 'creditCard' | 'money' | 'pix';
}

export interface IOrder {
    id?: string;
    lenses: lensesAndFrameInforationsType,
    frame: lensesAndFrameInforationsType;
    measurements: measure;
    appointmentDetails: orderAppointmentInformation;
    paymentAndTotalInformation: paymentAndTotalInformation;
    payments: Payments[];
    customerReference: customerReference;
    serviceOrder: number;
    feedback: boolean;
    delivered: boolean;
    observation?: string;
    createdAt: number;
};
