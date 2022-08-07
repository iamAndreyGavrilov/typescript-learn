type PaymentStatus = 'new' | 'paid';

class Payment {
  id: number;
  status: PaymentStatus = 'new';

  constructor(id: number) {
    this.id = id;
  }
  pay() {
    this.status = 'paid'
  }
}

class PersistedPayment extends Payment {
	databaseId: number
	paidAt: Date
}

new PersistedPayment().