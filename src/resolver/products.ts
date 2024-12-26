import { Product } from '../models/product';

export interface Args {
  id: string;
  name: string;
  price: number;
}

export const ProductsResolver = {
  Query: {
    products: async () => {
      try {
        const products = await Product.find({});
        if (!products) throw new Error('No products found');
        return {
          success: true,
          total: products.length,
          products: products,
        };
      } catch (err) {
        console.error(err);
      }
    },
    product: async (_: any, args: Args) => {
      try {
        if (!args.id) throw new Error('No ID provided');
        const product = await Product.findById(args.id);
        if (!product) throw new Error('Product not found');
        return product;
      } catch (err) {
        throw err;
      }
    },
  },
  Mutation: {
    addProduct: async (_: any, args: Args) => {
      try {
        const product = await Product.findOne({ name: args.name });
        if (product) throw new Error('Product already exists');
        const newProduct = Product.create({
          name: args.name,
          price: args.price,
        });
        return newProduct;
      } catch (err) {
        throw err;
      }
    },
    updateProduct: async (_: any, args: Args) => {
      try {
        const id = args.id;
        if (!id) throw new Error('No ID provided');

        const product = await Product.findById(args.id);
        if (!product) throw new Error('Product not found');

        const updateProduct = await Product.findByIdAndUpdate(id, { ...args });
        return updateProduct;
      } catch (err) {
        throw err;
      }
    },
    deleteProduct: async (_: any, args: Args) => {
      try {
        const id = args.id;
        if (!id) throw new Error('No ID provided');
        const product = await Product.findById(id);
        if (!product) throw new Error('Product not found');
        const deleteProduct = await Product.findByIdAndDelete(id);
        return {
          success: true,
          message: 'Product deleted successfully',
          id: id,
        };
      } catch (err) {}
    },
  },
};
