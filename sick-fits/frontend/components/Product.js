import ItemStyles from './styles/ItemStyles';

export default function Product(product) {
  return (
    <ItemStyles>
      <img
        src={product.product?.photo?.image?.publicUrlTransformed}
        alt={product.product.name}
      />
    </ItemStyles>
  );
}
