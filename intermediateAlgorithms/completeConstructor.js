const Person = function (firstAndLast) {
    let firstAndLast = firstAndLast
    // Cambia solo el código debajo de esta línea
    // Completa el método de abajo e implementa los otros de manera similar
    this.getFullName = () =>  {
        return firstAndLast;
    };
    this.getFirstName = () => {
        let names = firstAndLast.split(' ')
        return names[0]
    }
    this.getLastName = () => {
        let names = firstAndLast.split(' ')
        return names[1]
    }
    this.setFirstName = (name) => {
        let names = firstAndLast.split(' ')
        names[0] = name
    }
    this.setLastName = (name) => {
        let names = firstAndLast.split(' ')
        names[1] = name
    }
    this.setFullName = (name) => {
        firstAndLast = name
    }
  };

const bob = new Person('Bob Ross');
bob.getFullName();