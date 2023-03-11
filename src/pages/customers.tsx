import { CardGrid } from '@/components/cardGrid'
import { CustomerCard } from '@/components/customerCard'
import { Layout } from '@/components/layout'
import { LinkAsButton } from '@/components/linkAsButton'
import { NotFoundListSearch } from '@/components/notFoundListSearch'
import { SearchBar } from '@/components/searchBar'
import { ICustomer } from '@/lib/entities/customer'
import { getCollection } from '@/lib/hooks'
import { GetServerSideProps } from 'next'
import { useCallback, useState } from 'react'

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
