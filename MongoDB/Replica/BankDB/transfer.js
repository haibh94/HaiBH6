const session = db.getMongo().startSession();
const accounts = session.getDatabase("BankDB").Accounts;

try {
  session.startTransaction();

  const from = 1;
  const to = 2;
  const amount = 200;

  const sender = accounts.findOne({ _id: from });
  if (sender.balance < amount) throw new Error("Insufficient funds");

  accounts.updateOne({ _id: from }, { $inc: { balance: -amount } });
  accounts.updateOne({ _id: to }, { $inc: { balance: amount } });

  session.commitTransaction();
  print("Transfer successful");
} catch (e) {
  session.abortTransaction();
  print("Transfer failed: " + e.message);
} finally {
  session.endSession();
}