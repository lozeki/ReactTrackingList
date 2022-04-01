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
MILLYARD MORSEL: The famous bronze “Mill Girl” sculpture in Manchester’s millyard was erected
in 1988 and stands ten feet tall. It was sculpted by Antoinette Schultze, an American sculptor who has completed
several public art commissions. The inscription reads: “She stands here, for thousands of 19th century working
women: Industrial revolutionaries who broke with the past to earn their living, making history and creating the
future. In 1880 one third of Manchestser’s population, 3385 women, worked in the textile mills of the
Amoskeag Manufacturing Company, situated below along the banks of the Merrimack River.”
”I started my career at DEKA nearly 3 years ago,
and was excited to explore all of the opportunities
DEKA had to offer. Looking back, I couldn’t
have asked for a better experience right out of
school. I’ve been able to experience and learn
so much in a relatively short period of time.
Project Neo kicked off my career, where I initially
worked as a Test Engineer. About a year later, I was
approached with an opportunity to help out on Neo’s
Project Management team as a Project Coordinator. This
role allowed me to merge my technical understanding
with communication and organizational skills.
I always had a sneaking interest in Regulatory
Affairs after taking some classes on the subject. After
about 1.5 years of working in Project Management,
I transitioned over to Regulatory working with the
Nexpresso team. In Regulatory, I work closely with folks
in all disciplines to prepare submissions to the FDA.
I’m utilizing skills from my previous roles, while learning
more about how the regulatory space functions.
I wouldn’t have the breadth of experience that I
do without the support of the wonderful people
I’ve worked with. They have pushed me outside of
my comfort zone, listened to my aspirations, and
worked with me to achieve my goals. I’m looking
forward to where DEKA takes me next!”
We talked to David Simm about this fascinating project:
Describe your project in one sentence:
Developing an automated cell delivery system (for the
cells expanded by Mimic!) to deliver a solution targeted
at delaying or preventing end stage kidney disease
