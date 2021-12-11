function Cart() {
    const [productsArray, setProductsArray] = React.useState([
      { name: "hair dyer", qty: 0, price: 1800 },
      { name: "pocket watches", qty: 0, price: 1000 },
      { name: "shirts", qty: 0, price: 2400 },
      { name: "jeans", qty: 0, price: 2250 },
      { name: "court", qty: 0, price: 2000 },
      { name: "shoes", qty: 0, price: 3500 }
    ]);
    var [totalQty, setTotalQty] = React.useState(0);
    var [totalPrice, setTotalPrice] = React.useState(0);
    React.useEffect(() => {
      var totalQtyfromArray = productsArray.map((a) => a.qty);
      var totalPrice = productsArray.map((a) => a.qty * a.price);
      setTotalPrice(totalPrice.reduce((r, t) => r + t));
      setTotalQty(totalQtyfromArray.reduce((r, t) => r + t));
    }, [productsArray]);
  
    const handleClick = (index, qty) => {
      var chnageqty = [...productsArray];
      chnageqty[index] = { ...chnageqty[index], qty: qty };
      setProductsArray(chnageqty);
    };
    
    return (
      <div>
        <div>
          <h1>Cart</h1>
        </div>
        {productsArray?.map((item, i) => (
          <div key={i}>
            <h2>
              {item.name} =>Price:{item.price}{" "}Qty:{item.qty}
            </h2>
            <div>
              <button onClick={() => handleClick(i, item.qty+1)}>+</button>
              <button onClick={() => item.qty!=0?handleClick(i, item.qty-1):null}>-</button>
            </div>
          </div>
        ))}
        <div>
          <h2>Total item:{totalQty}</h2>
          <h2>total Amount:{totalPrice}</h2>
        </div>
      </div>
    );
  }
  ReactDOM.render(<Cart />, document.getElementById("root"));