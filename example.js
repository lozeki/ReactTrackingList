React - Add to cart


function addProduct(payload) {
  return { type: 'ADD_PRODUCT', payload };
}

const initialState = {
  products: [
    {
      id: 1,
      name: 'Avocado',
      price: 1.5,
      image: 'https://img.icons8.com/metro/26/000000/avocado.png',
      quantity: 0
    },
    {
      id: 6,
      name: 'Bread',
      price: 1,
      image: 'https://img.icons8.com/metro/26/000000/bread.png',
      quantity: 0
    },
    {
      id: 2,
      name: 'Milk',
      price: 1.8,
      image: 'https://img.icons8.com/metro/26/000000/milk-bottle.png',
      quantity: 0
    }
  ],
  cart: []
};

function rootReducer(state = initialState, action) {
  if (action.type == 'ADD_PRODUCT') {
    return {
      ...state,
      cart: [...state.cart, action.payload]
    };
  }
  return state;
}

const store = createStore(rootReducer);

const mapStateToProps = state => {
  return { products: state.products, cart: state.cart };
};

function mapDispatchToProps(dispatch) {
  return {
    addProduct: e => dispatch(addProduct(e))
  };
}

const CartItems = ({ cart }) => {
  return (
    <div>
      <i class="fa fa-shopping-cart" />
      <span class="badge badge-warning" id="lblCartCount">
        {cart.length}
      </span>
    </div>
  );
};

const ProductListItem = ({ product, addProduct }) => {
  return (
    <div className="product">
      <img className="product_img" src={product.image} />
      <p>{product.name}</p>
      <p style={{ marginLeft: 5, marginRight: 5 }} className="bold">${product.price}</p>
      <button className="add_card" onClick={() => addProduct(product)}>
        {' '}
        add to cart
      </button>
    </div>
  );
};

const Cart = connect(mapStateToProps)(CartItems);
const Products = ({ products = [], addProduct }) =>
  products.map((product, i) => {
    return <ProductListItem key={i} product={product} addProduct={addProduct}/>;
  });

const ProductList = connect(
  mapStateToProps,
  mapDispatchToProps
)(Products);

class App extends React.Component {
  render() {
    return (
      <div>
        <Cart />
        <ProductList />
      </div>
    );
  }
}
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
