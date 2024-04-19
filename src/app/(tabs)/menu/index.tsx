import { FlatList } from 'react-native';
import ProductListItem from '@/components/ProductListItem';
import products from '@assets/data/products';

export default function TabOneScreen() {
  return (
    <FlatList
      data={products}
      renderItem={({ item }) => <ProductListItem product={item} />}
      numColumns={2}
    />
  );
}

