const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};


const customerInfo = (order) => {
  console.log(`Olá ${Object.values(order.order.delivery)[0]}, entrega para: ${order['name']}, Telefone: ${order['phoneNumber']}, ${Object.values(order['address'])[0]}, Nº: ${Object.values(order['address'])[1]}, AP: ${Object.values(order['address'])[2]}`);

}

customerInfo(order);

const orderModifier = (order) => {
  order.name = 'Luiz Silva';
  const mussarelaPizza = {
    mussarela: {
      amount: 1,
      price: 25
    }
  };
  const calabrezaPizza = {
    calabreza: {
      amount: 1,
      price: 25
    }
  };
  Object.assign(order.order.pizza, mussarelaPizza, calabrezaPizza);
  console.log(`Olá, ${order.name}, o total do seu pedido de ${Object.keys(order.order.pizza)[2]}, ${Object.keys(order.order.pizza)[3]} e  é R$ ${(order.order.pizza.mussarela.price) + order.order.pizza.calabreza.price}`);
}

orderModifier(order);
