import { CardGrid } from '@/components/cards/cardGrid'
import { CustomerCard } from '@/components/cards/customerCard'
import { Layout } from '@/components/layout/layout'
import { LinkAsButton } from '@/components/utility/linkAsButton'
import { NotFoundListSearch } from '@/components/layout/notFoundListSearch'
import { ICustomer } from '@/lib/entities/customer'
import { GetServerSideProps } from 'next'
import { useCallback, useState } from 'react'
import { getCollection } from '@/hooks/getCollection'
import { SearchBar } from '@/components/layout/searchBar'

interface PageProps {
  customers: ICustomer[]
}

export async function getServerSideProps(context: GetServerSideProps<PageProps>) {
  const { list } = getCollection<ICustomer>("customers");

  const customers = await list();
  return {
    props: { customers },
  };
}

function filterFunction(c: ICustomer, searchValue: string) {
  return c.name.toLocaleLowerCase().startsWith(searchValue.toLocaleLowerCase());
}

export default function Customers({ customers }: PageProps) {
  const [searchValue, setSearchValue] = useState("");

  const filteredCustomersCallBack = useCallback(() => {
    return customers.filter(c => filterFunction(c, searchValue))
      .map(data => (
        <CustomerCard key={data.id} {...data} />
      ));
  }, [customers, searchValue])

  const filteredCustomers = filteredCustomersCallBack();

  return (
    <Layout>
      <SearchBar searchFunction={setSearchValue} />
      <div className='sm:hidden p-4 pb-0 flex items-center'>
        <LinkAsButton title="Novo cliente" href='/new-customer' />
      </div>
      {filteredCustomers.length > 0 ? (
        <CardGrid>
          {filteredCustomers}
        </CardGrid>
      ) : <NotFoundListSearch />}
    </Layout>
  )
}
