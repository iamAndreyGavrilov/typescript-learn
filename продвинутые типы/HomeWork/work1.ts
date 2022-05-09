//Упражнение - Типизируем ответ сервера

interface IPayment {
  sum: number;
  from: number;
  to: number;
}

interface IPaymentRequest extends IPayment {}

enum PaymentStatus {
  Success = "success",
  Failed = "failed",
}

interface IDataSuccess extends IPayment {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

// 1
interface IResponse {
  status: PaymentStatus;
  data: IDataSuccess | IDataFailed;
}

// 2
interface IResponseSuccess {
  status: PaymentStatus.Success;
  data: IDataSuccess;
}
interface IResponseFailed {
  status: PaymentStatus.Failed;
  data: IDataFailed;
}

// function get(): IResponseSuccess | IResponseFailed {
//   return;
// }
