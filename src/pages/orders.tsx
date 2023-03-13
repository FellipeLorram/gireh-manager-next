import { GetServerSideProps } from 'next'
import { useCallback, useState } from 'react'
import { Button } from '@/components/buttons/button'
import { CardGrid } from '@/components/cards/cardGrid'
import { OrderCard } from '@/components/cards/orderCard'
import { Layout } from '@/components/layout/layout'
import { NotFoundListSearch } from '@/components/layout/notFoundListSearch'
import { SearchBar } from '@/components/layout/searchBar'
import { IOrder } from '@/lib/entities/order'
import { getCollection } from '@/hooks/getCollection'

interface PageProps {
  orders: IOrder[]
}

export async function getServerSideProps(context: GetServerSideProps<PageProps>) {
  const { list } = getCollection<IOrder>("orders");

  const orders = await list();
  return {
    props: { orders },
  };
}

function filterFunction(c: IOrder, searchValue: string) {
  const stringfiedNumber = c.serviceOrder.toString();
  return stringfiedNumber.startsWith(searchValue);
}

export default function Orders({ orders }: PageProps) {
  const [searchValue, setSearchValue] = useState("");

  const filteredOrdersCallBack = useCallback(() => {
    return orders.filter(c => filterFunction(c, searchValue))
      .map(({
        createdAt,
        paymentAndTotalInformation,
        serviceOrder,
        id,
        customerReference,
        delivered
      }) => (
        <OrderCard
          key={id}
          createdAt={createdAt}
          name={customerReference.customerName}
          orderDeliverSituation={delivered}
          orderPaymentSituation={paymentAndTotalInformation.paid}
          orderTotal={paymentAndTotalInformation.total}
          serviceOrder={serviceOrder}
        />
      ));
  }, [orders, searchValue])

  const filteredOrders = filteredOrdersCallBack();

  return (
    <Layout>
      <SearchBar searchFunction={setSearchValue} />
      <div className='sm:hidden p-4 pb-0 flex items-center'>
        <Button title="Nova venda" />
      </div>
      {filteredOrders.length > 0 ? (
        <CardGrid>
          {filteredOrders}
        </CardGrid>
      ) : <NotFoundListSearch />}
    </Layout>
  )
}
