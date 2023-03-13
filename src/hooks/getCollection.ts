import { databaseName } from '@/lib/entities/dbNames';
import { database } from '@/lib/firebase'
import { addDoc, collection, doc, getDoc, getDocs, orderBy, query, QueryConstraint, setDoc } from 'firebase/firestore'

export function getCollection<T>(dbName: databaseName): {
    list: (...queryConstraints: QueryConstraint[]) => Promise<T[]>;
    get: (id: string) => Promise<T>;
    add(props: Omit<T, 'id'>): Promise<string>;
} {
    async function list(...queryConstraints: QueryConstraint[]) {
        const q = query(collection(database, dbName), ...queryConstraints, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);

        const documents: T[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data()

            documents.push({
                id: doc.id,
                ...data,
            } as T)
        })

        return documents
    }

    async function get(id: string) {
        const docRef = doc(database, dbName, id);
        const docSnap = await getDoc(docRef);

        return {
            id: docSnap.id,
            ...docSnap.data()
        } as T
    }

    async function add(props: Omit<T, 'id'>) {
        const docRef = await addDoc(collection(database, dbName), { ...props, createdAt: new Date() });
        return docRef.id
    }

    return {
        list,
        get, 
        add,
    };
}
