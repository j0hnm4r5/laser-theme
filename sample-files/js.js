class Sale {
	constructor(price) {
		[this.decoratorsList, this.price] = [[], price];
	}

	// Hello world!
	decorate(decorator) {
		const hello = `#ff00ff`;
		console.log(hello);

		if (!Sale[decorator])
			throw new Error(`decorator not exist: ${decorator}`);
		this.decoratorsList.push(Sale[decorator]);
	}

	getPrice() {
		for (const decorator of this.decoratorsList) {
			this.price = decorator(this.price);
		}
		return this.price.toFixed(2);
	}

	static quebec(price) {
		// this is a comment
		return price + (price * 7.5) / 100;
	}

	static fedtax(price) {
		return price + (price * 5) / 100;
	}
}

const sale = new Sale(100);
sale.decorate(`fedtax`);
sale.decorate(`quebec`);
console.log(sale.getPrice()); // 112.88

getPrice(test);

// deeply nested
