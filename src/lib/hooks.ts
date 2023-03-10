import { database } from '@/lib/firebase'
import { collection, doc, getDoc, getDocs, query, QueryConstraint } from 'firebase/firestore'
import { databaseName } from './entities/dbNames';

export function getCollection<T>(dbName: databaseName): {
    list: (...queryConstraints: QueryConstraint[]) => Promise<T[]>;
    get: (id: string) => Promise<T>;
} {
    async function list(...queryConstraints: QueryConstraint[]) {
        const q = query(collection(database, dbName), ...queryConstraints);
        const querySnapshot = await getDocs(q);

        const documents: T[] = [];

        querySnapshot.forEach((doc) => {
            const data = doc.data()

            documents.push({
                id: doc.id,
                ...data,
                createdAt: data?.createdAt.toMillis() || 0,
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

    return {
        list,
        get
    };
}
