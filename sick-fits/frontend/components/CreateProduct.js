import useForm from '../lib/useForm';

export default function CreateProduct() {
  const { inputs, handleChange } = useForm({
    name: 'placeholder',
    price: '12345',
    description: 'this is a placeholder',
  });

  return (
    <form>
      <label htmlFor="name">
        Name
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={inputs.name}
          onChange={handleChange}
        />
      </label>
      <label htmlFor="price">
        Price
        <input
          type="number"
          id="price"
          name="price"
          placeholder="price"
          value={inputs.price}
          onChange={handleChange}
        />
      </label>
    </form>
  );
}
